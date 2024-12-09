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

const Contact_Us_Table = async () => {
  try {
    const res = await getContactDetails("contact");

    if (!res.success) {
      return (
        <div className="text-center py-8">
          <h1 className="text-red-500 text-xl font-semibold">
            Error: Unable to fetch contact details.
          </h1>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      );
    }

    const data = res.data;

    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.inquiries[0]?.course || "N/A"}</TableCell>
                  <TableCell className="max-w-sm break-words">
                    {item.inquiries[0]?.message || "No message provided"}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-gray-500 py-4"
                >
                  No inquiries available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-8">
        <h1 className="text-red-500 text-xl font-semibold">
          Error: Something went wrong.
        </h1>
        <p className="text-gray-500">{error.message}</p>
      </div>
    );
  }
};

export default Contact_Us_Table;
