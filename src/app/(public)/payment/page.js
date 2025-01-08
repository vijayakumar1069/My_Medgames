import { getCourseById } from "@/app/actions/(Admin)/courseActions";
import Payment_Wrapper from "@/components/Public web components/(Our_Courses_Components)/Payments components/Payment_Wrapper";
import { Suspense } from "react";

export const metadata = {
  title: "Payment",
  description: "Payment",
};
export default async function Payment_Page({ searchParams }) {
  // Await the params object to access its properties safely
  const { id } = (await searchParams) || {}; // Ensure params is awaited
  // Input validation
  if (!id) {
    throw new Error("Invalid course ID");
  }

  // Sanitize and validate the ID
  const sanitizedId = encodeURIComponent(id);

  try {
    const res = await getCourseById(sanitizedId);

    // Validate course data
    if (!res?.course || !res.course.price || res.course.price <= 0) {
      throw new Error("Invalid course data");
    }

    return (
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4F9F76]"></div>
          </div>
        }
      >
        <Payment_Wrapper purchaseCourseDetails={res.course} />
      </Suspense>
    );
  } catch (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Unable to load payment page. Please try again later.
      </div>
    );
  }
}
