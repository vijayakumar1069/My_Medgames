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
const Request_A_Call_Table = async () => {
  try {
    const res = await getContactDetails("request_a_call");

    if (!res || !res.success) {
      throw new Error(res?.message || "Failed to fetch Mobile Number details.");
    }

    return (
      <div className="max-w-sm text-center mx-auto">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {res.data.length > 0 ? (
                res.data.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.mobile_number}</TableCell>
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
        <p className="text-gray-500">
          {error.message || "Something went wrong."}
        </p>
      </div>
    );
  }
};

export default Request_A_Call_Table;
