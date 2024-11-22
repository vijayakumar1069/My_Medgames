import User_Selected_Course_Component from "@/components/Public web components/(Our_Courses_Components)/User_Selected_Course_Component";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { courses } from "@/utils/constvalues";

export default async function Particular_Course_Page({ params }) {
    // Await the params object to access its properties safely
    const {id} = await params || {}; // Ensure params is awaited



    const user_selected_course=courses.filter(course => course.id==id);


    return (
        <div>
        
            <Svg_Bg />
            <User_Selected_Course_Component course={user_selected_course[0]}/>
        </div>
    );
}
