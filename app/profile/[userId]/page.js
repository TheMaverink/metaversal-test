import ProfileCard from '../../components/ProfileCard';
import { Heading2 } from '../../components/typography';
import RecentPosts from './RecentPosts';
import ErrorCard from '../../components/ErrorCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { getUser } from '../../utils/api';

export default async function ProfilePage({ params }) {
  try {
    const { userId } = params;

    let user;
    let errorMessage = null;

    try {
      user = await getUser(userId);
    } catch (error) {
      errorMessage = error.message;
    }

    if (errorMessage) {
      return <ErrorCard errorMessage={errorMessage} />;
    }

    if (!user) {
      return <LoadingSpinner isLoading={true} />;
    }

    return (
      <section className="page-profile">
        <div className="page-feed user-recent-posts flex flex-col space-y-4 gap-[48px]">
          <ProfileCard user={user} />
          <div className="flex flex-col gap-[16px]">
            <Heading2>Recent</Heading2>
            <RecentPosts user={user} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    const errorMessage = error.message || 'An unknown error occurred';

    return <ErrorCard errorMessage={errorMessage} />;
  }
}
