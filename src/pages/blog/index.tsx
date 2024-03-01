// pages/blog/index.tsx
import React from 'react';
import { articles } from '../../data/articles';
import Sidebar from '../../components/Sidebar';

const BlogIndexPage: React.FC = () => {
  return (
    <>
      <h1 className='text-center mt-3'>Blog</h1>  
      <div className='container'>
        <Sidebar articles={articles.slice(1)} />
        </div>
    </>
  );
};

export default BlogIndexPage;
