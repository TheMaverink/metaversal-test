import ProfileCard from '../../components/ProfileCard';
import { Heading2 } from '../../components/typography';

import RecentPosts from './RecentPosts';

import { getUser } from '../../utils/api';

export default async function ProfilePage({ params }) {
  const { userId } = params;

  const user = await getUser(userId);

  //maybe get data from context/local storage or cache?

  return (
    <section className="page-profile">
      {user ? (
        <div className="page-feed user-recent-posts flex flex-col space-y-4 gap-[48px]">
          <ProfileCard user={user} />

          <div className="flex flex-col gap-[16px]" >
            <Heading2>Recent</Heading2>
            <RecentPosts user={user} />
          </div>
        </div>
      ) : (
        'loading'
      )}
    </section>
  );
}
