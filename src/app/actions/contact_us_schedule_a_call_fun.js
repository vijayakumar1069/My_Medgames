// app/actions/inquiryActions.js
"use server";

import InquiryConfirmation from "@/components/email components/InquiryConfirmation";
import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import transporter from "@/lib/email_transporter";
import Inquiry from "@/modals/contact_us_schedule_a_call_schema";
import { render } from "@react-email/components";

// Contact Us Submission
export async function submitContactInquiry({ userData, inquiryType }) {
  try {
    console.log("Sending Inquiry:", userData, inquiryType);
    // Connect to database
    await connectDB();

    // Prepare contact inquiry data
    const inquiryDetails = {
      type: inquiryType,
      course: inquiryType === "contact" ? userData.course : null,
      message: inquiryType === "contact" ? userData.message : null,
      preferredContact: inquiryType === "schedule" ? "zoom" : null,
      schedules:
        inquiryType === "schedule"
          ? [
              {
                date: new Date(),
                fromTime: "10:00",
                toTime: "11:00",
              },
            ]
          : [],
    };

    // Create and save inquiry
    const savedInquiry = await Inquiry.submitInquiry(userData, inquiryDetails);

    // Send email notification to user
    if (savedInquiry) {
      try {
        await sendInquiryConfirmationEmail(userData, inquiryType);
        return {
          success: true,
          message: "Contact inquiry submitted successfully",
          inquiryId: JSON.parse(JSON.stringify(savedInquiry)),
        };
        console.log("Email sent to user:", userData.email);
      } catch (error) {
        return {
          success: false,
          message: error.message || "Failed to submit contact inquiry",
        };
      }
    }

    
  } catch (error) {
    console.error("Contact Inquiry Submission Error:", error);
    return {
      success: false,
      message: error.message || "Failed to submit contact inquiry",
    };
  }
}

async function sendInquiryConfirmationEmail(userData, inquiryType) {
  try {
    // Render the email using React Email
    const emailHtml =await render(
      <InquiryConfirmation
        name={userData.name}
        email={userData.email}
        inquiryType={inquiryType}
        course={userData.course}
        message={userData.message}
        schedules={userData.schedules}
      />
    );

    // Send email
    const info = await transporter.sendMail({
      from: `"MedGames" <${process.env.SMTP_FROM_EMAIL}>`,
      to: userData.email,
      subject: `Your MedGames Inquiry Confirmation - Elevate Your Medical Career!`,
      html: emailHtml,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send confirmation email");
  }
}
