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
      className={`rounded-full overflow-hidden cursor-pointer`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: withBorder ? '5px solid white' : 'none',
        ...style
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover transition-opacity duration-300 ease-in-out"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ opacity: withHover && hovered ? 0.5 : 1 }}
      />
    </div>
  );

  return clickable ? (
    <Link href={`/profile/${userId}`}>
      {avatarContent}
    </Link>
  ) : (
    avatarContent
  );
};

export default Avatar;
