// components/Public web components/(Home page)/Blogs.jsx
import React, { Suspense } from "react";
import Small_Title from "./Small_Title";
import Large_Title from "./Large_Title";
import Blog_Card from "./Blog_Card";
import { getBlogsForHome } from "@/app/actions/(Admin)/blogs_function";
import Loading from "@/components/Admin components/Loading";
import ErrorBoundary from "@/app/(public)/error";

// Error Component


// Blog Grid Component
const BlogGrid = ({ blogs }) => (
  <div className="lg:w-9/12 md:w-11/12 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 p-5 md:p-0">
    {blogs?.map((item) => (
      <Blog_Card key={item._id} blog={item} />
    ))}
  </div>
);

const Blogs = async () => {
  try {
    const res = await getBlogsForHome();

    if (!res || res.success === false) {
      throw new Error(res?.message || 'Failed to load blogs');
    }

    return (
      <section className="w-full h-full bg-[#F4F6FC] flex justify-center items-center flex-col space-y-8 py-10">
        <Small_Title title="Blogs & News" />
        <Large_Title title="Welcome to Our Blogs" />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-[#4A4A4A] text-center px-3">
            Explore our latest articles, insights, and tips. Whether youre looking
            for health advice, tech innovations, or lifestyle tips, we have
            something for everyone. Dive into our diverse range of topics and
            enrich your knowledge!
          </p>
        </div>

        <Suspense fallback={<Loading />}>
          <BlogGrid blogs={res.blogs} />
        </Suspense>
      </section>
    );
  } catch (error) {
    return <ErrorBoundary errormessage={error.message} />;
  }
};

export default Blogs;
