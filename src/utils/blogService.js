// utils/blogService.js
import { blogs } from "@/utils/constvalues";

export const blogService = {
  getAllBlogs: () => blogs,
  
  getBlogById: (id) => {
    return blogs.find(blog => blog.id == id);
  },
  
  getLatestBlogs: (count = 3) => {
    return blogs.slice(0, count);
  },

  // New method for searching blogs
  searchBlogs: (searchTerm) => {
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
  getBlogCategories: () => {
    // Create a map to store categories and their counts
    const categoryMap = blogs.reduce((acc, blog) => {
      const category = blog.category;
      // Convert category name to slug
      const slug = category.toLowerCase().replace(/\s+/g, '-');
      
      if (!acc[category]) {
        acc[category] = {
          name: category,
          slug: slug,
          count: 1
        };
      } else {
        acc[category].count += 1;
      }
      return acc;
    }, {});

    // Convert map to array and sort by count (descending)
    return Object.values(categoryMap).sort((a, b) => b.count - a.count);
  },

  // Add method to get blogs by category
  getBlogsByCategory: (categorySlug) => {
    return blogs.filter(blog => 
      blog.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
    );
  }
};
