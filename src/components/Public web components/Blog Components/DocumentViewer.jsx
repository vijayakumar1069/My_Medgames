"use client"
import DOMPurify from 'dompurify';
import { useEffect } from 'react';

export function DocumentViewer({ documentContent }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      return;
    }
  },[])
  // Sanitize HTML to prevent XSS
  const sanitizedHtml = DOMPurify.sanitize(documentContent.html, {
    ADD_TAGS: ['mark'],
    ADD_ATTR: ['target']
  });

  return (
    <div className="document-container">
      <div 
        className="prose max-w-full font-Manrope"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
}