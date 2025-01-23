import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Schedule_table from "./Schedule_table";
import Contact_Us_Table from "./Contact_Us_Table";
import Request_A_Call_Table from "./Request_A_Call_Table";
import Subscribers_Table from "./Subscribers_Table";
import Skeleton from "@/components/Public web components/Skeleton";

const Contact_Details_Tabs = () => {
  return (
    <Tabs defaultValue="schedule" className="w-full">
      <TabsList className="w-full mx-auto flex justify-between items-center mb-5">
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="request a call">Consultation </TabsTrigger>
        <TabsTrigger value="subscriber">Subscribers</TabsTrigger>
      </TabsList>
      <TabsContent value="schedule">
        <Suspense fallback={<Skeleton />}>
          <Schedule_table />
        </Suspense>
      </TabsContent>
      <TabsContent value="contact">
        <Suspense fallback={<Skeleton />}>
          <Contact_Us_Table />
        </Suspense>
      </TabsContent>
      <TabsContent value="request a call">
        <Suspense fallback={<Skeleton />}>
          <Request_A_Call_Table />
        </Suspense>
      </TabsContent>
      <TabsContent value="subscriber">
        <Suspense fallback={<Skeleton />}>
          <Subscribers_Table />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default Contact_Details_Tabs;
