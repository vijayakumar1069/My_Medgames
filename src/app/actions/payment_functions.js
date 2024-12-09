"use server";

import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import payment_modal from "@/modals/payment_modal";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";

export async function paymentclientSecret({
  purchaseCourseDetails,
  shippingDetails,
}) {
  if (!purchaseCourseDetails || !shippingDetails) {
    throw new Error("Missing purchase course details or shipping details.");
  }

  await connectDB();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: purchaseCourseDetails.price * 100, // Amount in cents
      currency: "usd",
      automatic_payment_methods: { enabled: true }, // This enables automatic payment methods
      description: `Payment for course: ${purchaseCourseDetails.name}`,
      shipping: {
        name: shippingDetails.name,
        address: shippingDetails.address,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw new Error("Failed to create payment intent.");
  }
}

export async function getPaymentDetails(id) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  if (!id) {
    throw new Error("Missing payment intent ID.");
  }
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    return {
      status: 200,
      paymentIntent: JSON.parse(JSON.stringify(paymentIntent)),
    };
  } catch (error) {
    console.error("Error fetching payment details:", error);
    return {
      status: 500,
      error: error.message || "Failed to fetch payment details.",
    };
  }
}

export async function add_payment({
  email,
  amount,
  paymentIntentId,
  status,
  courseTitle,
}) {
  try {
    await connectDB();
    const payment = await payment_modal.create({
      email,
      amount,
      paymentIntentId,
      status,
      courseTitle,
    });
    if(!payment)
    {
      throw new Error("Failed to add payment");
    }
    revalidatePath("/admin-payments");
    return {
      success: true,
      message: "Payment added successfully",
    };
  } catch (error) {
    console.error("Error adding payment:", error);
    return {
      success: false,
      message: error.message || "Failed to add payment.",
    };
  }
}

export async function admin_payments_function() {
  try {
    await connectDB();
    const totalpayment = await payment_modal.find().sort({ createdAt: -1 });
    if (!totalpayment) {
      throw new Error("No payments found");
    }
    return {
      success: true,
      message: "Payments fetched successfully",
      data: deepClone(totalpayment),
    };
  } catch (error) {
    console.error("Error fetching payments:", error);
    return {
      success: false,
      message: error.message || "Failed to fetch payments.",
    };
  }
}
