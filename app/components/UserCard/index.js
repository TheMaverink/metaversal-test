'use client';

import React from 'react';
import Link from 'next/link';

import Avatar from '../Avatar';
import Button from '../Button';

import { Heading4, BodySmall } from '../typography';
import { getButtonBackgrounds } from '../../utils/misc';

const BUTTON_BACKGROUNDS = getButtonBackgrounds();

export default function UserCard({
  firstName,
  lastName,
  username,
  userId,
  posts,
  likes,
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="user-card flex border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom p-[16px] items-center justify-between"
      style={{ boxShadow: '0px 1px 3px 0px #1A1A1A14' }}
    >
      <div className="flex gap-[12px] items-center">
        <Avatar userId={userId} size={48}></Avatar>

        <Link
          href={`/profile/${userId}`}
          className="user-card-details flex flex-col cursor-pointer gap-[4px]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Heading4
            style={{
              textDecoration: hovered ? 'underline' : 'none',
            }}
          >{`${firstName} ${lastName}`}</Heading4>
          <BodySmall style={{ color: '#5C6970' }}>{`@${username}`}</BodySmall>
        </Link>
      </div>

      <Button label="Follow" backgroundType={BUTTON_BACKGROUNDS.FLAT}></Button>
    </div>
  );
}
