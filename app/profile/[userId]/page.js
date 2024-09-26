import Avatar from '../../components/Avatar';
import ProfileCard from '../../components/ProfileCard';
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

  const user = await getUser(userId);

  console.log('user');
  console.log(user);

  //maybe get data from context/local storage or cache?

  return (
    <section className="page-profile">
      <div className="flex items-center">
        <ProfileCard user={user} />
      </div>
    </section>
  );
}
