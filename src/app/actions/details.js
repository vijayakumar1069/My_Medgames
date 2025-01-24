"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import Inquiry from "@/modals/contact_us_schedule_a_call_schema";
import Reques_A_Call from "@/modals/request_a_call.modal";
import Subscriber from "@/modals/subscribers";
import { revalidatePath } from "next/cache";

export async function getContactDetails(type) {
  try {
    await connectDB();
    if (type == "request_a_call") {
      const requests = await Reques_A_Call.find()
        .sort({ createdAt: -1 })
        .lean();

      return {
        success: true,
        message: "Details fetched successfully",
        data: deepClone(requests),
      };
    } else if (type == "subscribe") {
      const subscribers = await Subscriber.find()
        .sort({ createdAt: -1 })
        .lean();
      return {
        success: true,
        message: "Details fetched successfully",
        data: deepClone(subscribers),
      };
    }
    const inquiries = await Inquiry.find()
      .sort({ "inquiries.createdAt": -1 })
      .lean();

    // Logic to filter and prioritize inquiries
    const filteredInquiries = inquiries.map((user) => {
      const hasSchedule = user.inquiries.some(
        (inquiry) => inquiry.type == "schedule"
      );
      const filteredInquiries = user.inquiries.filter((inquiry) =>
        type === "schedule"
          ? inquiry.type === "schedule"
          : inquiry.type === "contact" && !hasSchedule
      );

      return {
        ...user,
        inquiries: filteredInquiries,
      };
    });
    const result = filteredInquiries.filter((user) => user.inquiries.length);

    return {
      success: true,
      message: "Details fetched successfully",
      data: deepClone(result),
    };
  } catch (error) {}
}

export async function deleteContactDetails(type, id) {
  try {
    await connectDB();
    if (type == "schedule" || type == "contact") {
      const schedule = await Inquiry.findByIdAndDelete(id);
      if (!schedule) return { success: false, message: "Schedule not found" };
      revalidatePath("/admin-contact-details");
      return {
        success: true,
        message: "Details deleted successfully",
        data: deepClone(schedule),
      };
    }
    // else if (type ==) {
    //   const contact = await Contact.findByIdAndDelete(id);
    //   return {
    //     success: true,
    //     message: "Details deleted successfully",
    //     data: deepClone(contact),
    //   };
    // }
    else if (type == "request_a_call") {
      const request = await Reques_A_Call.findByIdAndDelete(id);
      if (!request) return { success: false, message: "Request not found" };
      revalidatePath("/admin-contact-details");
      return {
        success: true,
        message: "Details deleted successfully",
        data: deepClone(request),
      };
    } else if (type == "subscribe") {
      const subscriber = await Subscriber.findByIdAndDelete(id);
      if (!subscriber)
        return { success: false, message: "Subscriber not found" };
      revalidatePath("/admin-contact-details");
      return {
        success: true,
        message: "Details deleted successfully",
        data: deepClone(subscriber),
      };
    }
  } catch (error) {
    return { success: false, message: "Error deleting details" };
  }
}
