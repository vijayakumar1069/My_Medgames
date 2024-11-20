// components/PaymentStatusDialog.js

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconCircleLetterXFilled, IconCircleXFilled, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

const PaymentStatusDialog = ({
  open,
  paymentStatus,
  paymentMessage,
  paymentImage,
  onClose,
  payment_Id
}) => {
  return (
    <Dialog open={open} className="bg-white">
      <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center space-y-5">
        <DialogHeader className={"flex flex-col justify-center items-center space-y-5"}>
          <DialogTitle className="flex flex-col justify-center items-center space-y-5">
            <div className="relative w-[100px] h-[100px]">

          
            {paymentStatus === "success" ? (<IconRosetteDiscountCheckFilled size={100} fill="#376F5F" className="text-black"/>):(<IconCircleXFilled size={100} fill="#E74C3C" className="text-black"/>)}
          
            </div>
            <div className="">

            {paymentStatus === "success"
              ? "Payment Successful!"
              : "Payment Failed"}
            </div>
          </DialogTitle>
          <DialogDescription className="text-center text-black">{paymentMessage}</DialogDescription>
        </DialogHeader>
        <DialogFooter className={`flex sm:justify-center space-x-2 w-full sm:items-center`}>
            {
              paymentStatus === "success" ? (
                <Link href={`/view-receipt?id=${payment_Id}`} >
                
                <Button  onClick={onClose} className="w-fit text-center   text-[#fff] bg-[#4F9F76] hover:bg-[#376F5F] sm:justify-center flex items-center">
                  View Receipt
                </Button>
                </Link>
              ) : (
                <Link href={`/view-receipt?id=${payment_Id}`}>
                
                <Button  onClick={onClose} className="w-fit text-center text-[#EF3636] bg-[#F5DCDc] hover:bg-[#f3acac]   sm:justify-center flex items-center">
                  View Receipt
                </Button>
                </Link>
              )
            }
        
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentStatusDialog;
