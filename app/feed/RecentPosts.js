'use client';

//FIX!!

import { useEffect, useState, useRef } from 'react';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const InfiniteScrollPosts = ({ users }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const [initialFetchDone, setInitialFetchDone] = useState(false); // New state

  const POSTS_TO_FETCH = 5;
  const LOADING_DELAY = 3000;

  const fetchPosts = async (skipCount) => {
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

    const res = await fetch(
      `https://dummyjson.com/posts?limit=${POSTS_TO_FETCH}&skip=${skipCount}`
    );
    const data = await res.json();

    setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    setLoading(false);
  };

   useEffect(() => {
     if (!initialFetchDone && !loading) {
        
       fetchPosts(0); 
       setInitialFetchDone(true);  
     }
   }, [initialFetchDone]);  

  const lastPostElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPosts(posts.length); 
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (node) observer.current.observe(node);
  };

  return (
    <div className="pb-12">
      {posts.map((post, index) => {
        const postUser = users.find((user) => user.id === post.userId);
        const isLastPost = index === posts.length - 1; // Check if it's the last post

        return (
          <div
            key={`recent-post-${post.id}`} // Unique key for each post
            ref={isLastPost ? lastPostElementRef : null} // Apply the ref only to the last post
            className="post-card"
          >
            <PostCard
              firstName={postUser?.firstName} // Optional chaining in case user is not found
              lastName={postUser?.lastName}
              username={postUser?.username}
              body={post.body}
              tags={post.tags}
              likes={post.reactions.likes}
              dislikes={post.reactions.dislikes}
              views={post.views}
            />
            <h1>{post.id}</h1>
          </div>
        );
      })}
      <LoadingSpinner isLoading={loading} />
    </div>
  );
};

export default InfiniteScrollPosts;
