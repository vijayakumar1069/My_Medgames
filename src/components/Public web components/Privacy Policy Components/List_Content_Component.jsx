import React from "react";

const List_Content_Component = ({ title, list_tittle, list_content, content }) => {
  return (
    <div className="w-full flex flex-col space-y-3">
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      <h3 className="text-md sm:text-lg font-semibold">{list_tittle}</h3>
      <ul className="list-disc pl-6 space-y-2">
        {list_content.map((item, index) => (
          <li key={index} className="xs:text-sm sm:text-base">{item}</li>
        ))}
      </ul>
      {content && content.map((item, index) => (
        <p className="xs:text-sm sm:text-base" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default List_Content_Component;
