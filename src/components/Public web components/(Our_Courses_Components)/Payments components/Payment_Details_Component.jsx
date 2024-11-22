"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import  generateReceiptPDF  from "@/utils/pdf_generate";

const DetailRow = ({ label, value, isCapitalize = false }) => {
  return (
    <div className="flex justify-between flex-wrap">
      <span className="font-medium text-gray-600 flex-1">{label}:</span>
      <span
        className={`font-medium text-black ${
          isCapitalize ? "capitalize" : ""
        } flex-1 text-left`}
      >
        {value}
      </span>
    </div>
  );
};

const Payment_Details_Component = ({ paymentData }) => {
  const isSuccess = paymentData.status === "succeeded";
  const courseName = paymentData.description.split(": ")[1];

  const handleDownload = async () => {
    try {
  
      await generateReceiptPDF(paymentData);
    } catch (err) {
     
    }
  };
  

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col space-y-8 py-10 px-4 bg-[#f9fafb]">
      <div className="max-w-xl w-full mx-auto flex flex-col space-y-6 items-center">
        {/* Payment Status Image */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          <Image
            src={isSuccess ? "/payment_success.png" : "/payment_failure.png"}
            alt="payment"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        {/* Payment Status */}
        <h1
          className={`${
            isSuccess ? "text-[#4F9F76]" : "text-[#FF0000]"
          } text-3xl font-bold text-center`}
        >
          {isSuccess ? "Payment Success" : "Payment Failed"}
        </h1>

        {/* Payment Details */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-800">Transaction Details</h2>
          <div className="w-full h-1 border-b-[1px] border-gray-200"></div>

          {/* Reuse DetailRow Component */}
          <DetailRow
            label="Amount Paid"
            value={`$${(paymentData.amount_received / 100).toFixed(2)}`}
          />
          <DetailRow
            label="Payment Method"
            value={paymentData.payment_method_types[0]}
            isCapitalize={true}
          />
          <DetailRow label="Description" value={paymentData.description} />

          <h2 className="text-lg font-medium text-gray-800 mt-6">Shipping Details</h2>
          <div className="w-full h-1 border-b-[1px] border-gray-200"></div>
          <DetailRow label="Name" value={paymentData.shipping.name} />
          <DetailRow
            label="Address"
            value={`${paymentData.shipping.address.line1}, ${paymentData.shipping.address.city}, ${paymentData.shipping.address.state} - ${paymentData.shipping.address.postal_code}, ${paymentData.shipping.address.country}`}
          />
          <DetailRow label="Transaction ID" value={paymentData.id} />
        </div>

        {/* Summary Section */}
        <div className="w-full bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-medium text-gray-800">
            Summary of Purchased Course
          </h2>
          <div className="w-full h-1 border-b-[1px] border-gray-200"></div>

          <DetailRow
            label="Course Name"
            value={courseName}
            isCapitalize={true}
          />
          <DetailRow
            label="Price"
            value={`$${(paymentData.amount_received / 100).toFixed(2)}`}
          />
        </div>

        {/* Payment Button */}
        <div className="flex w-full justify-center">
          <Button
          onClick={() => handleDownload()}
            className={`w-fit text-center ${
              isSuccess
                ? "text-white bg-[#4F9F76] hover:bg-[#376F5F]"
                : "text-[#EF3636] bg-[#F5DCDc] hover:bg-[#f3acac]"
            } px-6 py-2 rounded-md`}
          >
            Download Receipt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment_Details_Component;
