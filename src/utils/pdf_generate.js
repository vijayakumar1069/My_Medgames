import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

const generateReceiptPDF = async (paymentData) => {
  try {
    console.log("Starting PDF generation...");

    // Create a new PDF Document
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    console.log("Font embedded successfully.");

    // Add a page to the PDF
    const page = pdfDoc.addPage([600, 800]);

    // Define styling and margins
    const margin = 50;
    const textColor = rgb(0.29, 0.63, 0.47); // MedGames green
    const headerColor = rgb(0.15, 0.45, 0.27); // Darker green for headers
    const labelColor = rgb(0.18, 0.18, 0.18); // Dark gray for labels
    const valueColor = rgb(0, 0, 0); // Black for values

    // Add a title
    page.drawText("Payment Receipt", {
      x: margin,
      y: 750,
      size: 24,
      font,
      color: textColor,
    });

    // Add a line separator
    page.drawLine({
      start: { x: margin, y: 740 },
      end: { x: 550, y: 740 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    let yPosition = 700;
    const details = [
      { label: "Transaction ID", value: paymentData.id },
      { label: "Amount Paid", value: `$${(paymentData.amount_received / 100).toFixed(2)}` },
      { label: "Course Name", value: paymentData.description.split(": ")[1] },
      { label: "Payment Method", value: paymentData.payment_method_types[0] },
      { label: "Status", value: paymentData.status === "succeeded" ? "Success" : "Failed" },
      { label: "Customer Name", value: paymentData.shipping.name },
      {
        label: "Address",
        value: `${paymentData.shipping.address.line1}, ${paymentData.shipping.address.city}, ${paymentData.shipping.address.state} - ${paymentData.shipping.address.postal_code}, ${paymentData.shipping.address.country}`,
      },
    ];

    // Add the transaction details dynamically with proper spacing
    details.forEach((detail) => {
      page.drawText(`${detail.label}:`, {
        x: margin,
        y: yPosition,
        size: 14,
        font,
        color: labelColor,
      });
      page.drawText(`${detail.value}`, {
        x: margin + 120, // Indentation for the value text
        y: yPosition,
        size: 14,
        font,
        color: valueColor,
        maxWidth: 400, // Text wrap, prevent overflow
      });
      yPosition -= 25;
    });

    // Add Shipping Details Section
    page.drawText("Shipping Details:", {
      x: margin,
      y: yPosition,
      size: 16,
      font,
      color: headerColor,
    });
    yPosition -= 25;
    page.drawText(`Name: ${paymentData.shipping.name}`, {
      x: margin + 20,
      y: yPosition,
      size: 14,
      font,
      color: valueColor,
      maxWidth: 500,
    });
    yPosition -= 20;
    page.drawText(`Address: ${paymentData.shipping.address.line1}`, {
      x: margin + 20,
      y: yPosition,
      size: 14,
      font,
      color: valueColor,
      maxWidth: 500,
    });
    yPosition -= 20;
    page.drawText(`${paymentData.shipping.address.city}, ${paymentData.shipping.address.state} ${paymentData.shipping.address.postal_code}`, {
      x: margin + 20,
      y: yPosition,
      size: 14,
      font,
      color: valueColor,
      maxWidth: 500,
    });
    yPosition -= 20;
    page.drawText(`${paymentData.shipping.address.country}`, {
      x: margin + 20,
      y: yPosition,
      size: 14,
      font,
      color: valueColor,
      maxWidth: 500,
    });

    // Adjust positioning for the button section (e.g. Download receipt)
    yPosition -= 40;

    // Add final line separator
    page.drawLine({
      start: { x: margin, y: yPosition },
      end: { x: 550, y: yPosition },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    // Generate the PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    saveAs(blob, "payment_receipt.pdf");
    console.log("PDF download initiated successfully.");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

export default generateReceiptPDF;
