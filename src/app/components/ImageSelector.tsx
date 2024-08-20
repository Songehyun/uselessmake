'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSelector() {
  const initialValues = { 1: 10, 2: 100 };
  const [selectedImage, setSelectedImage] = useState(1);
  const [counts, setCounts] = useState(initialValues);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upgrades, setUpgrades] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const upgradeCosts = [100, 500, 1000, 2000];
  const reductionValues = [2, 4, 8, 16]; // 업그레이드에 따른 숫자 감소값

  useEffect(() => {
    const savedMoney = localStorage.getItem('totalMoney');
    if (savedMoney) {
      setTotalMoney(parseInt(savedMoney, 10));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setSelectedImage(1);
      } else if (event.key === 'ArrowRight') {
        setSelectedImage(2);
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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, totalMoney, upgrades]);

  const handleUpgradeClick = (index: number) => {
    // 업그레이드 조건 확인
    if (index > 0 && !upgrades[index - 1]) {
      alert(
        '이 업그레이드를 진행하기 위해서는 이전 업그레이드를 먼저 완료해야 합니다.',
      );
      return;
    }

    if (totalMoney >= upgradeCosts[index]) {
      setTotalMoney(totalMoney - upgradeCosts[index]);
      setUpgrades((prev) => {
        const newUpgrades = [...prev];
        newUpgrades[index] = true;
        return newUpgrades;
      });
      localStorage.setItem(
        'totalMoney',
        (totalMoney - upgradeCosts[index]).toString(),
      );
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
    <div className="relative flex justify-center items-center space-x-4">
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

      <div className="relative flex flex-col items-center">
        <Image
          src="/dummy1.png"
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
          src="/dummy2.png"
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
    </div>
  );
}
