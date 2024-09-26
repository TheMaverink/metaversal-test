import React from 'react';
import Image from 'next/image';

import Avatar from '../Avatar';
import Button from '../Button';

import { getButtonBackgrounds } from '../../utils/misc';

import { Heading1, Heading2, Heading4, Body, BodySmall } from '../typography';

const BUTTON_BACKGROUNDS = getButtonBackgrounds();

const DepartmentLabel = ({ children }) => {
  //change colors dynamically?

  // background: var(--Light-Blue-50, #E5F4FF);

  return (
    <div className="py-[6px] px-[12px] rounded-[12px] bg-[#E5F4FF] inline-block">
      <Heading4 style={{ color: ' #0077CC' }}>{children}</Heading4>
    </div>
  );
};

export default function ProfileCard({ user }) {
  const { firstName, lastName, username, address, posts, company } = user;

  const totalLikes = posts.reduce((accumulator, post) => {
    return accumulator + (post.reactions.likes || 0);
  }, 0);

  const TOP_GRADIENT_SIZE = 340;

  return (
    <div
      className={`h-[340px] w-full relative flex flex-col justify-between border border-[#E4E7E8]`}
      style={{
        borderRadius: '12px',
        boxShadow: '0px 1px 0px rgba(26, 26, 26, 0.08)',
      }}
    >
      <div
        className="profile-card-top-gradient w-full flex-none"
        style={{
          height: '18%',
          background:
            'linear-gradient(102.78deg, #ECE9FB 0.31%, #FDEDE7 82.87%)',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      ></div>

      <div className="profile-card-body flex p-4 gap-[8px]">
        <Avatar
          size={120}
          withBorder={true}
          clickable={false}
          style={{
            transform: 'translate(0,-60px)',
            boxShadow: '0px 1px 3px 0px #1A1A1A14',
          }}
        />
        <div className="profile-card-body-details flex flex-col gap-[24px]">
          <div className="profile-card-body-details-top flex flex-col gap-[8px]">
            <Heading1>{`${firstName} ${lastName}`}</Heading1>
            <div className="flex gap-[12px]">
              <Body style={{ color: '#5C6970' }}>{`@${username}`}</Body>
              <div className="flex gap-[4px]">
                <Image
                  src="/images/icons/location-icon.png"
                  alt="location-icon"
                  width={12}
                  height={14}
                />
                <Body
                  style={{ color: '#5C6970' }}
                >{`${address.city}, ${address.country}`}</Body>
              </div>
            </div>
            <div>
              <DepartmentLabel>{company.department}</DepartmentLabel>
            </div>
          </div>

          <div className="profile-card-body-details-bottom flex gap-[24px]">
            <div className="flex flex-col gap-[2px]">
              <Heading2>{posts.length}</Heading2>
              <BodySmall style={{ color: '#5C6970' }}>POSTS</BodySmall>
            </div>

            <div className="flex flex-col gap-[2px]">
              <Heading2>{totalLikes}</Heading2>
              <BodySmall style={{ color: '#5C6970' }}>LIKES</BodySmall>
            </div>
          </div>

          {/* 
          <div className="profile-card-body-posts-details flex">
      
          </div> */}
        </div>
      </div>

      <div
        className="profile-card-body-footer w-full p-4 flex gap-[16px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFAF5 100%)',
          height: '20%',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          borderTop: '1px solid #F1F3F4',
        }}
      >
        <Button label="Follow" style={{ fontWeight: 700 }}></Button>
        <Button
          label="Message"
          backgroundType={BUTTON_BACKGROUNDS.FLAT}
        ></Button>
      </div>
    </div>
  );
}
