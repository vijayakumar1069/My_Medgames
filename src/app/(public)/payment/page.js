import { getCourseById } from "@/app/actions/(Admin)/courseActions";
import Payment_Wrapper from "@/components/Public web components/(Our_Courses_Components)/Payments components/Payment_Wrapper";
import { courses } from "@/utils/constvalues";
import { Suspense } from "react";

export default async function Payment_Page({searchParams}) {
     // Await the params object to access its properties safely
     const {id} = await searchParams || {}; // Ensure params is awaited


     const res=await getCourseById(id);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Payment_Wrapper purchaseCourseDetails={res.course}/>
        </Suspense>
    );
}