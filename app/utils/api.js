const BASE_URL = 'https://dummyjson.com';
const POSTS_BASE_URL = `${BASE_URL}/posts`;
const USERS_BASE_URL = `${BASE_URL}/users`;

//sorting not working properly so have to filter it  on the FE

export const getAllPosts = async (queryParams) => {
  try {
    const url = `${POSTS_BASE_URL}?limit=0`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch');
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
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const url = `${USERS_BASE_URL}?limit=0`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw error;
  }
};

export const getSuggestedPosts = async () => {};

export const getRecentPosts = async () => {};

export const getUser = async () => {};

export const getUserPosts = async () => {};
