'use client';

import React from 'react';
import Avatar from '../Avatar';
import Button from '../Button';

import { Heading4 } from '../typography';

export default function UserCard({
  firstName,
  lastName,
  username,
  id,
  posts,
  likes,
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="user-card flex border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom ">
      <Avatar id={id}></Avatar>

      <div
        className="user-card-details flex flex-col cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Heading4
          style={{
            textDecoration: hovered ? 'underline' : 'none',
          }}
        >{`${firstName} ${lastName}`}</Heading4>
        <p>{`@${username}`}</p>
      </div>

      <Button label="Follow"></Button>
    </div>
  );
}
