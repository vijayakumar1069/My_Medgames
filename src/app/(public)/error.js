"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming ShadCN UI button is imported.

const ErrorBoundary = ({ errormessage }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 p-6">
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="text-red-500 w-12 h-12" />
        <h1 className="text-xl font-bold">Something went wrong!</h1>
        <p className="text-center text-gray-600 max-w-md">{errormessage || "An unexpected error occurred. Please try again later."}</p>
        <Button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Page</span>
        </Button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
