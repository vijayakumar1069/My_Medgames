

import { getPaymentDetails } from "@/app/actions/payment_functions";
import Payment_Details_Component from "@/components/Public web components/(Our_Courses_Components)/Payments components/Payment_Details_Component";
import { brand_Info } from "@/utils/constvalues";
import Link from "next/link";
import { Suspense } from "react";

// Error Component
const ErrorDisplay = ({ message }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-red-50 rounded-lg shadow-sm">
    <div className="text-center space-y-4">
      <svg 
        className="w-16 h-16 mx-auto text-red-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
        />
      </svg>
      <h3 className="text-xl font-semibold text-red-800">Receipt Not Found</h3>
      <p className="text-red-600">{message}</p>
      <div className="space-y-2">
        <p className="text-gray-600">Need assistance?</p>
        <Link
          href="/contact-us" 
          className="inline-block px-4 py-2 bg-[#4F9F76] text-white rounded-md hover:bg-[#4F9F76]/90 transition-colors duration-200"
        >
          Contact Support
        </Link>
      </div>
    </div>
  </div>
);

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4F9F76]"></div>
  </div>
);

export default async function View_Receipt_Page({ searchParams }) {
  try {
  

    const { id } =await searchParams || {};
    
    // Fetch receipt data
    const paymentData = await getPaymentDetails(id);

    // Handle error states
    if (paymentData.status !== 200) {
      return (
        <div className="container mx-auto px-4 py-8">
          <ErrorDisplay message={paymentData.error || "Unable to retrieve receipt details"} />
        </div>
      );
    }

    // Successful state
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-[#4F9F76] text-white">
              <h1 className="text-2xl font-semibold">Payment Receipt</h1>
            </div>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Payment_Details_Component paymentData={paymentData.paymentIntent} />
            </Suspense>

           
          </div>

          {/* Support Information */}
          <div className="mt-6 text-center text-gray-600">
            <p className="text-sm">
              Having trouble? Contact our support team at{" "}
              <a 
                href="mailto:support@example.com" 
                className="text-[#4F9F76] hover:underline"
              >
               {brand_Info.social_links[1].link}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
  
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorDisplay message="An unexpected error occurred while loading the receipt" />
      </div>
    );
  }
}
