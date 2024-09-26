'use client';

import React from 'react';
import { getButtonBackgrounds } from '../../utils/misc';

import {BodyBold} from '../typography'

const BUTTON_BACKGROUNDS = getButtonBackgrounds();

export default function Button({
  size,
  label,
  onClick,
  backgroundType = BUTTON_BACKGROUNDS.GRADIENT,
  style
}) {
  const [hovered, setHovered] = React.useState(false);

  let customStyle = {
    transition: 'background 0.3s ease, color 0.3s ease, border 0.3s ease'
  };

  if (backgroundType === BUTTON_BACKGROUNDS.GRADIENT) {
    customStyle = {
      ...customStyle,
      background: hovered
        ? 'linear-gradient(180deg, #FF0073 -85.89%, #811AB8 34.45%, #4426D9 100%)'
        : 'linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%)',
      color: 'white',
    };
  } else if (backgroundType === BUTTON_BACKGROUNDS.FLAT) {
    customStyle = {
      ...customStyle,
      background: hovered ? '#ECE9FB' : 'transparent',
      color: hovered ? '#361FAD' : '#4426D9',
      border: `1px solid ${hovered ? '#361FAD' : '#4426D9'}`,
    };
  }

  return (
    <button
      onClick={onClick}
      className={`py-[8px] px-[14px] rounded-[100px] flex justify-center items-center`}
      style={{...customStyle,...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{label}</span>
    </button>
  );
}
