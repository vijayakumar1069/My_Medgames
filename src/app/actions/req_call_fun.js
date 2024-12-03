"use server";

import { connectDB } from "@/lib/dbconnection";
import Reques_A_Call from "@/modals/request_a_call.modal";

export async function create_req_call(data) {
    console.log("create_req_call called with data:", data);
  await connectDB();
  try {
    const existingUser = await Reques_A_Call.findOne({
      mobile_number: data.phoneNumber,
    });
    if (existingUser) {
      return {
        success: false,
        message: "Request call already exists for this mobile number",
      };
    }

    const new_user = new Reques_A_Call({
        mobile_number: data.phoneNumber
    });
    await new_user.save();
    if (!new_user) {
      throw new Error("Error creating request call");
    }
    return {
      success: true,
      message: "Request call created successfully",
      data: JSON.parse(JSON.stringify(new_user)),
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
