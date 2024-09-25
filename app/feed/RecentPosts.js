'use client';

import { useEffect, useState, useRef } from 'react';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner'

const InfiniteScrollPosts = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const POSTS_TO_FETCH = 5;
  const LOADING_DELAY = 3000;

  const fetchPosts = async (pageNumber) => {
    setLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

    const res = await fetch(
      `https://dummyjson.com/posts?limit=${POSTS_TO_FETCH}&skip=${(pageNumber - 1) * POSTS_TO_FETCH}`
    );
    const data = await res.json();
    
    // Append new posts to the existing ones
    setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const lastPostElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        rootMargin: '20px',
        threshold: 1.0,
      }
    );

    if (node) observer.current.observe(node);
  };

  return (
    <div className="pb-12">
      {posts.map((post, index) => {
        const postUser = users.find((user) => user.id === post.userId);

        if (posts.length === index + 1) {
          return (
            <div key={post.id} ref={lastPostElementRef} className="post-card">
              <PostCard
                firstName={postUser.firstName}
                lastName={postUser.lastName}
                username={postUser.username}
                body={post.body}
                tags={post.tags}
                likes={post.reactions.likes}
                dislikes={post.reactions.dislikes}
                views={post.views}
              />
            </div>
          );
        } else {
          return (
            <div key={post.id} className="post-card">
              <PostCard
                firstName={postUser.firstName}
                lastName={postUser.lastName}
                username={postUser.username}
                body={post.body}
                tags={post.tags}
                likes={post.reactions.likes}
                dislikes={post.reactions.dislikes}
                views={post.views}
              />
            </div>
          );
        }
      })}
    <LoadingSpinner isLoading={loading}/>
    </div>
  );
};

export default InfiniteScrollPosts;
