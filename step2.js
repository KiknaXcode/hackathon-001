const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfFilePath = 'extracted_pages.pdf'; // Path to the PDF file from which to extract text

// Function to extract text from a PDF file and use it further, marked as async
async function extractTextFromPDF(pdfPath) {
    try {
        const pdfBuffer = fs.readFileSync(pdfPath);
        const data = await pdfParse(pdfBuffer); // Use await to wait for the promise to resolve
        let extractedText = data.text;
        return extractedText;
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
    }
}

// Example of how to use the extractTextFromPDF function and export the result
async function handlePDFExtraction() {
    try {
        const extractedText = await extractTextFromPDF(pdfFilePath);
        return extractedText; // You can return it here if you want to use it further
    } catch (error) {
        console.error("Error handling PDF extraction:", error);
    }
}

handlePDFExtraction(); // Execute the function to log the extracted text

// Exporting the promise that resolves with the extracted text
// Note: Consumers of this module need to await or then() the import to get the actual text
module.exports = handlePDFExtraction();
