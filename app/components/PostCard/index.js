import React from 'react';
import Avatar from '../Avatar';
import { Heading4 } from '../typography';

import Image from 'next/image';

export default function PostCard({
  firstName,
  lastName,
  username,
  body,
  tags,
  likes,
  dislikes,
  views,
  userId
}) {
  return (
    <div className="post-card flex flex-col justify-evenly border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom">
      <div className="post-card-header flex justify-start items-center">
        <Avatar userId={userId}/>
        <div className="post-card-header-text flex flex-col">
          <Heading4>{`${firstName} ${lastName}`}</Heading4>
          <p>{username}</p>
        </div>
      </div>

      <div className="post-card-body flex flex-col justify-start items-center">
        <p>{body}</p>

        <div className="post-card-body-tags flex">
          {tags.map((tag) => {
            return <p key={`tag-${tag}-${username}`}>{tag}</p>;
          })}
        </div>
      </div>

      <div className="post-card-footer flex">
        <div className="post-card-footer-item flex">
          <Image
            src={'/images/icons/like-icon.png'}
            alt={'like icon'}
            width={16}
            height={16}
            className="object-cover"
          />

          <p>{likes}</p>
        </div>

        <div className="post-card-footer-item flex">
          <Image
            src={'/images/icons/send-icon.png'}
            alt={'send icon'}
            width={16}
            height={16}
            className="object-cover"
          />

          <p>{dislikes}</p>
        </div>

        <div className="post-card-footer-item flex">
          <Image
            src={'/images/icons/eye-icon.png'}
            alt={'views icon'}
            width={16}
            height={16}
            className="object-cover"
          />

          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}
