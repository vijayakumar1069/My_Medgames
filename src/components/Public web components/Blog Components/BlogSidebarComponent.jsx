// BlogSidebarComponent.jsx
import React from 'react'
import BlogSearchComponent from "./BlogSearchComponent"
import LatestBlogsComponent from "./LatestBlogsComponent"
import BlogCategoriesComponent from "./BlogCategoriesComponent"

const BlogSidebarComponent = ({
  onSearch,
  latestBlogs,
  currentCategory
}) => {
  return (
    <div className="lg:col-span-1 order-2 lg:order-2 space-y-4">
      <BlogSearchComponent onSearch={onSearch} />
      <LatestBlogsComponent latestBlogs={latestBlogs} />
      <BlogCategoriesComponent currentCategory={currentCategory} />
    </div>
  )
}

export default BlogSidebarComponent
