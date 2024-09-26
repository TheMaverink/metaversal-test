'use client';

import React from 'react';
import Avatar from '../Avatar';
import { Heading4, BodySmall, BodyMedium } from '../typography';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import PostCardFooter from './PostCardFooter';

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
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const maxLines = 3;
  const bodyLines = body.split('\n');

  const getTruncatedBody = () => {
    if (isExpanded) return body;
    const truncatedBody = bodyLines.join(' ').slice(0, 200);
    return truncatedBody.length < body.length
      ? truncatedBody + '...'
      : truncatedBody;
  };

  return (
    <div
      className="post-card flex flex-col justify-evenly border border-[#E4E7E8] bg-white rounded-[16px] shadow-custom"
      style={{ boxShadow: '0px 1px 3px 0px #1A1A1A14' }}
    >
      <div className="flex gap-[16px] p-[16px]">
        {false ? (
          <Avatar userId={userId} clickable={redirectToUser} />
        ) : (
          <Skeleton containerClassName="flex-1" />
        )}

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
            <div
              className={`post-body ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
              <BodyMedium style={{ color: '#5C6970' }}>
                {getTruncatedBody()}
                {!isExpanded && body.length > 200 && (
                  <span
                    className=" cursor-pointer"
                    onClick={toggleExpand}
                    style={{ color: '#4426D9' }}
                  >
                    {' '}
                    learn more
                  </span>
                )}
              </BodyMedium>
            </div>

            <div className="post-card-body-tags flex gap-[12px]">
              {tags.map((tag) => (
                <BodySmall
                  key={`tag-${tag}-${username}`}
                  style={{ color: '#4426D9' }}
                >
                  {`#${tag}`}
                </BodySmall>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PostCardFooter
        likes={likes}
        dislikes={dislikes}
        views={views}
        loading={true}
      />

      <style jsx>{`
        .post-body {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${maxLines};
        }

        .expanded {
          display: block;
          -webkit-line-clamp: unset;
        }

        .collapsed {
          display: -webkit-box;
          -webkit-line-clamp: ${maxLines};
        }
      `}</style>
    </div>
  );
}
