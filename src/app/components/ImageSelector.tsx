'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Counts 타입 정의
type Counts = {
  [key: number]: number;
};

export default function ImageSelector() {
  const initialValues: Counts = { 1: 10, 2: 100, 3: 200, 4: 500 }; // 200원, 500원 추가
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [counts, setCounts] = useState<Counts>(initialValues);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [upgrades, setUpgrades] = useState<boolean[]>(Array(12).fill(false));
  const [keyDown, setKeyDown] = useState<{ [key: string]: boolean }>({});

  const upgradeCosts = [
    100,
    250,
    500,
    1000, // 첫 번째 줄
    3000,
    5000,
    10000,
    15000, // 두 번째 줄
    30000,
    50000,
    70000,
    100000, // 세 번째 줄
  ];

  const reductionValues = [
    2,
    4,
    8,
    16, // 첫 번째 줄
    32,
    64,
    128,
    256, // 두 번째 줄
    512,
    1024,
    2048,
    4096, // 세 번째 줄
  ];

  useEffect(() => {
    const savedMoney = localStorage.getItem('totalMoney');
    const savedUpgrades = localStorage.getItem('upgrades');

    if (savedMoney) {
      setTotalMoney(parseInt(savedMoney, 10));
    }

    if (savedUpgrades) {
      setUpgrades(JSON.parse(savedUpgrades));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keyDown[event.key]) return; // 키가 이미 눌려 있는 상태면 무시
      setKeyDown((prev) => ({ ...prev, [event.key]: true }));

      if (event.key === 'ArrowLeft') {
        setSelectedImage((prev) => (prev === 1 ? 4 : prev - 1)); // 왼쪽으로 이동
      } else if (event.key === 'ArrowRight') {
        setSelectedImage((prev) => (prev === 4 ? 1 : prev + 1)); // 오른쪽으로 이동
      } else if (event.key === 'z' || event.key === 'x') {
        const currentReduction = reductionValues.reduce(
          (acc, val, idx) => (upgrades[idx] ? val : acc),
          1,
        );

        setCounts((prevCounts) => {
          const newCount = prevCounts[selectedImage] - currentReduction;

          if (newCount < 0) {
            const earnedMoney = initialValues[selectedImage];
            const newTotalMoney = totalMoney + earnedMoney;
            setTotalMoney(newTotalMoney);

            localStorage.setItem('totalMoney', newTotalMoney.toString());

            return {
              ...prevCounts,
              [selectedImage]: initialValues[selectedImage],
            };
          } else {
            return {
              ...prevCounts,
              [selectedImage]: newCount,
            };
          }
        });
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeyDown((prev) => ({ ...prev, [event.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedImage, totalMoney, upgrades, keyDown]);

  const handleUpgradeClick = (index: number) => {
    if (index > 0 && !upgrades[index - 1]) {
      alert(
        '이 업그레이드를 진행하기 위해서는 이전 업그레이드를 먼저 완료해야 합니다.',
      );
      return;
    }

    if (totalMoney >= upgradeCosts[index]) {
      const newTotalMoney = totalMoney - upgradeCosts[index];
      setTotalMoney(newTotalMoney);
      const newUpgrades = [...upgrades];
      newUpgrades[index] = true;
      setUpgrades(newUpgrades);

      localStorage.setItem('totalMoney', newTotalMoney.toString());
      localStorage.setItem('upgrades', JSON.stringify(newUpgrades));
    } else {
      alert('업그레이드를 진행할 충분한 돈이 없습니다.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="fixed top-4 right-4 text-2xl font-bold z-50">
        {totalMoney.toLocaleString()}원
        <button
          onClick={openModal}
          className="ml-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          업그레이드
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">업그레이드</h2>
            <div className="grid grid-cols-4 gap-4">
              {upgradeCosts.map((cost, index) => (
                <button
                  key={index}
                  onClick={() => handleUpgradeClick(index)}
                  className={`px-4 py-2 rounded-lg ${
                    upgrades[index]
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-black'
                  }`}
                  disabled={upgrades[index]}
                >
                  {index + 1}번째 업그레이드
                  <br />
                  비용: {cost}원<br />
                  감소량: {reductionValues[index]}
                </button>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="relative flex flex-col items-center">
          <Image
            src="/Dimg1.png"
            alt="Dummy 1"
            width={300}
            height={300}
            className={`border-4 ${
              selectedImage === 1 ? 'border-blue-500' : 'border-transparent'
            }`}
          />
          {selectedImage === 1 && (
            <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none"></div>
          )}
          <p className="mt-2 text-lg font-semibold">{counts[1]}</p>
        </div>
        <div className="relative flex flex-col items-center">
          <Image
            src="/Dimg2.png"
            alt="Dummy 2"
            width={300}
            height={300}
            className={`border-4 ${
              selectedImage === 2 ? 'border-blue-500' : 'border-transparent'
            }`}
          />
          {selectedImage === 2 && (
            <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none"></div>
          )}
          <p className="mt-2 text-lg font-semibold">{counts[2]}</p>
        </div>
        <div className="relative flex flex-col items-center">
          <Image
            src="/Dimg3.png"
            alt="Dummy 3"
            width={300}
            height={300}
            className={`border-4 ${
              selectedImage === 3 ? 'border-blue-500' : 'border-transparent'
            }`}
          />
          {selectedImage === 3 && (
            <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none"></div>
          )}
          <p className="mt-2 text-lg font-semibold">{counts[3]}</p>
        </div>
        <div className="relative flex flex-col items-center">
          <Image
            src="/Dimg4.png"
            alt="Dummy 4"
            width={300}
            height={300}
            className={`border-4 ${
              selectedImage === 4 ? 'border-blue-500' : 'border-transparent'
            }`}
          />
          {selectedImage === 4 && (
            <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none"></div>
          )}
          <p className="mt-2 text-lg font-semibold">{counts[4]}</p>
        </div>
      </div>
    </div>
  );
}
