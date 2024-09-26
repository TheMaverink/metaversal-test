import React from 'react';

import Image from 'next/image';

import { Heading3, Body } from '../typography';

export default function ErrorCard({ errorMessage }) {
  return (
    <div
      className="post-card flex flex-col justify-evenly items-center gap-[24px] border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom p-[24px]"
      style={{ boxShadow: '0px 1px 3px 0px #1A1A1A14' }}
    >
      <Image
        src={'/images/icons/warning-icon.png'}
        alt={'error'}
        width={50}
        height={50}
        className="object-cover transition-opacity duration-300 ease-in-out"
      />

      <div className="flex flex-col items-center gap-[8px]">
        <Heading3>{errorMessage}</Heading3>

        <Body style={{ color: '#5C6970' }}>
          We're sorry but it's for the test.
        </Body>
      </div>
    </div>
  );
}
