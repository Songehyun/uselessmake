import React from 'react';

type RankingModalProps = {
  handleSaveRanking: () => void;
  closeModal: () => void;
};

export default function RankingModal({
  handleSaveRanking,
  closeModal,
}: RankingModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">순위</h2>
        <p>순위 리스트를 여기에 추가할 예정입니다.</p>
        <button
          onClick={handleSaveRanking}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          순위 저장
        </button>
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
