'use client';

import React, { useEffect, useState, useRef } from 'react';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorCard from '../components/ErrorCard';

const InfiniteScrollPosts = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true); 
  const [initialFetchDone, setInitialFetchDone] = useState(false); 
  const observer = useRef();

  const POSTS_TO_FETCH = 100;
  const LOADING_DELAY = 1000;

  const fetchPosts = async (skipCount) => {
 
    if (!hasMorePosts || loading) return;
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

    const res = await fetch(
      `https://dummyjson.com/posts?limit=${POSTS_TO_FETCH}&skip=${skipCount}`
    );

    const data = await res.json();

    if (data.posts.length === 0) {
      setHasMorePosts(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    }

    setLoading(false);
  };

  useEffect(() => {
    const doInitialFetch = async () => {
      await fetchPosts(0);
      setInitialFetchDone(true);
    };
  
    if (!initialFetchDone) {
      doInitialFetch();
    }
  }, [initialFetchDone]); // Add initialFetchDone as a dependency
  

  const lastPostElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMorePosts) {
        fetchPosts(posts.length); // Load more posts when last post is visible
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <div className="pb-12 flex flex-col gap-[16px]">
      {posts.map((post, index) => {
        const postUser = users.find((user) => user.id === post.userId);
        const isLastPost = index === posts.length - 1;

        return (
          <div
            key={`recent-post-${post.id}`}
            ref={isLastPost ? lastPostElementRef : null}
            className="post-card"
          >
            <h1>{post.id}</h1>
            <PostCard
              firstName={postUser.firstName}
              lastName={postUser.lastName}
              username={postUser.username}
              body={post.body}
              tags={post.tags}
              likes={post.reactions.likes}
              dislikes={post.reactions.dislikes}
              views={post.views}
              userId={postUser?.id}
            />
          </div>
        );
      })}
      {loading && <LoadingSpinner isLoading={loading} />}
      {!hasMorePosts && <ErrorCard errorMessage="No more posts to load." />}
    </div>
  );
};

// Memoize the InfiniteScrollPosts component to prevent re-renders
export default React.memo(InfiniteScrollPosts, (prevProps, nextProps) => {
  // Return true if you want to prevent re-render (i.e., users hasn't changed)
  return prevProps.users === nextProps.users;
});
