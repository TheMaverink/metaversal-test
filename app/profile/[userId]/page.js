import Avatar from '../../components/Avatar';
import { getUser, getUserPosts } from '../../utils/api';

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
} from '../../components/typography';



export default async function ProfilePage({ params }) {
  const { userId } = params;

  const user = await getUser(userId)

  console.log("user")
  console.log(user)

  //maybe get data from context/local storage or cache?

  return (
    <>
      <div className="flex items-center">
        <Avatar size={80} />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>
    </>
  );
}
