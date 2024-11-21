import React from "react";

const CourseDetailItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="border-b-[1px] pb-2">
      <div className="flex justify-between w-full items-center px-1 ">
        <div className="flex space-x-1 items-center text-sm text-nowrap">
          {Icon && <Icon stroke={2} color="#4A4A4A" />}
          <span>{label} :</span>
        </div>
        <div className="font-bold text-right text-sm">{value}</div>
      </div>
    </div>
  );
};

export default CourseDetailItem;
