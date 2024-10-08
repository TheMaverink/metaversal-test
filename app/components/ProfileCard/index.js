'use client';

import { useWindowSize } from '../../utils/hooks';

import ProfileCardSmall from './ProfileCardSmall';
import ProfileCardMedium from './ProfileCardMedium';

const BREAKPOINT = 640;

export default function ProfileCard({ user, loading = true }) {
  const { posts } = user;

  const totalLikes = posts.reduce((accumulator, post) => {
    return accumulator + (post.reactions.likes || 0);
  }, 0);

  const { width } = useWindowSize();

  return width > BREAKPOINT ? (
    <ProfileCardMedium user={{ ...user, totalLikes }} loading={loading} />
  ) : (
    <ProfileCardSmall user={{ ...user, totalLikes }} loading={loading} />
  );
}
