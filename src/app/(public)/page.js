
import { Suspense } from "react";
import { home_FAQs } from "@/utils/constvalues";
import Skeleton from "@/components/Public web components/Skeleton";
import HeroSection from "@/components/Public web components/(Home page)/HeroSection";
import Testimonials from "@/components/Public web components/(Home page)/Testimonials";
import Consultation from "@/components/Public web components/(Home page)/Consultation";
import FAQs from "@/components/Public web components/(Home page)/FAQs";
import Get_Started from "@/components/Public web components/(Home page)/Get_Started";
import Courses from "@/components/Public web components/(Home page)/Courses";
import Tutors from "@/components/Public web components/(Home page)/Tutors";
import BlogsWithErrorBoundary from "@/components/Public web components/(Home page)/Blogs";



export default function Home() {
  return (
    <main className="flex flex-col lg:space-y-5 space-y-10">
     
      <HeroSection />

    
      <Suspense fallback={<Skeleton />}>
        <Courses />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Tutors />
      </Suspense>
      <Testimonials />
      <Suspense fallback={<Skeleton />}>
        <BlogsWithErrorBoundary />
      </Suspense>
      <Consultation />
      <div className="">
        <FAQs items={home_FAQs} />
        <Get_Started />
      </div>
    </main>
  );
}
