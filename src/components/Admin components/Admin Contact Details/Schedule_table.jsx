import { getContactDetails } from "@/app/actions/details";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/formatDateFunction";
import { Button } from "@/components/ui/button";
import DeleteDetailsButton from "./DeleteDetailsButton";

const Schedule_table = async () => {
  try {
    const res = await getContactDetails("schedule");
    
    if (!res || !res.success) {
      throw new Error(res?.message || "Failed to fetch schedule details.");
    }
    

    return (
      <div className="w-full">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Preferred Contact</TableHead>
                <TableHead>Inquiry</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {res.data.length > 0 ? (
                res.data.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      {item.inquiries[0].preferredContact || "N/A"}
                    </TableCell>
                    <TableCell className="text-left flex flex-col space-y-2">
                      {item.inquiries[0].schedules.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex flex-col px-3 gap-2 border-[1px] border-gray-200 py-2"
                        >
                          <p>Date: {formatDate(schedule.date)}</p>
                          <p>From Time: {schedule.fromTime}</p>
                          <p>To: {schedule.toTime}</p>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      <DeleteDetailsButton type="schedule" id={item._id} />
                    </TableCell>
                 
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-gray-500 py-4"
                  >
                    No Schedules available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-96">
        <h2 className="text-red-500 font-semibold">Error</h2>
        <p className="text-gray-500">{error.message || "Something went wrong."}</p>
      </div>
    );
  }
};

export default Schedule_table;
