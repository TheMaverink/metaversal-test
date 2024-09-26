'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorCard from '../components/ErrorCard';

const InfiniteScrollPosts = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const observer = useRef();
  const fetchingRef = useRef(false);

  const POSTS_TO_FETCH = 5;
  const LOADING_DELAY = 1000;

  const fetchPosts = useCallback(
    async (skipCount) => {
      if (fetchingRef.current || !hasMorePosts || loading) return;

      fetchingRef.current = true;
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

      const res = await fetch(
        `https://dummyjson.com/posts?limit=${POSTS_TO_FETCH}&skip=${skipCount}`
      );

      const data = await res.json();

      if (data.posts.length === 0) {
        setHasMorePosts(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data.posts]);
        // Save posts to local storage
        localStorage.setItem('posts', JSON.stringify([...posts, ...data.posts]));
      }

      fetchingRef.current = false;
      setLoading(false);
    },
    [hasMorePosts, loading, posts] // Added posts to the dependency array
  );

  useEffect(() => {
    const doInitialFetch = async () => {
      const savedSkipCount = parseInt(localStorage.getItem('skipCount')) || 0;
      const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

      if (savedPosts.length > 0) {
        setPosts(savedPosts);
        setHasMorePosts(savedSkipCount < savedPosts.length);
      }
      if (savedSkipCount >= savedPosts.length) {
        await fetchPosts(savedSkipCount);
      }

      setInitialFetchDone(true);
    };

    if (!initialFetchDone) {
      doInitialFetch();
    }
  }, [initialFetchDone, fetchPosts]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMorePosts) {
          fetchPosts(posts.length);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMorePosts, fetchPosts, posts.length]
  );

  return (
    <div className="pb-12 flex flex-col items-center gap-[16px]">
      {posts.map((post, index) => {
        const postUser = users.find((user) => user.id === post.userId);
        const isLastPost = index === posts.length - 1;

        return (
          <div
            key={`recent-post-${post.id}`}
            ref={isLastPost ? lastPostElementRef : null}
            className="post-card"
          >
            <PostCard
              firstName={postUser?.firstName}
              lastName={postUser?.lastName}
              username={postUser?.username}
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

export default React.memo(InfiniteScrollPosts, (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
});
