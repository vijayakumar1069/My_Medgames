import { PDFDocument, rgb, StandardFonts, TextAlignment, PageSizes } from "pdf-lib";
import { saveAs } from "file-saver";

const generateReceiptPDF = async (paymentData) => {
  try {
    // Create a new PDF Document
    const pdfDoc = await PDFDocument.create();
   
    // Embed fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Color Palette
    const colors = {
      primary: rgb(0.15, 0.45, 0.27),   // Dark Green
      secondary: rgb(0.29, 0.63, 0.47), // Bright Green
      background: rgb(0.97, 0.97, 0.97), // Light Gray
      text: rgb(0.2, 0.2, 0.2),          // Dark Gray
      white: rgb(1, 1, 1),               // White
      successGreen: rgb(0.2, 0.7, 0.3),  // Success Green
      failureRed: rgb(0.9, 0.2, 0.2)     // Failure Red
    };

    // Add a page with standard A4 size
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();

    // Header Section
    page.drawRectangle({
      x: 0,
      y: height - 100,
      width: width,
      height: 100,
      color: colors.primary
    });

    // Company Logo / Name
    page.drawText("MedGames", {
      x: 50,
      y: height - 70,
      size: 24,
      font: helveticaBoldFont,
      color: colors.white
    });

    page.drawText("Payment Receipt", {
      x: width - 250,
      y: height - 70,
      size: 18,
      font: helveticaFont,
      color: colors.white
    });

    // Transaction Details Section
    const detailsStartY = height - 150;
    const details = [
      { 
        label: "Transaction ID", 
        value: paymentData.id 
      },
      { 
        label: "Amount Paid", 
        value: `$${(paymentData.amount_received / 100).toFixed(2)}` 
      },
      { 
        label: "Course", 
        value: paymentData.description.split(": ")[1] 
      },
      { 
        label: "Payment Method", 
        value: paymentData.payment_method_types[0] 
      }
    ];

    // Detailed Information Box
    page.drawRectangle({
      x: 50,
      y: detailsStartY - 180,
      width: width - 100,
      height: 200,
      color: colors.background,
      borderColor: colors.secondary,
      borderWidth: 1
    });

    // Render Transaction Details
    details.forEach((detail, index) => {
      page.drawText(`${detail.label}:`, {
        x: 70,
        y: detailsStartY - 50 - (index * 40),
        size: 12,
        font: helveticaBoldFont,
        color: colors.text
      });

      page.drawText(detail.value, {
        x: 250,
        y: detailsStartY - 50 - (index * 40),
        size: 12,
        font: helveticaFont,
        color: colors.primary
      });
    });

    // Customer Information Section
    page.drawText("Customer Information", {
      x: 50,
      y: detailsStartY - 250,
      size: 16,
      font: helveticaBoldFont,
      color: colors.secondary
    });

    const customerDetails = [
      `Name: ${paymentData.shipping.name}`,
      `Email: ${paymentData.shipping.email || 'N/A'}`,
      `Address: ${paymentData.shipping.address.line1}`,
      `${paymentData.shipping.address.city}, ${paymentData.shipping.address.state}`,
      `${paymentData.shipping.address.postal_code}, ${paymentData.shipping.address.country}`
    ];

    customerDetails.forEach((detail, index) => {
      page.drawText(detail, {
        x: 70,
        y: detailsStartY - 280 - (index * 20),
        size: 10,
        font: helveticaFont,
        color: colors.text
      });
    });

    // Payment Status Indicator
    const statusColor = paymentData.status === "succeeded" 
      ? colors.successGreen 
      : colors.failureRed;

    page.drawText("Payment Status:", {
      x: 50,
      y: 150,
      size: 14,
      font: helveticaBoldFont,
      color: statusColor
    });

    page.drawText(
      paymentData.status === "succeeded" ? "PAID" : "FAILED", 
      {
        x: 200,
        y: 150,
        size: 16,
        font: helveticaBoldFont,
        color: statusColor
      }
    );

    // Decorative Line
    page.drawLine({
      start: { x: 50, y: 130 },
      end: { x: width - 50, y: 130 },
      thickness: 1,
      color: colors.text
    });

    // Footer
    page.drawText("Thank you for your purchase!", {
      x: width / 2 - 100,
      y: 100,
      size: 10,
      font: helveticaFont,
      color: colors.text
    });

    // Generate PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, `receipt_${paymentData.id}.pdf`);

  } catch (error) {
    console.error("Error generating PDF:", error);
    // Optional: Add user-friendly error handling
    throw new Error("Failed to generate receipt. Please try again.");
  }
};

export default generateReceiptPDF;
