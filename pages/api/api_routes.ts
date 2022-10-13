const ApiRoutes = {
  posts: {
    list: '/posts',
    get: (postId: number) => {
      return '/posts/' + postId;
    },
    create: '/posts',
    update: (postId: number) => {
      return '/posts/' + postId;
    },
    delete: (postId: number) => {
      return '/posts/' + postId;
    }
  }
};

export default ApiRoutes;
