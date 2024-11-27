import Schedule_Call_Form from "@/components/Public web components/Schedule A Call Components/Schedule_Call_Form";
import Svg_Bg from "@/components/Public web components/Svg_Bg";
import { Suspense } from "react";

export default function Schedule_A_Call_Page() {
    return (
        <div>
            <Svg_Bg/> 
            <Suspense fallback={<div>Loading...</div>}>
            <Schedule_Call_Form/>
            </Suspense>
        </div>
    );
}