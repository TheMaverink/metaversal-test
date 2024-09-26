'use client'

import React from 'react';
import Image from 'next/image';

export default function LoadingSpinner({ isLoading, withLabel }) {
  return (
    <div
      className={`loading-spinner transition-opacity ease-in-out duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Image
        src="/images/icons/spinner-icon.png"
        alt="loading-spinner"
        width={24}
        height={24}
        className="object-cover"
        style={{
          animation: 'spin-smooth 1.5s linear infinite',
        }}
      />
      {withLabel && <p className="fade-in">Loading...</p>}
      <style jsx>{`
        @keyframes spin-smooth {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
