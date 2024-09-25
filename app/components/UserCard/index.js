import React from 'react';
import Avatar from '../Avatar';
import Button from '../Button'

import { Heading4 } from '../typography';

export default function UserCard({
  firstName,
  lastName,
  username,
  id,
  posts,
  likes,
}) {
  return (
    <div className="user-card flex border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom">
      <Avatar></Avatar>

      <div className="user-card-details flex flex-col">
        <Heading4>{`${firstName} ${lastName}`}</Heading4>
        <p>{`@${username}`}</p>
      </div>

      <Button label="Follow"></Button>
    </div>
  );
}
