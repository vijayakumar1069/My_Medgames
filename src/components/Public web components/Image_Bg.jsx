import Image from "next/image";
import Breadcrumb_Wrapper from "./Breadcrumb_Wrapper";

const Image_Bg = ({ bg_Image }) => {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
      {/* Image Container with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <Image
          src={bg_Image}
          alt="Background"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 100vw, 
                 (max-width: 1024px) 100vw, 
                 (max-width: 1280px) 100vw, 
                 100vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#376F5F]/50"></div>
      </div>

      {/* Content Positioning */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <Breadcrumb_Wrapper />
        </div>
      </div>
    </div>
  );
};

export default Image_Bg;
