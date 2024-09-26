'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Heading3 } from '../typography';

const BackButton = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      href={`/`}
      className="absolute top-1/2 left-[2%] transform -translate-y-1/2 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '24px',
        height: '24px',
        backgroundColor: hovered ? 'rgba(0,0,0,0.05)' : 'transparent',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
      }}
    >
      <Image
        src="/images/icons/back-icon.png"
        alt="back-button"
        width={6}
        height={12}
        style={{ opacity: hovered ? 1 : 0.75 }}
      />
    </Link>
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
