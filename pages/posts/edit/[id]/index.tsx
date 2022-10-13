import editPostView from '@containers/posts/views/edit-posts';

export const getServerSideProps = async ({ params }: any) => {
  const postId = params.id;

  return {
    props: { postId }
  };
};

export default editPostView;
