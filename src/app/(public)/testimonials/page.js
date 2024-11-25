import Svg_Bg from "@/components/Public web components/Svg_Bg";
import Testimonials_Component from "@/components/Public web components/Testimonails components/Testimonails_Component";
import { reviews } from "@/utils/constvalues";

export default function Testmonials_Page() {
    return (
        <div>
            <Svg_Bg/>
            <Testimonials_Component reviews={reviews} />
        </div>
    );
}