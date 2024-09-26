import React from 'react';
import Image from 'next/image';

import Avatar from '../../Avatar';
import Button from '../../Button';
import CardTopGradient from '../common/CardTopGradient';
import DepartmentLabel from '../common/DepartmentLabel';

import { getButtonBackgrounds } from '../../../utils/misc';

import { Heading1, Heading2, Body, BodySmall } from '../../typography';

const BUTTON_BACKGROUNDS = getButtonBackgrounds();

export default function ProfileCardMedium({ user }) {
  const { firstName, lastName, username, address, posts, company, totalLikes } =
    user;

  return (
    <div className="w-full relative flex flex-col justify-between border border-[#E4E7E8] h-[435px] max-h-[340px] rounded-[12px] shadow-[0px_1px_0px_rgba(26,26,26,0.08)]">
      <CardTopGradient />
      <div
        className="profile-card-body flex flex-row items-start p-4 gap-[8px]"
        style={{
          transform: 'translate(0,0px)',
        }}
      >
        <Avatar
          size={120}
          withBorder={true}
          clickable={false}
          style={{
            transform: 'translate(0,-60px)',
            boxShadow: '0px 1px 3px 0px #1A1A1A14',
          }}
        />
        <div className="profile-card-body-details flex flex-col gap-[24px] items-center">
          <div className="profile-card-body-details-top flex flex-col gap-[12px]">
            <Heading1>{`${firstName} ${lastName}`}</Heading1>
            <div className="flex flex-row items-center gap-[12px]">
              <Body style={{ color: '#5C6970' }}>{`@${username}`}</Body>
              <div className="flex gap-[4px]">
                <Image
                  src="/images/icons/location-icon.png"
                  alt="location-icon"
                  width={16}
                  height={16}
                />
                <Body
                  style={{ color: '#5C6970' }}
                >{`${address.city}, ${address.country}`}</Body>
              </div>
            </div>
            <div className="flex justify-start">
              <DepartmentLabel>{company.department}</DepartmentLabel>
            </div>
          </div>

          <div className="profile-card-body-details-bottom flex gap-[24px] items-start w-full">
            <div className="flex flex-col gap-[2px] items-start">
              <Heading2>{posts.length}</Heading2>
              <BodySmall style={{ color: '#5C6970' }}>POSTS</BodySmall>
            </div>

            <div className="flex flex-col gap-[2px] items-start">
              <Heading2>{totalLikes}</Heading2>
              <BodySmall style={{ color: '#5C6970' }}>LIKES</BodySmall>
            </div>
          </div>
        </div>
      </div>

      <div
        className="profile-card-body-footer w-full p-4 flex gap-[16px] h-[68px] justify-start"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFAF5 100%)',
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
