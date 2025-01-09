"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Payment_Wrapper = ({ purchaseCourseDetails }) => {
  return (
    <div className="w-full h-full flex justify-center items-center  flex-col space-y-8  py-10 ">
      <div className="lg:w-11/12 md:w-11/12 w-full ">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            currency: "cad",
            amount: 100 * purchaseCourseDetails.price,
          }}
        >
          <Checkout purchaseCourseDetails={purchaseCourseDetails} />{" "}
        </Elements>
      </div>
    </div>
  );
};

export default Payment_Wrapper;
