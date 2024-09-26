'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import PostCard from '../../components/PostCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorCard from '../../components/ErrorCard';

const InfiniteScrollPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const observer = useRef();
  const fetchingRef = useRef(false);

  const POSTS_TO_FETCH = 5;
  const LOADING_DELAY = 3000;

  const fetchPosts = useCallback(
    async (skipCount) => {
      if (fetchingRef.current || loading) return;

      fetchingRef.current = true;
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

      const res = await fetch(
        `https://dummyjson.com/users/${user.id}/posts?limit=${POSTS_TO_FETCH}&skip=${skipCount}`
      );

      const data = await res.json();

      if (data.posts.length === 0) {
        setHasMorePosts(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      }

      fetchingRef.current = false;
      setLoading(false);
    },
    [user.id, loading]
  );

  useEffect(() => {
    const doInitialFetch = async () => {
      await fetchPosts(0);
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

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMorePosts) {
            fetchPosts(posts.length);
          }
        },
        {
          rootMargin: '0px',
          threshold: 1.0,
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, posts.length, hasMorePosts, fetchPosts]
  );

  return (
    <div className="pb-12 flex flex-col items-center gap-[16px]">
      {posts.map((post, index) => {
        const isLastPost = index === posts.length - 1;

        return (
          <div
            key={`recent-post-${post.id}`}
            ref={isLastPost ? lastPostElementRef : null}
            className="post-card"
          >
            <PostCard
              firstName={user?.firstName}
              lastName={user?.lastName}
              username={user?.username}
              body={post.body}
              tags={post.tags}
              likes={post.reactions.likes}
              dislikes={post.reactions.dislikes}
              views={post.views}
              clickable={false}
            />
          </div>
        );
      })}
      {loading && <LoadingSpinner isLoading={loading} />}
      {!hasMorePosts && <ErrorCard errorMessage="No more posts to load." />}
    </div>
  );
};

export default InfiniteScrollPosts;
