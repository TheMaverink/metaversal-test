'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import { Heading3 } from '../typography';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="absolute top-1/2 left-[2%] transform -translate-y-1/2 w-6 h-12"
    >
      <Image
        src="/images/icons/back-icon.png"
        alt="back-button"
        width={6}
        height={12}
      />
    </button>
  );
};

//on figma i can see a button on the right side.. but is not mentioned on the specs?

export default function TitleBar() {
  const pathname = usePathname();

  const isProfilePage = pathname.includes('/profile');

  return (
    <div
      className="relative h-14 w-full flex items-center justify-center  border-b border-[#DFDFDF] bg-white"
      style={{ boxShadow: '0px 1px 3px 0px #1A1A1A14' }}
    >
      {isProfilePage && <BackButton />}
      <Heading3>{isProfilePage ? 'Profile' : 'Feed'}</Heading3>
    </div>
  );
}
