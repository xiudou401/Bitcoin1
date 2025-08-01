import Image from 'next/image';
import React from 'react';
import CommentBtn from './CommentBtn';

const Content = () => {
  return (
    <>
      <Image
        src="/images/bitcoin-banner.jpeg"
        className="w-full rounded-lg border border-white/10"
        width={1584}
        height={396}
        alt="bitcoin-banner"
      />
      <CommentBtn />
    </>
  );
};

export default Content;
