import React from 'react';
import Large_Title from '../(Home page)/Large_Title';
import { customized_privacy_policy } from '@/utils/constvalues';
import Heading_Content_Component from './Heading_Content_Component';
import List_Content_Component from './List_Content_Component';
import Link_Content_Component from './Link_Content_Component';

const Privacy_Policy = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-8 p-4 py-10 bg-[#fff]">
      <div className="lg:w-7/12 md:w-11/12 w-full flex flex-col space-y-4">
        <Large_Title title="Privacy Policy" text={true} left={false} />

        <div className="space-y-6">
          {customized_privacy_policy.map((section, index) => {
            switch (section.type) {
              case 'heading with content':
                return (
                  <Heading_Content_Component
                    key={index}
                    title={section.title}
                    content={section.content}
                  />
                );

              case 'list with content':
                return (
                  <List_Content_Component
                    key={index}
                    title={section.title}
                    list_tittle={section.list_tittle}
                    list_content={section.list_content}
                    content={section.content}
                  />
                );

              case 'link with content':
                return (
                  <Link_Content_Component
                    key={index}
                    title={section.title}
                    content={section.content}
                  />
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Privacy_Policy;
