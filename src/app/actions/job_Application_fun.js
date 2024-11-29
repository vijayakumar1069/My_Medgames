// app/actions/jobApplication.js
"use server";

import { connectDB } from "@/lib/dbconnection";
import JobApplication from "@/modals/JobApplication.modal";

export default async function submitJobApplication(applicationData) {
  try {
    // Connect to the database
    await connectDB();

    // Log the received data for debugging
    console.log("Received Application Data:", applicationData);

    // Handle file upload
    const resumeFile = applicationData.resume;
    let resumeBuffer = null;

    if (resumeFile instanceof File) {
      // If it's a File object, convert to buffer
      resumeBuffer = await resumeFile.arrayBuffer();
    } else if (resumeFile && resumeFile.fileBuffer) {
      // If it's already a buffer or has a fileBuffer property
      resumeBuffer = resumeFile.fileBuffer;
    }

    // Create job application document
    const jobApplication = new JobApplication({
      firstName: applicationData.firstName,
      lastName: applicationData.lastName,
      email: applicationData.email,
      phoneNumber: applicationData.phoneNumber,
      position: applicationData.position,
      address: applicationData.address,
      city: applicationData.city,
      state: applicationData.state,
      zipcode: applicationData.zipcode,
      resume: {
        filename: resumeFile.name || 'uploaded_resume.pdf',
        mimetype: resumeFile.type || 'application/pdf',
        fileBuffer: Buffer.from(resumeBuffer),
        uploadedAt: new Date(),
      },
    });

    // Save the job application
    const savedApplication = await jobApplication.save();

    return {
      success: true,
      message: "Job application submitted successfully",
      applicationId: JSON.parse(JSON.stringify(savedApplication)),
    };
  } catch (error) {
    console.error("Job Application Submission Error:", error);

    // More detailed error handling
    return {
      success: false,
      message: "An error occurred during submission",
      error: error.message || "Unknown error",
      errorDetails: error.toString(),
    };
  }
}
