'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSelector() {
  const [selectedImage, setSelectedImage] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setSelectedImage(1);
      } else if (event.key === 'ArrowRight') {
        setSelectedImage(2);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="relative">
        <Image
          src="/src/img/Dimg01.jpg"
          alt="Dummy 1"
          width={300}
          height={300}
          className={`border-4 ${
            selectedImage === 1 ? 'border-green-500' : 'border-transparent'
          }`}
        />
        {selectedImage === 1 && (
          <div className="absolute inset-0 border-3 border-green-500 pointer-events-none"></div>
        )}
      </div>
      <div className="relative">
        <Image
          src="/src/img/Dimg02.jpg"
          alt="Dummy 2"
          width={300}
          height={300}
          className={`border-4 ${
            selectedImage === 2 ? 'border-green-500' : 'border-transparent'
          }`}
        />
        {selectedImage === 2 && (
          <div className="absolute inset-0 border-3 border-green-500 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
}
