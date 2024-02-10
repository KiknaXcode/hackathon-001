// responsible to extract specific pages from pdf and create new pdf file with them.

const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const readlineSync = require('readline-sync');

// Function to extract pages
async function extractPagesFromPDF(pdfPath, pageNumbers) {
  const existingPdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pdfDocNew = await PDFDocument.create();

  // Extract specified pages
  for (const pageNumber of pageNumbers) {
    const [copiedPage] = await pdfDocNew.copyPages(pdfDoc, [pageNumber - 1]); // page numbers are 0-based
    pdfDocNew.addPage(copiedPage);
  }

  const pdfBytes = await pdfDocNew.save();
  fs.writeFileSync('extracted_pages.pdf', pdfBytes);
  console.log('Extracted pages saved to extracted_pages.pdf');
}

// User input for PDF file path
const pdfFilePath = 'artsciencejava.pdf';

// User input for pages to extract
const pagesInput = readlineSync.question('Enter the page numbers to extract (e.g., 1,3,5): ');
const pageNumbers = pagesInput.split(',').map(num => parseInt(num, 10)).filter(num => !isNaN(num));

// Validate input
if (!fs.existsSync(pdfFilePath)) {
  console.log('The specified PDF file does not exist.');
} else if (pageNumbers.length === 0) {
  console.log('No valid page numbers were provided.');
} else {
  // Extract pages
  extractPagesFromPDF(pdfFilePath, pageNumbers).catch(console.error);
}
