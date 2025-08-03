import Post from '@/components/Post';
import Link from 'next/link';
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
    <div className="mt-8">
      {mockPosts.map((post: Post) => (

        <Link key={post.id} href={`/posts/${post.id}`}>

          <Post post={post} />
        </Link>
      ))}
      <div className="mt-8">
        <Pagination totalPages={10} />
      </div>
    </div>
  );
};

export default PostList;
