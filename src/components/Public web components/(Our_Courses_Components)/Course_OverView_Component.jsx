import React from "react";

const Course_OverView_Component = ({ course }) => {
  return (
    <div className="w-full h-full mt-6 p-4 flex flex-col space-y-5 ">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        perspiciatis architecto similique vitae animi aliquid, ea voluptas
        doloremque aliquam modi nam at, alias illo deleniti aspernatur eum
        pariatur iste! Enim sunt ab quos debitis odit! Nesciunt omnis excepturi
        perspiciatis, tempore ullam quos illo velit ex facere, dolores labore
        qui aspernatur ad molestiae, ratione provident quo impedit. Ducimus,
        facere autem harum quis magnam consectetur et delectus accusantium rem
        consequuntur quisquam pariatur laboriosam maiores voluptate unde a
        libero reiciendis beatae aspernatur in doloribus at! Qui recusandae
        eaque ut aliquam nobis soluta magnam, facilis consectetur non
        consequuntur? Veniam numquam culpa nobis, nesciunt dolore maxime labore
        odit veritatis similique unde ab vel dolorum deleniti ut odio rerum ex
        accusantium enim nihil fuga quam! Soluta reiciendis vel nesciunt debitis
        hic necessitatibus earum, est corrupti tenetur pariatur vitae aut in
        perspiciatis deserunt praesentium repudiandae quia nihil quae similique
        provident! Soluta cumque fuga fugiat accusantium enim eaque dolores
        laborum, sit provident eius a magni ratione necessitatibus impedit sequi
        dolore officia saepe debitis, doloremque optio. Eius ab voluptatum
        reiciendis facilis pariatur totam accusantium, eveniet voluptas, in hic
        sequi enim? Doloribus, magni! Sequi labore neque unde magnam officiis
        voluptatum nulla obcaecati quam laudantium ad numquam vero iusto, veniam
        quia!
      </p>
      <a
  href={course.downloadable_pdf || "#"}
  download={!!course.downloadable_pdf}
  className="inline-block"
>
  <button
    className={`w-fit px-4 py-2 rounded-md text-white ${
      course.downloadable_pdf
        ? "bg-[#4F9F76] hover:bg-[#274E49]"
        : "bg-gray-400 cursor-not-allowed"
    }`}
    disabled={!course.downloadable_pdf}
  >
    Download Booklet
  </button>
</a>

    </div>
  );
};

export default Course_OverView_Component;
