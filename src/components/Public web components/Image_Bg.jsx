import Image from "next/image";

import Breadcrumb_Wrapper from "./Breadcrumb_Wrapper";

const Image_Bg = ({bg_Image}) => {
  


  return (
    <div className="relative w-full h-[560px]">
      {/* Image with custom overlay */}
      <div className="relative w-full h-full">
        <Image
          src={bg_Image}
          alt="Tutor Background"
          fill
            style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#376F5F]/50 z-5"></div>
      </div>

      {/* Content */}
      <div className="">

      <Breadcrumb_Wrapper/>
      </div>
      
    </div>
  );
};

export default Image_Bg;
