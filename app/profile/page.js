import Avatar from '../components/Avatar';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body,
  BodyMedium,
  BodySmall,
  BodyOverline,
  BodyOverlineSmall,
} from '../components/typography';

const ProfilePage = () => {
  return (
    <>
      <div className="flex items-center">
        <Avatar
          src="/images/avatar/avatar-md.png"
          alt="User Avatar"
          size={80}
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>

      <div className="test">
        <Heading1>Test</Heading1>
        <Heading2>Test</Heading2>
        <Heading3>Test</Heading3>
        <Heading4>Test</Heading4>
        <Body>Test</Body>
        <BodyMedium>Test</BodyMedium>
        <BodySmall>Test</BodySmall>
        <BodyOverline>Test</BodyOverline>
        <BodyOverlineSmall>Test</BodyOverlineSmall>
      </div>
    </>
  );
};

export default ProfilePage;
