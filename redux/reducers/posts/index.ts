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

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null
};

const posts = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case GET_POSTS_SUCCESSED_ACTION:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case GET_POSTS_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case GET_POST_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case GET_POST_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case GET_POST_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case CREATE_POST_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case CREATE_POST_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case CREATE_POST_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case UPDATE_POST_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case UPDATE_POST_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case UPDATE_POST_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    case DELETE_POST_ACTION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null
      };
    case DELETE_POST_SUCCESSED_ACTION:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    case DELETE_POST_FAILED_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload
      };

    default:
      return { ...state };
  }
};

export default posts;
