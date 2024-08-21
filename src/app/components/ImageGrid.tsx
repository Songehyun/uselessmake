import React from 'react';
import Image from 'next/image';

type ImageGridProps = {
  selectedImage: number;
  counts: { [key: number]: number };
  setSelectedImage: (index: number) => void;
};

export default function ImageGrid({
  selectedImage,
  counts,
  setSelectedImage,
}: ImageGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {Object.keys(counts).map((key) => (
        <div
          key={key}
          className="relative flex flex-col items-center"
          style={{ width: '300px', height: '250px' }}
          onClick={() => setSelectedImage(parseInt(key))}
        >
          <Image
            src={`/img/Dimg${key}.jpg`}
            alt={`Dummy ${key}`}
            width={300}
            height={250}
            className={`object-cover w-full h-full ${
              selectedImage === parseInt(key)
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
          />
          {selectedImage === parseInt(key) && (
            <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none"></div>
          )}
          <p className="mt-2 text-lg font-semibold">{counts[parseInt(key)]}</p>
        </div>
      ))}
    </div>
  );
}
