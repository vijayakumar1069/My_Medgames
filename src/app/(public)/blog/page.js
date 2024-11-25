import Blog_Home_Component from "@/components/Public web components/Blog Components/Blog_Home_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { blogs } from "@/utils/constvalues";

export default function Blogs_Home_Page() {
    const blog = blogs;
  const latestBlogs = blogs.slice(0, 3);
    return (
        <div>
           <Svg_Bg/>
           <Blog_Home_Component blog={blog} latestBlogs={latestBlogs} />
        </div>
    );
}