// components/Meet_Our_Tutor_Card.jsx
import { IconMapPin, IconSchool } from "@tabler/icons-react";
import Image from "next/image";

const Meet_Our_Tutor_Card = ({ tutor }) => {
  const {
    _id,
    name,
    graduation,
    location,
    image,
    college,
  } = tutor;

  return (
    <article 
      className="max-w-md drop-shadow-xl h-full p-2 flex flex-col space-y-4 border-2 border-[#F4F6FC] bg-white rounded-xl" 
      key={_id}
    >
      <div className="relative w-full h-[250px] lg:h-[300px] rounded-xl p-6 bg-[#F4F6FC]">
        <Image
          src={image.url}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-xl"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-[#4F9F76] font-medium">{graduation}</p>
      </div>

      <div className="flex justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <IconSchool stroke={2} className="text-[#4F9F76]" />
          <p className="text-[#4A4A4A] text-sm">{college}</p>
        </div>
      </div>

      <div className="flex space-x-3 items-center">
        <div className="bg-[#4F9F76]/30 border-[#4F9F76] border-2 p-1 text-nowrap rounded-md">
          <p className="flex space-x-1 items-center">
            <IconMapPin stroke={2} size={20} className="text-[#4F9F76]" />
            <span className="text-[#000] text-sm">{location}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Meet_Our_Tutor_Card;
