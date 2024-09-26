import React from 'react';

export default function CardTopGradient({ children }) {
  return (
    <div className="profile-card-top-gradient w-full h-[64px] bg-gradient-to-r from-[#ECE9FB] to-[#FDEDE7] rounded-t-[12px] relative">
      {children}
    </div>
  );
}
