import axios from '@api/api';
import ApiRoutes from '@api/api_routes';
import { ICreatePost, IUpdatePost } from '@models/posts.model';

export default {
  getPosts: async () => {
    try {
      const url = ApiRoutes.posts.list;
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getPostDetail: async (postId: number) => {
    try {
      const url = ApiRoutes.posts.get(postId);
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  createPost: async (post: ICreatePost) => {
    try {
      const url = ApiRoutes.posts.create;
      const response = await axios.post(url, post);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  updatePost: async (postId: number, post: IUpdatePost) => {
    try {
      const url = ApiRoutes.posts.update(postId);
      const response = await axios.put(url, post);

      return response.data;
    } catch (err) {
      throw err;
    }
  },

  deletePost: async (postId: number) => {
    try {
      const url = ApiRoutes.posts.delete(postId);
      const response = await axios.delete(url);

      return response.data;
    } catch (err) {
      throw err;
    }
  }
};
