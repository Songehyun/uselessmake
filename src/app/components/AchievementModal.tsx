import React from 'react';

type AchievementModalProps = {
  isAchievementCompleted: boolean;
  isRewardClaimed: boolean;
  handleClaimReward: () => void;
  closeModal: () => void;
};

export default function AchievementModal({
  isAchievementCompleted,
  isRewardClaimed,
  handleClaimReward,
  closeModal,
}: AchievementModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">업적</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">소지액 100,000원 달성</h3>
            <p className="text-sm">보상 : 10,000 원</p>
            {isAchievementCompleted ? (
              isRewardClaimed ? (
                <button
                  className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg"
                  disabled
                >
                  완료
                </button>
              ) : (
                <button
                  onClick={handleClaimReward}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  수령
                </button>
              )
            ) : (
              <button
                className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-lg"
                disabled
              >
                진행 중
              </button>
            )}
          </div>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
