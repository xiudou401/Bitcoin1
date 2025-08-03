import Post from '@/components/Post';
import React from 'react';
import Pagination from './Pagination';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    createdAt: 0,
  },
];

const PostList = () => {
  return (
    <div>
      {mockPosts.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination totalPage={10} />
    </div>
  );
};

export default PostList;
