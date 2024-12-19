import dynamic from "next/dynamic";
import { Suspense } from "react";
import { home_FAQs } from "@/utils/constvalues";
import Skeleton from "@/components/Public web components/Skeleton";
import HeroSection from "@/components/Public web components/(Home page)/HeroSection";
import BlogsWithErrorBoundary from "@/components/Public web components/(Home page)/Blogs";
import Courses from "@/components/Public web components/(Home page)/Courses";
import Tutors from "@/components/Public web components/(Home page)/Tutors";

// Dynamic imports with enhanced loading
// const Videos = dynamic(
//   () => import("@/components/Public web components/(Home page)/Videos"),
//   {
//     loading: () => <Skeleton />,
//     ssr: true,
//   }
// );

// const Services = dynamic(
//   () => import("@/components/Public web components/(Home page)/Services"),
//   {
//     loading: () => <Skeleton />,
//     ssr: true,
//   }
// );



const Testimonials = dynamic(
  () => import("@/components/Public web components/(Home page)/Testimonials"),
  {
    loading: () => <Skeleton />,
    ssr: true,
  }
);



const Consultation = dynamic(
  () => import("@/components/Public web components/(Home page)/Consultation"),
  {
    loading: () => <Skeleton />,
    ssr: true,
  }
);

const FAQs = dynamic(
  () => import("@/components/Public web components/(Home page)/FAQs"),
  {
    loading: () => <Skeleton />,
    ssr: true,
  }
);

const Get_Started = dynamic(
  () => import("@/components/Public web components/(Home page)/Get_Started"),
  {
    loading: () => <Skeleton />,
    ssr: true,
  }
);

// Add skeleton components for other sections

export default function Home() {
  return (
    <main className="flex flex-col lg:space-y-5 space-y-10">
      {/* <Suspense fallback={<Skeleton />}>
        <Videos />
      </Suspense> */}
      <HeroSection />

      {/* <Services /> */}
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
