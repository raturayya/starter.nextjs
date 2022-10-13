import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ReactDOM } from 'react';
import ReactPaginate from 'react-paginate';

import { getPostsAction } from '@redux/actions/posts';
import { IPost } from '@models/posts.model';

const postsView = () => {
  const postsState = useSelector((state: any) => state.posts);

  const router = useRouter();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const renderContent = (posts: IPost[]) => {
    if (postsState.isLoading) return <p>Loading ...</p>;

    return (
      <div>
        <div className="space-y-4">
          {posts.map((post: IPost, i: number) => (
            <React.Fragment key={i}>
              <Link href={'/posts/edit/' + post.id} passHref>
                <div className="border border-solid border-gray-100 rounded-lg shadow-base p-[20px] cursor-pointer hover:bg-gray-50 leading-[24px]">
                  <p className="font-semibold capitalize">{post.title}</p>
                  <p className="text-[12px] text-gray-400">{post.body}</p>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-[20px]">
      <div className="mb-[40px]">
        <div className="text-[28px] font-bold">Posts</div>
        <Link href="/posts/add">
          <a className="text-blue-400">Add New Post</a>
        </Link>
      </div>

      {renderContent(postsState.posts)}
    </div>
  );
};

export default postsView;
