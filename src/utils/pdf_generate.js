import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { saveAs } from "file-saver"; // For downloading the PDF

const generateReceiptPDF = async (paymentData) => {
  try {
    // Load the MedGames logo
    const logoUrl = "/public/logo.png"; // Make sure the path to your logo is correct
    const logoBytes = await fetch(logoUrl).then((res) => res.arrayBuffer());

    // Create a new PDF Document
    const pdfDoc = await PDFDocument.create();

    // Register FontKit (necessary for using custom fonts)
    pdfDoc.registerFontkit(fontkit);

    // Load custom font
    const fontUrl = "/public/fonts/inter-regular.ttf"; // Make sure the path to your font is correct
    const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    // Add a page to the PDF
    const page = pdfDoc.addPage([600, 800]);

    // Set colors
    const backgroundColor = rgb(0.91, 0.98, 0.95); // Light green background
    const textColor = rgb(0.29, 0.63, 0.47); // MedGames green

    // Add background color
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 600,
      height: 800,
      color: backgroundColor,
    });

    // Draw the logo
    const logoImage = await pdfDoc.embedPng(logoBytes);
    page.drawImage(logoImage, {
      x: 230,
      y: 700,
      width: 140,
      height: 70,
    });

    // Add title
    page.drawText("Payment Receipt", {
      x: 200,
      y: 660,
      size: 24,
      font: customFont,
      color: textColor,
    });

    // Add transaction details
    const details = [
      { label: "Transaction ID", value: paymentData.id },
      {
        label: "Amount Paid",
        value: `$${(paymentData.amount_received / 100).toFixed(2)}`,
      },
      { label: "Course Name", value: paymentData.description.split(": ")[1] },
      { label: "Payment Method", value: paymentData.payment_method_types[0] },
      { label: "Status", value: paymentData.status === "succeeded" ? "Success" : "Failed" },
      { label: "Customer Name", value: paymentData.shipping.name },
      {
        label: "Address",
        value: `${paymentData.shipping.address.line1}, ${paymentData.shipping.address.city}, ${paymentData.shipping.address.state} - ${paymentData.shipping.address.postal_code}, ${paymentData.shipping.address.country}`,
      },
    ];

    let yPosition = 620;
    details.forEach((detail) => {
      page.drawText(`${detail.label}: ${detail.value}`, {
        x: 50,
        y: yPosition,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });
      yPosition -= 30;
    });

    // Generate the PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "payment_receipt.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

export default generateReceiptPDF;
