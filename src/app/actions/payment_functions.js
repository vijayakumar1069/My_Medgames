"use server";

import { connectDB } from "@/lib/dbconnection";
import Stripe from "stripe";

export async function paymentclientSecret({ purchaseCourseDetails, shippingDetails }) {
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
                status:200,
                paymentIntent:JSON.parse(JSON.stringify(paymentIntent))
            };
          } catch (error) {
            console.error("Error fetching payment details:", error);
            return {
                status:500,
                error:error.message || "Failed to fetch payment details."
            }
          }
}