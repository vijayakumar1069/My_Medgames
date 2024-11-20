import { getPaymentDetails } from "@/app/actions/payment_functions";
import Payment_Details_Component from "@/components/Public web components/(Our_Courses_Components)/Payments components/Payment_Details_Component";

export default async function View_Receipt_Page({searchParams}) {
    const { id } = await searchParams;
    // Fetch receipt data using the provided ID
    const paymentData = await getPaymentDetails(id);
    console.log(paymentData);
    return (
        <div>
            <Payment_Details_Component paymentData={paymentData.paymentIntent} />
        </div>
    );
}