import React from 'react';

type ShopModalProps = {
  handleBuyAutoMiner: () => void;
  handleBuyPremiumMiner: () => void;
  closeModal: () => void;
};

export default function ShopModal({
  handleBuyAutoMiner,
  handleBuyPremiumMiner,
  closeModal,
}: ShopModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">상점</h2>
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={handleBuyAutoMiner}
            className="px-4 py-2 rounded-lg bg-yellow-500 text-white"
          >
            자동채굴기계
            <br />
            비용: 10000원
            <br />
            매초 10원 추가
          </button>

          <button
            onClick={handleBuyPremiumMiner}
            className="px-4 py-2 rounded-lg bg-red-500 text-white"
          >
            고급자동채굴기계
            <br />
            비용: 100000원
            <br />
            매초 150원 추가
          </button>
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
