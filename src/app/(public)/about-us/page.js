import About_us from "@/components/Public web components/About Us Components/About_us";
import Why_Us from "@/components/Public web components/About Us Components/Why_Us";
import Image_Bg from "@/components/Public web components/Image_Bg";

export default function About_Us_Page() {
    return (
        <div>
           <Image_Bg bg_Image="/about_us_bg.png"/>
           <About_us/>
           <Why_Us/>
           
        </div>
    );
}