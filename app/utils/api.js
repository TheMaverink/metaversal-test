import {
  UserNotFoundError,
  UsersLoadingError,
  PostsLoadingError,
  GenericError,
} from './errors';

const BASE_URL = 'https://dummyjson.com';
const POSTS_BASE_URL = `${BASE_URL}/posts`;
const USERS_BASE_URL = `${BASE_URL}/users`;

const POSTS_TTL = 60;
const USERS_TTL = 3600;
const USER_TTL = 3600;
const USER_POSTS = 3600;


export const getAllPosts = async () => {
  try {
    const url = `${POSTS_BASE_URL}?limit=0`;

    const response = await fetch(url, {
      next: { revalidate: POSTS_TTL },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new PostsLoadingError();
    }

    const responseJson = await response.json();

    const sortedPostsByLikes = responseJson.posts.sort((a, b) => {
      return b.reactions.likes - a.reactions.likes;
    });

    const userPostCounts = sortedPostsByLikes.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    const usersIdsWithMostPosts = Object.entries(userPostCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .map(([userId]) => userId)
      .slice(0, 4);

    return {
      posts: responseJson.posts,
      suggestedPosts: sortedPostsByLikes.slice(0, 2),
      usersIdsWithMostPosts,
    };
  } catch (error) {
    throw new PostsLoadingError();
  }
};

export const getAllUsers = async () => {
  try {
    const url = `${USERS_BASE_URL}?limit=0`;

    const response = await fetch(url, {
      next: { revalidate: USERS_TTL },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new UsersLoadingError();
    }

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new UsersLoadingError();
  }
};

export const getUser = async (userId, withPosts = true) => {
  try {
    const url = `${USERS_BASE_URL}/${userId}`;

    const response = await fetch(url, {
      next: { revalidate: USER_TTL },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new UserNotFoundError();
    }

    let responseJson = await response.json();

    if (withPosts) {
      const userPostsResponse = await fetch(`${url}/posts`);

      if (!userPostsResponse.ok) {
        throw new PostsLoadingError();
      }

      const userPostsResponseJson = await userPostsResponse.json();

      responseJson.posts = userPostsResponseJson.posts;
    }

    return responseJson;
  } catch (error) {
    throw new GenericError(error.message);
  }
};

export const getUserPosts = async (userId, numberPostsToFetch, skipCount) => {
  try {
    const url = `${USERS_BASE_URL}/${userId}/posts?limit=${numberPostsToFetch}&skip=${skipCount}`;

    const response = await fetch(url, {
      next: { revalidate: USER_POSTS },
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new PostsLoadingError();
    }

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new GenericError(error.message);
  }
};
