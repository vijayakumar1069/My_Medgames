import React from 'react';

const Link_Content_Component = ({ title, content }) => {
  return (
    <div className="w-full flex flex-col space-y-3">
      <h1 className="text-2xl font-bold">{title}</h1>

      {/* Render content */}
      {content.map((item, index) => {
        // Check if the item contains the link object
        if (typeof item === 'object' && item.link && item.url) {
          return (
            <span key={index} className="text-base">
              {/* Wrap the link in a span to keep it inline with the rest of the content */}
              {item.content}
              <a
                href={item.url}
                className="text-blue-500 hover:underline inline" // `inline` ensures it stays on the same line
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link}
              </a>
            </span>
          );
        }
        return <span key={index} className="text-base">{item}</span>;
      })}
    </div>
  );
};

export default Link_Content_Component;
