import Blog_Home_Component from "@/components/Public web components/Blog Components/Blog_Home_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { blogService } from "@/utils/blogService";
import { Suspense } from "react";

export default function Blogs_Home_Page() {
    const blog = blogService.getAllBlogs();
    const latestBlogs = blogService.getLatestBlogs();

    return (
        <div>
           <Svg_Bg/>
           <Suspense fallback={<div>Loading...</div>}>
           <Blog_Home_Component blog={blog} latestBlogs={latestBlogs} />
           </Suspense>
        </div>
    );
}
