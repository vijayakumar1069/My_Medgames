"use server";

import { connectDB } from "@/lib/dbconnection";
import Reques_A_Call from "@/modals/request_a_call.modal";
import { contact_number_inquery } from "./contact_us_schedule_a_call_fun";
import { revalidatePath } from "next/cache";

export async function create_req_call(data) {
  await connectDB();
  try {
    const existingUser = await Reques_A_Call.findOne({
      email: data.email,
    });
    if (existingUser) {
      return {
        success: false,
        message: "Consultation already exists for this email address",
      };
    }

    const new_user = new Reques_A_Call({
      email: data.email,
    });
    await new_user.save();
    if (!new_user) {
      throw new Error("Error creating booking consult for this email");
    }
    try {
      // Send SMS or email notification to admin
      const res = await contact_number_inquery(new_user.email);
      revalidatePath("/admin-contact-details");
      if (res) {
        return {
          success: true,
          message: "Request call created successfully",
          data: JSON.parse(JSON.stringify(new_user)),
        };
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);

      return {
        success: false,
        message: "Error sending notification to admin",
      };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
