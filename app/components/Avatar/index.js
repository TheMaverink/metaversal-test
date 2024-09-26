'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Avatar = ({
  src = '/images/avatar/avatar-md.png',
  alt = 'avatar',
  size = 50,
  withHover = true,
  clickable = true,
  userId,
  withBorder,
  style
}) => {
  const [hovered, setHovered] = React.useState(false);

  const avatarContent = (
    <div
      className={`rounded-full overflow-hidden`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: withBorder ? '5px solid white' : 'none',
        ...style
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover transition-opacity duration-300 ease-in-out"
        style={{ opacity: withHover && hovered ? 0.5 : 1 }}
      />
    </div>
  );

  return clickable ? (
    <Link href={`/profile/${userId}`} passHref>
      {avatarContent}
    </Link>
  ) : (
    avatarContent
  );
};

export default Avatar;
