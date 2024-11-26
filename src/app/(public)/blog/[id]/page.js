import User_Selected_Blog_Component from "@/components/Public web components/Blog Components/User_Selected_Blog_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { blogService } from "@/utils/blogService";
import { notFound } from 'next/navigation';

export default async function User_Selected_Blog({params}) {
    const { id } = await params || {};

    const user_selected_blog = blogService.getBlogById(id);

    if (!user_selected_blog) {
        notFound(); // Handles 404 if blog not found
    }

    const latestBlogs = blogService.getLatestBlogs();

    return (
        <div>
            <Svg_Bg/>
            <User_Selected_Blog_Component 
                user_selected_blog={user_selected_blog}
                latestBlogs={latestBlogs}
            />
        </div>
    );
}
