// ClientSideWrapper.jsx
'use client'

import { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';


const ErrorFallback = ({ componentName }) => (
  <div className="p-4 text-center bg-red-50 rounded-lg">
    <p>Failed to load {componentName}. Please refresh the page.</p>
  </div>
);

export default function ClientSideWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logError = (error, componentName) => {
    console.error(`Error in ${componentName}:`, error);
    // Add your error logging service here
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback componentName="page" />}>
      {children}
    </ErrorBoundary>
  );
}
