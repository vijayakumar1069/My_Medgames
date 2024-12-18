import { searchBlogs } from "@/app/actions/(Admin)/blogs_function";
import { getCourses } from "@/app/actions/(Admin)/courseActions";
import Loading from "@/components/Admin components/Loading";
import Blog_Home_Component from "@/components/Public web components/Blog Components/Blog_Home_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { Suspense } from "react";

export default async function Blogs_Home_Page({ searchParams }) {
  // Destructure search parameter
  const { search, tags, page, limit } = await searchParams;

  // Prepare search parameters
  const searchCriteria = {
    search: search || "",
    tags: tags ? (Array.isArray(tags) ? tags : [tags]) : [],
    page: page ? parseInt(page) : 1,
    limit: limit ? parseInt(limit) : 10,
  };

  // Fetch blogs based on search criteria
  const blogsResult = await searchBlogs(searchCriteria);

  // Fetch courses
  const allCourses = await getCourses();

  if (!allCourses || !blogsResult) {
    return <Loading />;
  }

  return (
    <div>
      <Svg_Bg  />
      <Suspense fallback={<div><Loading /></div>}>
        <Blog_Home_Component
          blog={blogsResult.blogs}
          Allcourses={allCourses.courses.slice(0, 3)}
          pagination={blogsResult.pagination}
        />
      </Suspense>
    </div>
  );
}
