import React from 'react';
import { getAllPosts, getAllUsers } from '../utils/api';
import PostCard from '../components/PostCard';
import UserCard from '../components/UserCard';
import RecentPosts from './RecentPosts';
import { Heading2 } from '../components/typography';
import ErrorCard from '../components/ErrorCard';

export default async function FeedPage() {
  try {
    const { usersIdsWithMostPosts, suggestedPosts } = await getAllPosts();
    const response = await getAllUsers();

    let usersWithMostPosts;

    if (response?.users) {
      usersWithMostPosts = response.users.filter((user) =>
        usersIdsWithMostPosts.includes(user.id.toString())
      );
    } else {
      return;
    }

    return (
      <section className="page-feed flex flex-col gap-[48px]">
        <div className="page-feed suggested-posts flex flex-col space-y-4 ">
          <Heading2>Suggested Posts</Heading2>
          {suggestedPosts.map((post) => {
            const postUser = response.users.find(
              (user) => user.id === post.userId
            );

            return (
              <PostCard
                key={`suggested-post-${post.id}`}
                firstName={postUser.firstName}
                lastName={postUser.lastName}
                username={postUser.username}
                body={post.body}
                tags={post.tags}
                likes={post.reactions.likes}
                dislikes={post.reactions.dislikes}
                views={post.views}
                userId={postUser.id}
              />
            );
          })}
        </div>

        <div className="who-to-follow">
          <Heading2>Who to follow</Heading2>
          <div className="who-to-follow grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[16px]">
            {usersWithMostPosts.map((user) => (
              <UserCard
                key={`who-to-follow-${user.id}`}
                firstName={user.firstName}
                lastName={user.lastName}
                username={user.username}
                userId={user.id}
                style={{ gridColumn: 'span 1' }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <Heading2>Recent</Heading2>
          <RecentPosts users={response.users} />
        </div>
      </section>
    );
  } catch (error) {
    const errorMessage = error.message || 'An unknown error occurred';

    return <ErrorCard errorMessage={errorMessage} />;
  }
}
