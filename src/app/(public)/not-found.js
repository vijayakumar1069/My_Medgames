"use client";

import { Button } from "@/components/ui/button"; // Ensure Shadcn UI Button is installed
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md">
        <div className="flex justify-center mb-4">
          <div className="relative inline-block">
            {/* <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full bg-blue-500 opacity-20 animate-ping"></div> */}
            <div className="w-16 h-16 p-10 bg-[#4F9F76] rounded-full flex items-center justify-center text-white text-4xl font-bold">
              404
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Button
          onClick={handleGoBack}
          className="bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-[#274E49] transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
