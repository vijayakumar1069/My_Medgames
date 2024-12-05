import React from 'react';
import { 

  IconAward,
  IconBook,
  IconCircleCheck,
  IconTargetArrow, 
 
} from '@tabler/icons-react';
import { Lightbulb } from 'lucide-react';

const Course_OverView_Component = ({ 
  objective, 
  topic_covered, 
  key_features, 
  additional_resources, 
  benefits 
}) => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Objective Section */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <IconTargetArrow className="mr-3 text-blue-600" size={40} />
            Program Objective
          </h2>
          <p className="text-gray-700 text-lg">{objective}</p>
        </div>

        {/* Key Features Section */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <IconCircleCheck  className="mr-3 text-green-600" size={40} />
            Key Features
          </h2>
          <ul className="space-y-3">
            {key_features?.map((feature, index) => (
              // <li key={index} className="flex items-center text-gray-700">
              //   <Lightbulb  className="mr-2 text-green-500" size={24} />
              //   {feature}
              // </li>
               <li key={index} className="flex items-center text-gray-700">
               <div className="" key={index}>

               <Lightbulb className="mr-2 text-green-500 flex-nowrap" size={24} />
               </div>
               <span className='block'>

               {feature}
               </span>
             </li>
            ))}
          </ul>
        </div>

        {/* Topics Covered Section */}
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
            <IconBook className="mr-3 text-purple-600" size={40} />
            Topics Covered
          </h2>
          <ul className="space-y-3">
            {topic_covered?.map((topic, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="">

                <IconCircleCheck className="mr-2 text-purple-500 flex-nowrap" size={24} />
                </div>
                <span className='block'>

                {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
            <IconAward className="mr-3 text-yellow-600" size={40} />
            Additional Resources
          </h2>
          <ul className="space-y-3">
            {additional_resources?.map((resource, index) => (
              // <li key={index} className="flex items-center text-gray-700">
              //   <IconCircleCheck className="mr-2 text-yellow-500" size={24} />
              //   {resource}
              // </li>
               <li key={index} className="flex items-center text-gray-700">
               <div className="">

               <IconCircleCheck className="mr-2 text-yellow-500 flex-nowrap" size={24} />
               </div>
               <span className='block'>

               {resource}
               </span>
             </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
          <IconAward className="mr-3 text-indigo-600" size={40} />
          Program Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {benefits?.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-gray-700 text-center">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course_OverView_Component;


