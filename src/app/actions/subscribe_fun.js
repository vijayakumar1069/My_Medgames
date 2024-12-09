"use server";

import { connectDB } from "@/lib/dbconnection";
import Subscriber from "@/modals/subscribers";
import { revalidatePath } from "next/cache";

export async function subscribeAction(email) {
  try {
    await connectDB();
    const new_user = await Subscriber.create({
      email: email,
    });

    if (!new_user) {
      throw new Error("Error creating subscriber");
    }
    revalidatePath("/admin-contact-details")
    return { success: true, message: "Subscribed successfully" };
  } catch (error) {
    console.error("Error subscribing:", error);
    return {
      success: false,
      message: "Failed to subscribe",
      error: error.message,
    };
  }
}
