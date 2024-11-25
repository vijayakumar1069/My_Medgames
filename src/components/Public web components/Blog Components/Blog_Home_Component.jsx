"use client";

import React, { useState } from "react";
import BlogCard_For_Blog_Page from "./BlogCard_For_Blog_Page";
import BlogSearchComponent from "./BlogSearchComponent";
import LatestBlogsComponent from "./LatestBlogsComponent";
import BlogCategoriesComponent from "./BlogCategoriesComponent";

const Blog_Home_Component = ({ blog, latestBlogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blog);

  const handleSearch = (searchTerm) => {
    const filtered = blog.filter(
      (item) => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-3 py-10 bg-[#fff]">
      <div className="md:w-11/12 w-full grid grid-cols-2 md:grid-cols-4 justify-center gap-3">
        <div className="md:col-span-2 lg:col-span-3 col-span-2 flex h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {filteredBlogs.map((item, index) => (
              <BlogCard_For_Blog_Page
                key={`${item.id}-${index}`}
                blog_data={item}
              />
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 lg:col-span-1 col-span-2 flex flex-col w-full h-fit space-y-4">
          <BlogSearchComponent onSearch={handleSearch} />
          <LatestBlogsComponent latestBlogs={latestBlogs} />
          <BlogCategoriesComponent />
        </div>
      </div>
    </div>
  );
};

export default Blog_Home_Component;
