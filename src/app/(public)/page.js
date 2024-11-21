import Blogs from "@/components/Public web components/(Home page)/Blogs";
import Consultation from "@/components/Public web components/(Home page)/Consultation";
import Courses from "@/components/Public web components/(Home page)/Courses";
import FAQs from "@/components/Public web components/(Home page)/FAQs";
import Footer from "@/components/Public web components/(Home page)/Footer";
import Get_Started from "@/components/Public web components/(Home page)/Get_Started";
import Services from "@/components/Public web components/(Home page)/Services";
import Testimonials from "@/components/Public web components/(Home page)/Testimonials";
import Tutors from "@/components/Public web components/(Home page)/Tutors";
import Videos from "@/components/Public web components/(Home page)/Videos";
import YouTubePlayer from "@/components/Public web components/(Home page)/YouTubePlayer";
import { home_FAQs } from "@/utils/constvalues";
import { Suspense } from "react";


export default function Home() {
  
  return (
    <>
    {/* <Suspense fallback={<div>Loading...</div>}>
    <Videos/>
    <YouTubePlayer/>
    </Suspense> */}
    {/* <Videos/> */}
      <Services/>
      <Tutors/>
      <Testimonials/>
      <Courses/>
      <Blogs/>
      <Consultation/>
      <FAQs  items={home_FAQs}/>
      <Get_Started/>
      <Footer/>
    </>
  );
}
