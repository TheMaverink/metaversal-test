'use client';

import React from 'react';
import Avatar from '../Avatar';
import { Heading4, BodySmall, BodyMedium } from '../typography';

import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({
  firstName,
  lastName,
  username,
  body,
  tags,
  likes,
  dislikes,
  views,
  userId,
  redirectToUser,
}) {
  const [isUserHovered, setIsUserHovered] = React.useState(false);

  return (
    <div
      className="post-card flex flex-col justify-evenly border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom "
      style={{ boxShadow: '0px 1px 3px 0px #1A1A1A14' }}
    >
      <div className="flex gap-[16px] p-[16px]">
        <Avatar userId={userId} clickable={redirectToUser} />

        <div className="flex flex-col gap-[12px]">
          <div className="post-card-header flex justify-start items-center">
            <Link
              href={`/profile/${userId}`}
              className="post-card-header-text flex flex-col cursor-pointer gap-[4px]"
              onMouseEnter={() => setIsUserHovered(true)}
              onMouseLeave={() => setIsUserHovered(false)}
            >
              <Heading4
                style={{
                  textDecoration: isUserHovered ? 'underline' : 'none',
                }}
              >{`${firstName} ${lastName}`}</Heading4>
              <BodySmall
                style={{ color: '#5C6970' }}
              >{`@${username}`}</BodySmall>
            </Link>
          </div>
          <div className="post-card-body flex flex-col justify-center items-start gap-[12px]">
            <BodyMedium style={{ color: '#5C6970' }}>{body}</BodyMedium>

            <div className="post-card-body-tags flex gap-[12px]">
              {tags.map((tag) => {
                return (
                  <BodySmall
                    key={`tag-${tag}-${username}`}
                    style={{ color: '#4426D9' }}
                  >{`#${tag}`}</BodySmall>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* //add hover effect? */}
      <div
        className="post-card-footer flex h-[48px] gap-[24px] p-[16px] "
        style={{ borderTop: '1px solid #F1F3F4' }}
      >
        <div className="post-card-footer-item flex items-center gap-[4px]">
          <Image
            src={'/images/icons/like-icon.png'}
            alt={'like icon'}
            width={16}
            height={16}
            className="object-cover"
          />

          <BodyMedium style={{ color: '#5C6970' }}>{likes}</BodyMedium>
        </div>

        <div className="post-card-footer-item flex items-center gap-[4px]">
          <Image
            src={'/images/icons/send-icon.png'}
            alt={'send icon'}
            width={16}
            height={16}
            className="object-cover"
          />

          <BodyMedium style={{ color: '#5C6970' }}>{dislikes}</BodyMedium>
        </div>

        <div className="post-card-footer-item flex items-center gap-[4px] ">
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
    </div>
  );
}
