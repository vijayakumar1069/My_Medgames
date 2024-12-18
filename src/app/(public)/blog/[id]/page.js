// User_Selected_Blog.jsx
import { getBlogById } from "@/app/actions/(Admin)/blogs_function";
import User_Selected_Blog_Component from "@/components/Public web components/Blog Components/User_Selected_Blog_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { notFound } from 'next/navigation';
import { Suspense } from "react";

// Create a separate loading component for blog content
const BlogLoadingFallback = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
    <div className="h-96 bg-gray-200 rounded mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
);

// Make this a server component
export default async function User_Selected_Blog({params}) {
    const{id}= await params || {};
    // if (!id) {
    //     notFound();
    // }

    try {
        const blogData = await getBlogById(id);
       
        if (!blogData?.success || !blogData?.blog) {
            notFound();
        }

        return (
            <>
                <Svg_Bg />
                <Suspense fallback={<BlogLoadingFallback />}>
                    <User_Selected_Blog_Component
                        user_selected_blog={blogData.blog}
                        documentContent={blogData.content}
                        Allcourses={blogData.relatedCourses}
                    />
                </Suspense>
            </>
        );
    } catch (error) {
        console.error("Blog loading error:", error);
        notFound();
    }
}
