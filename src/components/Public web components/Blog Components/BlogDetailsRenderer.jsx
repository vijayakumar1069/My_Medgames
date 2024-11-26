"use client";
import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Link2,
  Target,
  Quote,
  TrendingUp,
  MessageCircle,
  Book,
  CheckCircle,
  Clock,
  PlayCircle,
  Headphones,
  Monitor,
} from "lucide-react";
import Image from "next/image";

const BlogDetailsRenderer = ({ blogDetails }) => {
  const renderSection = (section) => {
    switch (section.type) {
      case "standard_section":
        return (
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              {section.icons?.map((icon, index) => (
                <span key={index} className="mr-2">
                  {icon}
                </span>
              ))}
              {section.heading}
            </h2>
            <p>{section.content}</p>
          </div>
        );

      case "highlight_section":
        return (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h3 className="font-bold text-lg mb-2">{section.heading}</h3>

            {section.highlightedText && (
              <div className="text-yellow-700 font-semibold mb-3">
                <Link2 className="inline-block mr-2 text-yellow-600" />
                {section.highlightedText}
              </div>
            )}

            {section.importantLinks?.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                className="text-blue-600 hover:underline block"
              >
                {link.icon} {link.text}
              </Link>
            ))}
          </div>
        );

      case "numbered_list":
        return (
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <Target className="mr-2 text-green-600" />
              {section.heading}
            </h3>
            <ol className="list-decimal pl-5">
              {section.listItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );

      case "quote_section":
        return (
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic">
            <p className="flex items-center">
              <Quote className="mr-2 text-blue-600" />
              {section.quote}
            </p>
            <footer className="text-right text-gray-600">
              - {section.author}
            </footer>
          </blockquote>
        );

      case "statistic_section":
        return (
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <TrendingUp className="mr-2 text-purple-600" />
              {section.heading}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {section.statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "testimonial_section":
        return (
          <div className="bg-indigo-50 p-4 rounded-lg mb-4">
            {section.testimonials.map((testimonial, index) => (
              <div key={index} className="italic">
                <MessageCircle className="inline-block mr-2 text-indigo-600" />
                {testimonial.text}
                <div className="text-right text-gray-600 mt-2">
                  - {testimonial.author}, {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        );

      case "resource_section":
        return (
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <Book className="mr-2 text-teal-600" />
              {section.heading}
            </h3>
            {section.resources.map((resource, index) => (
              <div key={index} className="mb-2">
                <Link
                  href={resource.link}
                  className="text-teal-600 hover:underline font-semibold"
                >
                  {resource.title}
                </Link>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        );

      case "interactive_section":
        return (
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <CheckCircle className="mr-2 text-red-600" />
              {section.heading}
            </h3>
            <p>{section.description}</p>
            <Link
              href={section.quizLink}
              className="mt-2 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Start Quiz
            </Link>
          </div>
        );

      case "timeline_section":
        return (
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Clock className="mr-2 text-blue-600" />
              {section.heading}
            </h3>
            <div className="space-y-4">
              {section.timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 text-2xl">{event.icon}</div>
                  <div>
                    <h4 className="font-semibold">
                      {event.date} - {event.title}
                    </h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "comparison_section":
        return (
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Target className="mr-2 text-green-600" />
              {section.heading}
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border p-2">Category</th>
                  <th className="border p-2">Traditional Approach</th>
                  <th className="border p-2">Our Approach</th>
                </tr>
              </thead>
              <tbody>
                {section.comparisons.map((comparison, index) => (
                  <tr key={index}>
                    <td className="border p-2 font-semibold">
                      {comparison.category}
                    </td>
                    <td className="border p-2 text-red-600">
                      {comparison.traditional}
                    </td>
                    <td className="border p-2 text-green-600">
                      {comparison.ourApproach}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      // case "multimedia_section":
      //   return (
      //     <div className="bg-purple-50 p-4 rounded-lg mb-4">
      //       <h3 className="font-bold text-lg mb-4 flex items-center">
      //         <Monitor className="mr-2 text-purple-600" />
      //         {section.heading}
      //       </h3>
      //       <div className="grid md:grid-cols-3 gap-4">
      //         {section.mediaItems.map((media, index) => {
      //           const iconMap = {
      //             video: <PlayCircle className="text-red-500" />,
      //             podcast: <Headphones className="text-green-500" />,
      //             webinar: <Monitor className="text-blue-500" />,
      //           };

      //           return (
      //             <div
      //               key={index}
      //               className="bg-white rounded-lg shadow-md overflow-hidden"
      //             >
      //               <div className="relative h-48 w-full">
      //                 <Image
      //                   src={media.thumbnail}
      //                   alt={media.title}
      //                   fill
      //                   className="object-cover"
      //                 />
      //               </div>
      //               <div className="p-4">
      //                 <div className="flex items-center mb-2">
      //                   {iconMap[media.type]}
      //                   <span className="ml-2 font-semibold">
      //                     {media.type.toUpperCase()}
      //                   </span>
      //                 </div>
      //                 <h4 className="font-bold mb-2">{media.title}</h4>
      //                 <div className="flex justify-between items-center">
      //                   <span className="text-sm text-gray-500">
      //                     {media.duration}
      //                   </span>
      //                   <Link
      //                     href={media.url}
      //                     target="_blank"
      //                     className="text-purple-600 hover:underline"
      //                   >
      //                     Watch Now
      //                   </Link>
      //                 </div>
      //               </div>
      //             </div>
      //           );
      //         })}
      //       </div>
      //     </div>
      //   );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {blogDetails.map((section, index) => (
        <React.Fragment key={index}>{renderSection(section)}</React.Fragment>
      ))}
    </div>
  );
};

export default BlogDetailsRenderer;
