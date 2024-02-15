const handlePDFExtraction = require('./step2'); 
const { OpenAI } = require('openai');


async function logExtractedText() {
  try {
    const extractedText = await handlePDFExtraction;
    return extractedText;
  } catch (error) {
    console.error("Error accessing extracted text:", error);
  }
}


const openai = new OpenAI({
    apiKey: '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'
});

async function main() {
    try {
      const extractedText = await logExtractedText(); // Wait for the text extraction
      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [{
          role: "user",
          content: `Given the input text, which includes the content of a book along with additional information, your task is to extract and return only the structured content of the book. Please omit all extraneous information that does not directly pertain to the book's content itself. The text to be processed is as follows: ${extractedText}. Focus on maintaining the original structure and headings of the book's content for clarity and ease of understanding.`
        }],
        temperature: 0.1,
        stream: true
      });
  
      let fullResponse = ''; // Initialize an empty string to accumulate the response
      for await (const chunk of stream) {
        // Assuming `chunk.choices[0]?.delta?.content` is the correct path to the response content
        let content = chunk.choices[0]?.delta?.content || "";
        fullResponse += content; // Accumulate the content into fullResponse
      }
      console.log(fullResponse);
      return fullResponse; // Optionally return the full response for further processing
    } catch (error) {
      console.error("Error in main function:", error);
    }
  }
  
main(); // Execute the main function

module.exports = main();

// Prompt:
// I provide you with text that contains Content of the book with some additional information and your task is to return just structured Content of the book without any other information. TEXT: ${contentText}`