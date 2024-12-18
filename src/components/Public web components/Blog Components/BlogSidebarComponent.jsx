// BlogSidebarComponent.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import BlogSearchComponent from './BlogSearchComponent';

// Dynamically import components that might not be immediately needed
const LatestBlogsComponent = dynamic(() => import('./LatestBlogsComponent'), {
  ssr: true,
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />
});

const BlogSidebarComponent = ({ Allcourses, showSearchComponent = false,onSearch }) => {
  return (
    <aside className="lg:col-span-1 order-2 lg:order-2 space-y-4">
      {showSearchComponent && <BlogSearchComponent onSearch={onSearch} />}
      <LatestBlogsComponent Allcourses={Allcourses} />
    </aside>
  );
};

export default BlogSidebarComponent;
