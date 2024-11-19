import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Course_Review_Component from "./Course_Review_Component";

const User_Selected_Course_Component = ({ course }) => {
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center  flex-col space-y-8 p-3 py-10 ">
        <div className="lg:w-10/12 md:w-11/12 w-full flex md:flex-row flex-col md:space-y-0 space-y-10   space-x-10">
          <div className="basis-3/4">
            <Tabs defaultValue="overview" className="w-full">
              {/* Tabs Header */}
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview">
                <h1 className="text-xl font-bold">Overview</h1>
              </TabsContent>

              {/* Reviews Tab Content */}
              <TabsContent value="reviews">
                <Course_Review_Component course={course} />
              </TabsContent>
            </Tabs>
          </div>
          <div className="basis-1/4">{course.name}</div>
        </div>
      </div>
    </div>
  );
};

export default User_Selected_Course_Component;
