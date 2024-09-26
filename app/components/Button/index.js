'use client';

import React from 'react';
import { getButtonBackgrounds } from '../../utils/misc';

import { Body } from '../typography';

const BUTTON_BACKGROUNDS = getButtonBackgrounds();

export default function Button({
  label,
  onClick,
  backgroundType = BUTTON_BACKGROUNDS.GRADIENT,
  style,
}) {
  const [hovered, setHovered] = React.useState(false);

  let customStyle = {
    transition: 'background 0.3s ease, color 0.3s ease, border 0.3s ease',
  };

  let color;

  if (backgroundType === BUTTON_BACKGROUNDS.GRADIENT) {
    color = 'white';
    customStyle = {
      ...customStyle,
      background: hovered
        ? 'linear-gradient(180deg, #FF0073 -85.89%, #811AB8 34.45%, #4426D9 100%)'
        : 'linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)',
      fontWeight: 700,
    };
  } else if (backgroundType === BUTTON_BACKGROUNDS.FLAT) {
    (color = hovered ? '#361FAD' : '#4426D9'),
      (customStyle = {
        ...customStyle,
        background: hovered ? '#ECE9FB' : 'transparent',
        border: `1px solid ${hovered ? '#361FAD' : '#4426D9'}`,
        fontWeight: 700,
      });
  }

  return (
    <button
      onClick={onClick}
      className={`py-[6px] px-[10px] md:py-[8px] md:px-[14px] lg:py-[16px] lg:px-[24px] rounded-[100px] flex justify-center items-center`}
      style={{ ...customStyle, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Body style={{ color ,fontWeight:'inherit'}}>{label}</Body>
    </button>
  );
}
