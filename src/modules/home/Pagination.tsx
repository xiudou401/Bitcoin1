'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface PaginationProps {
  totalPage: number;
}

const Pagination = ({ totalPage }: PaginationProps) => {
  const currentPage = useSearchParams().get('page') || '1';
  return (
    <div className="flex gap-4 text-sm font-semibold">
      {Array.from({ length: totalPage }).map((_, index) => (
        <Link
          key={index}
          href={`?page=${index + 1}`}
          className={`${
            currentPage === `${index + 1}` ? 'text-white' : 'text-white/50'
          }`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
