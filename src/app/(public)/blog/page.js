import { searchBlogs } from "@/app/actions/(Admin)/blogs_function";
import { getCoursesTitle } from "@/app/actions/(Admin)/courseActions";
import Loading from "@/components/Admin components/Loading";
import Blog_Home_Component from "@/components/Public web components/Blog Components/Blog_Home_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { Suspense } from "react";

export const metadata = {
  title: "Blogs",
  description: "Blogs",
};
export default async function Blogs_Home_Page({ searchParams }) {
  // Destructure search parameter
  const { search, tags, page, limit } = await searchParams;

  // Prepare search parameters
  const searchCriteria = {
    search: search || "",
    tags: tags ? (Array.isArray(tags) ? tags : [tags]) : [],
    page: page ? parseInt(page) : 1,
    limit: limit ? parseInt(limit) : 6,
  };

  // Fetch blogs based on search criteria
  const blogsResult = await searchBlogs(searchCriteria);
  const t = blogsResult.blogs.map((blog) => blog.title);

  // Fetch courses
  const allCourses = await getCoursesTitle();
  const titles = allCourses.coursesTitle.map((course) => course.name);

  if (!allCourses || !blogsResult) {
    return <Loading />;
  }

  return (
    <div>
      <Svg_Bg />
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Blog_Home_Component
          blog={blogsResult.blogs}
          Allcourses={blogsResult.courses}
          pagination={blogsResult.pagination}
          courseTitle={titles}
        />
      </Suspense>
    </div>
  );
}
