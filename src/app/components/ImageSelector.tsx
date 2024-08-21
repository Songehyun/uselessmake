'use client';

import { useState, useEffect } from 'react';
import graphqlOperation from 'aws-amplify';
import API from 'aws-amplify';
import { createRanking } from '../../graphql/mutations'; // 경로는 실제 프로젝트 구조에 맞게 수정하세요
import AchievementModal from './AchievementModal';
import RankingModal from './RankingModal';
import UpgradeModal from './UpgradeModal';
import ShopModal from './ShopModal';
import ImageGrid from './ImageGrid';

export default function ImageSelector() {
  const initialValues = {
    1: 10,
    2: 100,
    3: 200,
    4: 500,
    5: 1000,
    6: 2000,
    7: 5000,
    8: 10000,
  };

  const upgradeCosts = [
    100, 250, 500, 1000, 3000, 5000, 10000, 15000, 30000, 50000, 70000, 100000,
  ];

  const reductionValues = [
    2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096,
  ];

  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [counts, setCounts] = useState(initialValues);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState<boolean>(false);
  const [upgrades, setUpgrades] = useState<boolean[]>(Array(12).fill(false));
  const [isAchievementModalOpen, setIsAchievementModalOpen] =
    useState<boolean>(false);
  const [autoMinerCount, setAutoMinerCount] = useState<number>(0);
  const [premiumMinerCount, setPremiumMinerCount] = useState<number>(0);
  const [isRankingModalOpen, setIsRankingModalOpen] = useState<boolean>(false);
  const [isAchievementCompleted, setIsAchievementCompleted] =
    useState<boolean>(false);
  const [isRewardClaimed, setIsRewardClaimed] = useState<boolean>(false);

  useEffect(() => {
    const savedAchievementStatus = localStorage.getItem(
      'isAchievementCompleted',
    );
    const savedRewardStatus = localStorage.getItem('isRewardClaimed');

    if (savedAchievementStatus) {
      setIsAchievementCompleted(JSON.parse(savedAchievementStatus));
    }

    if (savedRewardStatus) {
      setIsRewardClaimed(JSON.parse(savedRewardStatus));
    }
  }, []);

  useEffect(() => {
    if (totalMoney >= 100000 && !isAchievementCompleted) {
      setIsAchievementCompleted(true);
      localStorage.setItem('isAchievementCompleted', 'true');
    }
  }, [totalMoney, isAchievementCompleted]);

  const handleClaimReward = () => {
    if (isAchievementCompleted && !isRewardClaimed) {
      setTotalMoney((prevMoney) => {
        const newTotalMoney = prevMoney + 10000;
        localStorage.setItem('totalMoney', newTotalMoney.toString());
        return newTotalMoney;
      });
      setIsRewardClaimed(true);
      localStorage.setItem('isRewardClaimed', 'true');
    }
  };

  const handleSaveRanking = () => {
    const username = prompt('이름을 입력하세요');
    if (username) {
      saveRanking(username, totalMoney);
    }
  };

  const saveRanking = async (username: string, score: number) => {
    try {
      const result = await API.graphql(
        graphqlOperation(createRanking, { input: { username, score } }),
      );
      console.log('Ranking saved:', result);
    } catch (error) {
      console.error('Error saving ranking:', error);
    }
  };

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

  const handleBuyAutoMiner = () => {
    const autoMinerCost = 10000;

    if (totalMoney >= autoMinerCost) {
      const newTotalMoney = totalMoney - autoMinerCost;
      setTotalMoney(newTotalMoney);
      const newAutoMinerCount = autoMinerCount + 1;
      setAutoMinerCount(newAutoMinerCount);

      localStorage.setItem('totalMoney', newTotalMoney.toString());
      localStorage.setItem('autoMinerCount', newAutoMinerCount.toString());
    } else {
      alert('자동채굴기계를 구매할 충분한 돈이 없습니다.');
    }
  };

  const handleBuyPremiumMiner = () => {
    const premiumMinerCost = 100000;

    if (totalMoney >= premiumMinerCost) {
      const newTotalMoney = totalMoney - premiumMinerCost;
      setTotalMoney(newTotalMoney);
      const newPremiumMinerCount = premiumMinerCount + 1;
      setPremiumMinerCount(newPremiumMinerCount);

      localStorage.setItem('totalMoney', newTotalMoney.toString());
      localStorage.setItem(
        'premiumMinerCount',
        newPremiumMinerCount.toString(),
      );
    } else {
      alert('고급자동채굴기계를 구매할 충분한 돈이 없습니다.');
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="fixed top-4 left-4 text-2xl font-bold z-50">
        <button
          onClick={() => setIsAchievementModalOpen(true)}
          className="ml-4 mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          업적
        </button>
        <button
          onClick={() => setIsRankingModalOpen(true)}
          className="ml-4 mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          순위
        </button>
      </div>
      <div className="fixed top-4 right-4 text-2xl font-bold z-50">
        {totalMoney.toLocaleString()}원
        <button
          onClick={() => setIsUpgradeModalOpen(true)}
          className="ml-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          업그레이드
        </button>
        <button
          onClick={() => setIsShopModalOpen(true)}
          className="ml-4 mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          상점
        </button>
      </div>

      {isAchievementModalOpen && (
        <AchievementModal
          isAchievementCompleted={isAchievementCompleted}
          isRewardClaimed={isRewardClaimed}
          handleClaimReward={handleClaimReward}
          closeModal={() => setIsAchievementModalOpen(false)}
        />
      )}

      {isRankingModalOpen && (
        <RankingModal
          handleSaveRanking={handleSaveRanking}
          closeModal={() => setIsRankingModalOpen(false)}
        />
      )}

      {isUpgradeModalOpen && (
        <UpgradeModal
          upgrades={upgrades}
          upgradeCosts={upgradeCosts}
          reductionValues={reductionValues}
          handleUpgradeClick={handleUpgradeClick}
          closeModal={() => setIsUpgradeModalOpen(false)}
        />
      )}

      {isShopModalOpen && (
        <ShopModal
          handleBuyAutoMiner={handleBuyAutoMiner}
          handleBuyPremiumMiner={handleBuyPremiumMiner}
          closeModal={() => setIsShopModalOpen(false)}
        />
      )}

      <ImageGrid
        selectedImage={selectedImage}
        counts={counts}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
}
