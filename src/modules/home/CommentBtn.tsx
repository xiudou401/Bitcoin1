'use client';
import React, { useState } from 'react';
import CommentEditor from './CommentEditor';

const CommentBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="w-full h-[32px] flex justify-center items-center rounded-lg bg-white rounded-ld p-4 text-sm text-black font-bold cursor-pointer"
      >
        What's on your mind?
      </button>
      <CommentEditor isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default CommentBtn;
