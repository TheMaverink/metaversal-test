import React from 'react';
import { getAllPosts, getAllUsers } from '../utils/api';
import PostCard from '../components/PostCard';

import { Heading2 } from '../components/typography';

export default async function FeedPage() {
  const { posts, usersIdsWithMostPosts, suggestedPosts } = await getAllPosts();

  const { users } = await getAllUsers();

  const usersWithMostPosts = users.filter((user) => {
    return usersIdsWithMostPosts.includes(user.id.toString());
  });

  console.log('users');
  console.log(users);
  return (
    <section className="page-feed">
      <div className="suggested-posts flex flex-col space-y-4">
        <Heading2>Suggested Posts</Heading2>
        {suggestedPosts.map((post, index) => {
          const { id, title, body, tags, reactions, views, userId } = post;

          const postUser = users.filter((user) => {
            return user.id == userId;
          })[0];

          return (
            <PostCard
              key={`post-${id}`}
              firstName={postUser.firstName}
              lastName={postUser.lastName}
              username={postUser.username}
              body={body}
              tags={tags}
              likes={reactions.likes}
              dislikes={reactions.dislikes}
              views={views}
            ></PostCard>
          );
        })}
      </div>

      <div className="who-to-follow flex flex-col space-y-4">
        {usersWithMostPosts.map((user, index) => {
          return <p>{user.firstName}</p>;
        })}
      </div>
    </section>
  );
}
