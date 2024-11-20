import Payment_Wrapper from "@/components/Public web components/(Our_Courses_Components)/Payments components/Payment_Wrapper";
import { courses } from "@/utils/constvalues";

export default async function Payment_Page({searchParams}) {
     // Await the params object to access its properties safely
     const {courseName} = await searchParams || {}; // Ensure params is awaited


     const user_selected_course=courses.filter(course => course.name===courseName);

    return (
        <div>
            <Payment_Wrapper purchaseCourseDetails={user_selected_course[0]}/>
        </div>
    );
}