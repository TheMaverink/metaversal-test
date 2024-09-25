import Image from 'next/image';

const Avatar = ({ src, alt, size = 50 }) => {
  return (
    <div
      className={`rounded-full overflow-hidden`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
