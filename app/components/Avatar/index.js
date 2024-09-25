'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

const Avatar = ({
  src = '/images/avatar/avatar-md.png',
  alt = 'avatar',
  size = 50,
  withHover = true,
  userId,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href={`/profile/${userId}`}>
      <div
        className={`rounded-full overflow-hidden cursor-pointer`}
        style={{ width: `${size}px`, height: `${size}px` }}
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
    </Link>
  );
};

export default Avatar;
