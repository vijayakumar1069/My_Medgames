import { Suspense } from "react";
import { home_FAQs } from "@/utils/constvalues";
import Skeleton from "@/components/Public web components/Skeleton";
import HeroSection from "@/components/Public web components/(Home page)/HeroSection";
import Testimonials from "@/components/Public web components/(Home page)/Testimonials";
import Consultation from "@/components/Public web components/(Home page)/Consultation";
import FAQs from "@/components/Public web components/(Home page)/FAQs";
import Get_Started from "@/components/Public web components/(Home page)/Get_Started";

// Dynamic Server Components with Lightweight Rendering
const DynamicContent = async () => {
  const [
    CoursesComponent,
    // TutorsComponent,
    // BlogsComponent
  ] = await Promise.all([
    import("@/components/Public web components/(Home page)/Courses"),
    // import("@/components/Public web components/(Home page)/Tutors"),
    // import("@/components/Public web components/(Home page)/Blogs")
  ]);

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <CoursesComponent.default />
      </Suspense>
      {/* <Suspense fallback={<Skeleton />}>
        <TutorsComponent.default />
      </Suspense> */}
      {/* <Suspense fallback={<Skeleton />}>
        <BlogsComponent.default />
      </Suspense> */}
    </>
  );
};

export default async function Home() {
  return (
    <main className="flex flex-col lg:space-y-5 space-y-10">
      <HeroSection />
      
      {/* Dynamically render server components */}
      <DynamicContent />
      
      <Testimonials />
      <Consultation />
      
      <div className="">
        <FAQs items={home_FAQs} />
        <Get_Started />
      </div>
    </main>
  );
}
