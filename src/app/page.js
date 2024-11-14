import Blogs from "@/components/Public web components/Blogs";
import Consultation from "@/components/Public web components/Consultation";
import Courses from "@/components/Public web components/Courses";
import FAQs from "@/components/Public web components/FAQs";
import Get_Started from "@/components/Public web components/Get_Started";
import Services from "@/components/Public web components/Services";
import Testimonials from "@/components/Public web components/Testimonials";
import Tutors from "@/components/Public web components/Tutors";
import Videos from "@/components/Public web components/Videos";
import YouTubePlayer from "@/components/Public web components/YouTubePlayer";
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
      <FAQs/>
      <Get_Started/>
    </>
  );
}
