import { getBlogById } from "@/app/actions/(Admin)/blogs_function";
import Loading from "@/components/Admin components/Loading";
import User_Selected_Blog_Component from "@/components/Public web components/Blog Components/User_Selected_Blog_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { blogService } from "@/utils/blogService";
import { notFound } from 'next/navigation';
import { Suspense } from "react";

export default async function User_Selected_Blog({params}) {
    const { id } = await params || {};


    const user_selected_blog = await getBlogById(id);
   

    if (!user_selected_blog) {
        notFound(); // Handles 404 if blog not found
    }



    return (
        <div>
            <Svg_Bg/>
            <Suspense fallback={<Loading/>}>
            <User_Selected_Blog_Component 
                user_selected_blog={user_selected_blog?.blog}
                documentContent={user_selected_blog?.content}
                Allcourses={user_selected_blog?.relatedCourses}
            />
            </Suspense>
        </div>
    );
}
