import { GET_POSTS_BY_CATEGORY, DELETE_POST, UPVOTE_TO_POST, DOWNVOTE_TO_POST } from '../constants';

export const getPostsByCategory = category => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
});

export const deletePost = id => ({
  type: DELETE_POST,
  id,
});

export const upVoteToPost = id => ({
  type: UPVOTE_TO_POST,
  id,
});

export const downVoteToPost = id => ({
  type: DOWNVOTE_TO_POST,
  id,
});
