// app/actions/inquiryActions.js
"use server";

import AdminNotificationEmail from "@/components/email components/AdminNotificationEmail";
import InquiryConfirmation from "@/components/email components/InquiryConfirmation";
import { deepClone } from "@/lib/convert_to_JSON";
import { connectDB } from "@/lib/dbconnection";
import transporter from "@/lib/email_transporter";
import Inquiry from "@/modals/contact_us_schedule_a_call_schema";
import { render } from "@react-email/components";

// Contact Us Submission
export async function submitContactInquiry({ userData, inquiryType }) {
  try {
    // Connect to the database
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

    if (!savedInquiry) {
      throw new Error("Failed to save inquiry");
    }

    // Send emails
    try {
      const { userEmailInfo, adminEmailInfo } =
        await sendInquiryConfirmationEmail(userData, inquiryType);

      return {
        success: true,
        message: "Contact inquiry submitted successfully",
        inquiryId: JSON.parse(JSON.stringify(savedInquiry)),
        userEmailId: userEmailInfo.messageId,
        adminEmailId: adminEmailInfo.messageId,
      };
    } catch (emailError) {
      throw new Error(
        `Inquiry saved but email sending failed: ${emailError.message}`
      );
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to submit contact inquiry",
    };
  }
}

export async function sendInquiryConfirmationEmail(userData, inquiryType) {
  try {
    // Render the user email template
    const userEmailHtml = await render(
      <InquiryConfirmation
        name={userData.name}
        email={userData.email}
        inquiryType={inquiryType}
        course={userData.course}
        message={userData.message}
        schedules={userData.schedules}
      />
    );

    // Render the admin email template
    const adminEmailHtml = await render(
      <AdminNotificationEmail
        name={userData.name}
        email={userData.email}
        inquiryType={inquiryType}
        course={userData.course}
        message={userData.message}
        schedules={userData.schedules}
      />
    );

    // Prepare email options
    const userMailOptions = {
      from: `"MedGames" <${process.env.SMTP_USER}>`,
      to: userData.email,
      subject: `Your MedGames Inquiry Confirmation - Elevate Your Medical Career!`,
      html: userEmailHtml,
    };

    const adminMailOptions = {
      from: `"MedGames" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Replace with admin's email
      subject: `New MedGames Inquiry from ${userData.name}`,
      html: adminEmailHtml,
    };

    // Send emails concurrently
    const [userEmailInfo, adminEmailInfo] = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return { userEmailInfo, adminEmailInfo };
  } catch (error) {
    throw new Error(`Failed to send emails: ${error.message}`);
  }
}
