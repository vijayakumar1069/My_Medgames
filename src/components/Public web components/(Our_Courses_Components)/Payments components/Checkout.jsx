"use client";

import React, { useEffect, useState } from "react";
import PaymentLeftSection from "./PaymentLeftSection";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { paymentclientSecret } from "@/app/actions/payment_functions";
import PaymentStatusDialog from "./PaymentStatusDialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  address: z.object({
    line1: z.string().min(2, { message: "Address Line 1 is required." }),
    postal_code: z
      .string()
      .min(5, { message: "Postal Code must be at least 5 characters." }),
    city: z.string().min(2, { message: "City is required." }),
    state: z.string().min(2, { message: "State is required." }),
    country: z.string().min(2, { message: "Country is required." }),
  }),
});

const Checkout = ({ purchaseCourseDetails }) => {
  const stripe = useStripe();
  const elements = useElements();


  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState(null);
  const [paymentImage, setPaymentImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const[payment_Id,setPayment_Id]=useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: {
        line1: "",
        postal_code: "",
        city: "",
        state: "",
        country: "",
      },
    },
  });



  const onSubmit = async () => {
    if (!stripe || !elements) {
    
      return; // Ensure Stripe is ready
    }
  
    setProcessing(true);
    setError(null);
  
    try {
     
      // Fetch client secret asynchronously
      const payment = await paymentclientSecret({
        purchaseCourseDetails,
        shippingDetails: form.getValues(), // Fetch form values directly when needed
      });
  
      // Set the client secret from the response
      const clientSecret = payment.clientSecret;
    
  
      // Check if clientSecret is available
      if (!clientSecret) {
        console.error("Failed to retrieve client secret");
        throw new Error("Failed to retrieve client secret");
      }
  
      // Submit the elements to start the payment process
    
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message);
        setProcessing(false);
        return;
      }
  
      // Confirm payment using the client secret
   
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret, // Pass the clientSecret here
        confirmParams: {
          return_url: `${
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "http://localhost:3000/payment-success"
              : "https://medgames.vercel.app/payment-success"
          }`,
        },
        redirect: "if_required",
      });
  
      // If an error occurs during the payment confirmation
      if (stripeError) {
        console.error("Stripe error: ", stripeError);
        throw new Error(stripeError.message);
      }
      setPayment_Id(paymentIntent.id);
      
  
  
      if (paymentIntent.status === "succeeded") {
        setPaymentStatus("success");
        setPaymentMessage("Thank you for your purchase! Your payment has been successfully processed,");
        setPaymentImage("/Success.png");
        
      } else if (paymentIntent.status === "requires_action") {
        setPaymentStatus("action_required");
        setPaymentMessage("Payment requires further authentication.");
        setPaymentImage("/failure.png");
      } else if (paymentIntent.status === "requires_payment_method") {
        setPaymentStatus("failed");
        setPaymentMessage("Payment failed. Please check your payment details.");
        setPaymentImage("/failure.png");
      } else if (paymentIntent.status === "failed") {
        setPaymentStatus("failed");
        setPaymentMessage("Payment failed. Please try again.");
        setPaymentImage("/failure.png");
      }

      setDialogOpen(true);
  
    } catch (err) {
      console.error("Error during payment process: ", err);
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  const handleback=()=>
  {
    // Go back to previous page
    window.history.back();
  }
  
  
  
  
  

  return (
    <div className="w-[90%] sm:w-[80%] md:px-4 lg:px-0 px-4 flex flex-col lg:flex-row justify-between font-Poppins mx-auto space-y-4 lg:space-x-4 bg-white shadow-lg rounded-lg">
      <div className="flex-1 mt-4 relative">
        <PaymentLeftSection
          title={purchaseCourseDetails.name}
          intro={purchaseCourseDetails.description}
        />
      </div>

      <div className="flex-1 lg:px-3 pb-4 mt-3 lg:mt-0 lg:pb-4 font-Manrope">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {["name", "email"].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel className="block text-[#1A1A1A]">
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...formField}
                        className="border-b-[1px] border-black/50 w-full py-1 px-3 rounded-none focus:outline-none focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            {["line1", "postal_code", "city", "state", "country"].map(
              (field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={`address.${field}`}
                  render={({ field: addressField }) => (
                    <FormItem>
                      <FormLabel className="block text-[#1A1A1A]">
                        {field.replace("_", " ").toUpperCase()}{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...addressField}
                          className="border-b-[1px] border-black/50 w-full py-1 px-3 rounded-none focus:outline-none focus-visible:ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
            <div className="mb-4">
              <PaymentElement />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div className="flex space-x-6 justify-end ">
              <Button type="button" onClick={handleback} className="bg-[#4F9F76]/40 text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-[#4F9F76] drop-shadow-lg">
                Back
              </Button>

            <Button
              type="submit"
              disabled={processing || !stripe || !elements}
              className={` flex bg-[#4F9F76] justify-center items-center py-3 text-white font-bold rounded-md transition-all `}
            >
              {processing && (
                <span className="animate-spin w-5 h-5 mr-2">🔄</span>
              ) }
              {processing
                ? "Processing..."
                : `Buy Now`}
            </Button>
            </div>
          </form>
        </Form>
      </div>
      <PaymentStatusDialog
        open={dialogOpen}
        paymentStatus={paymentStatus}
        paymentMessage={paymentMessage}
        paymentImage={paymentImage}
        onClose={() => setDialogOpen(false)}
        payment_Id={payment_Id}
      />
    </div>
  );
};

export default Checkout;
