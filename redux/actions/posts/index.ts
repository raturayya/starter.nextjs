import { ICreatePost, IUpdatePost } from '@models/posts.model';
import {
  CREATE_POST_ACTION,
  CREATE_POST_FAILED_ACTION,
  CREATE_POST_SUCCESSED_ACTION,
  DELETE_POST_ACTION,
  DELETE_POST_FAILED_ACTION,
  DELETE_POST_SUCCESSED_ACTION,
  GET_POSTS_ACTION,
  GET_POSTS_FAILED_ACTION,
  GET_POSTS_SUCCESSED_ACTION,
  GET_POST_ACTION,
  GET_POST_FAILED_ACTION,
  GET_POST_SUCCESSED_ACTION,
  UPDATE_POST_ACTION,
  UPDATE_POST_FAILED_ACTION,
  UPDATE_POST_SUCCESSED_ACTION
} from '@redux/types/posts';
import postsService from '@services/posts.service';

export const getPostsAction = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_POSTS_ACTION });

    await postsService
      .getPosts()
      .then((res: any) => {
        dispatch({
          type: GET_POSTS_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_POSTS_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const getPostDetailAction = (postId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_POST_ACTION });

    await postsService
      .getPostDetail(postId)
      .then((res: any) => {
        dispatch({
          type: GET_POST_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_POST_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const createPostAction = (post: ICreatePost) => {
  return async (dispatch: any) => {
    dispatch({ type: CREATE_POST_ACTION });

    await postsService
      .createPost(post)
      .then((res: any) => {
        dispatch({
          type: CREATE_POST_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_POST_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const updatePostAction = (postId: number, post: IUpdatePost) => {
  return async (dispatch: any) => {
    dispatch({ type: UPDATE_POST_ACTION });

    await postsService
      .updatePost(postId, post)
      .then((res: any) => {
        dispatch({
          type: UPDATE_POST_SUCCESSED_ACTION,
          payload: res
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_POST_FAILED_ACTION,
          payload: err
        });
      });
  };
};

export const deletePostAction = (postId: number) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETE_POST_ACTION });

    await postsService
      .deletePost(postId)
      .then((res: any) => {
        dispatch({
          type: DELETE_POST_SUCCESSED_ACTION,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_POST_FAILED_ACTION,
          payload: err
        });
      });
  };
};
