import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

const Image_Bg = () => {
  const breadcrumbItems = [
    { label: "Meet Our Tutors", href: null }, // Current page (no link)
  ];

  return (
    <div className="relative w-full h-[560px]">
      {/* Image with custom overlay */}
      <div className="relative w-full h-full">
        <Image
          src="/tutorbg.png"
          alt="Tutor Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#376F5F]/50 z-5"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Meet Our Tutors</h1>
        <div className="mt-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </div>
  );
};

export default Image_Bg;
