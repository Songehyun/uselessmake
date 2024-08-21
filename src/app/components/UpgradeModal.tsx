import React from 'react';

type UpgradeModalProps = {
  upgrades: boolean[];
  upgradeCosts: number[];
  reductionValues: number[];
  handleUpgradeClick: (index: number) => void;
  closeModal: () => void;
};

export default function UpgradeModal({
  upgrades,
  upgradeCosts,
  reductionValues,
  handleUpgradeClick,
  closeModal,
}: UpgradeModalProps) {
  return (
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
  );
}
