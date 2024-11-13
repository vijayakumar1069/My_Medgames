import Blogs from "@/components/Public web components/Blogs";
import Consultation from "@/components/Public web components/Consultation";
import Courses from "@/components/Public web components/Courses";
import FAQs from "@/components/Public web components/FAQs";
import Services from "@/components/Public web components/Services";
import Testimonials from "@/components/Public web components/Testimonials";
import Tutors from "@/components/Public web components/Tutors";

export default function Home() {
  return (
    <>
      <Services/>
      <Tutors/>
      <Testimonials/>
      <Courses/>
      <Blogs/>
      <Consultation/>
      <FAQs/>
    </>
  );
}
