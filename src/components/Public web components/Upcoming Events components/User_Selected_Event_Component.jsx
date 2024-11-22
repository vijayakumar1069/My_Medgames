import React from "react";
import {
  IconBook,
  IconChalkboard,
  IconClockHour2,
  IconMapPin,
  IconPremiumRights,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import CourseDetailItem from "../(Our_Courses_Components)/CourseDetailItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const User_Selected_Event_Component = ({ selected_Event }) => {
  const details = [
    { icon: IconPremiumRights, label: "Price", value: selected_Event.price },

    {
      icon: IconClockHour2,
      label: "Time",
      value: `${selected_Event.time} `,
    },

    { icon: IconMapPin, label: "Location", value: selected_Event.via },
    { icon: IconWorld, label: "Language", value: selected_Event.language },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-10  py-10">
      <div className="lg:w-10/12 md:w-11/12 flex flex-col justify-center items-center space-y-10 p-5">
      <div className="relative w-full h-[400px] p-10">
        <Image
          src={"/event_details_img.png"}
          fill
          priority={true}
          sizes="(min-width: 768px) 50vw, 100vw"
          style={{ objectFit:"cover" }}
       
          alt={selected_Event.title}
        />
      </div>
        {/* Main Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 ">
          {/* Left Column: Tabs for Overview and Reviews */}
          <div className="lg:col-span-2 w-full flex flex-col space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              perferendis maiores tempore quasi impedit culpa debitis iste
              praesentium sequi ratione quisquam doloribus sint ullam
              repellendus illum aliquam dolor officia beatae, mollitia,
              distinctio quas. Iste mollitia totam ab hic animi facilis
              suscipit, enim natus impedit sequi aliquid reprehenderit optio
              ipsa similique saepe eos? Facere laborum quo reiciendis ipsam,
              pariatur voluptates veritatis nulla voluptas consectetur porro
              sequi tenetur soluta culpa aperiam nemo sed modi ducimus eligendi
              dolorum a. Eos, beatae libero? Beatae alias est earum tempore id
              harum, exercitationem maiores consequatur fugit at molestiae et
              molestias voluptatibus officia mollitia impedit soluta eligendi
              doloremque a quam dignissimos libero repellendus. Explicabo, rerum
              accusamus placeat fugit accusantium deleniti eveniet quis vel
              magni alias dolorum corrupti labore voluptas possimus
              exercitationem quas quo illo quae a molestiae! Nemo officia qui
              debitis eaque nostrum, quam tempore? Accusamus commodi
              necessitatibus corrupti? Modi nihil, pariatur molestias provident
              illo possimus animi sint, distinctio voluptatum aliquam laudantium
              corporis porro fugiat? Nulla quo tempora at commodi ipsa aliquam
              perferendis alias, vero recusandae quae totam consectetur deleniti
              quaerat eum harum aspernatur nihil necessitatibus explicabo
              provident nam accusantium autem cum quis consequatur? Officia
              omnis mollitia neque quis? Culpa nihil, fugiat eaque quasi
              reiciendis beatae cumque?
            </p>
          </div>

          {/* Right Column: Course Details and Enroll Button */}
          <div className="lg:col-span-1 w-full h-fit max-w-sm bg-white shadow-xl p-6 rounded-lg">
            <h1 className="text-lg font-bold mb-4">Course Includes :</h1>
            <div className="space-y-6">
              {details.map((detail, index) => (
                <CourseDetailItem
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
            <div className="mt-6">
              <Link href={`/upcoming-events/${selected_Event.id}/events-register?id=${selected_Event.id}`}>
                <Button className="w-full bg-[#4F9F76] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] border border-[#4F9F76]">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Event_Component;
