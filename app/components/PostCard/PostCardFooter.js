'use client';

import React from 'react';
import { BodyMedium } from '../typography';
import Image from 'next/image';

export default function PostCardFooter({
  likes,
  dislikes,
  views,
  loading
}) {
  return (
    <div
      className="post-card-footer flex h-[48px] gap-[24px] p-[16px]"
      style={{ borderTop: '1px solid #F1F3F4' }}
    >
      <div className="post-card-footer-item flex items-center gap-[4px] cursor-pointer">
        <Image
          src={'/images/icons/like-icon.png'}
          alt={'like icon'}
          width={16}
          height={16}
          className="object-cover"
        />
        <BodyMedium style={{ color: '#5C6970' }}>{likes}</BodyMedium>
      </div>

      <div className="post-card-footer-item flex items-center gap-[4px] cursor-pointer">
        <Image
          src={'/images/icons/send-icon.png'}
          alt={'send icon'}
          width={16}
          height={16}
          className="object-cover"
        />
        <BodyMedium style={{ color: '#5C6970' }}>{dislikes}</BodyMedium>
      </div>

      <div className="post-card-footer-item flex items-center gap-[4px] cursor-pointer">
        <Image
          src={'/images/icons/eye-icon.png'}
          alt={'views icon'}
          width={16}
          height={16}
          className="object-cover"
        />
        <BodyMedium style={{ color: '#5C6970' }}>{views}</BodyMedium>
      </div>
    </div>
  );


}
