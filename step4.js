/*
const main = require('./step3');

async function logApiReturnedText() {
    try {
      const apiReturnedText = await main;
      return apiReturnedText;
    } catch (error) {
      console.error("Error accessing extracted text:", error);
    }
}

logApiReturnedText();

*/

// აქამდე ყველანაირად გამართულია კოდი






/*

let JsString = "Georgia has been a wine production site since 6,000 BC, being the earliest known location of winemaking in the world.[14][15] During the classical era, several kingdoms emerged in what is now Georgia, such as Colchis and Iberia. In the early 4th century, Georgians officially adopted Christianity, which contributed to the unification of early Georgian states. In the Middle Ages, the unified Kingdom of Georgia reached its Golden Age during the reign of King David IV and Queen Tamar. Thereafter, the kingdom declined and eventually disintegrated under the hegemony of various regional powers, including the Mongols, the Ottoman Empire, and various dynasties of Persia. In 1783, one of the Georgian kingdoms entered into an alliance with the Russian Empire but Russia reneged on its promises and instead proceeded to annex the territory of modern Georgia piece-by-piece against the wish of the local rulers.";


let SummarizerManager = require("node-summarizer").SummarizerManager;

let Summarizer = new SummarizerManager(JsString, 7);

let summary = Summarizer.getSummaryByFrequency().summary;

console.log(summary);

*/


const bookContent = {
    "Introduction": {
      "1.1": "A brief history of computing",
      "1.2": "What is computer science?",
      "1.3": "An overview of computer hardware",
      "1.4": "Algorithms",
      "1.5": "Stages in the programming process",
      "1.6": "Java and the object-oriented paradigm",
      "1.7": "Java and the World Wide Web"
    },
    "Programming by Example": {
      "2.1": "The “Hello World” program",
      "2.2": "Perspectives on the Programming Process",
      "2.3": "A program to add two numbers",
      "2.4": "Classes and objects"
    },
    "Expressions": {
      "3.1": "Primitive data types",
      "3.2": "Constants and variables",
      "3.3": "Operators and operands",
      "3.4": "Assignment statements",
      "3.5": "Programming idioms and patterns"
    },
    "Statement Forms": {
      "4.1": "Simple statements",
      "4.2": "Control statements",
      "4.3": "Boolean data",
      "4.4": "The if statement",
      "4.5": "The switch statement",
      "4.6": "The concept of iteration",
      "4.7": "The while statement",
      "4.8": "The for statement"
    },
    "Methods": {
      "5.1": "A quick overview of methods",
      "5.2": "Methods and the object-oriented paradigm",
      "5.3": "Writing your own methods",
      "5.4": "Mechanics of the method-calling process",
      "5.5": "Algorithmic methods"
    },
    "Objects and Classes": {
      "6.1": "Using the RandomGenerator class",
      "6.2": "Defining your own classes",
      "6.3": "Defining a class to represent rational numbers"
    },
    "The Object Memory Model": {
      "7.1": "The structure of memory",
      "7.2": "Allocation of memory to variables",
      "7.3": "Primitive types vs. objects",
      "7.4": "Linking objects together"
    },
    "Object-Oriented Graphics": {
      "8.1": "The acm.graphics model",
      "8.2": "The Graphics Class Hierarchy",
      "8.3": "Facilities available in the GraphicsProgram class",
      "8.4": "Animation and interactivity",
      "8.5": "Creating Compound Objects",
      "8.6": "Principles of good object-oriented design"
    },
    "Strings and Characters": {
      "9.1": "The principle of enumeration",
      "9.2": "Characters",
      "9.3": "Strings as an abstract idea",
      "9.4": "Using the methods in the String class"
    },
    "Arrays and ArrayLists": {
      "10.1": "Introduction to arrays",
      "10.2": "Internal representation of arrays",
      "10.3": "Passing arrays as parameters",
      "10.4": "The ArrayList class",
      "10.5": "Using arrays for tabulation",
      "10.6": "Initialization of arrays",
      "10.7": "Multidimensional arrays"
    },
    "Searching and Sorting": {
      "11.1": "Searching",
      "11.2": "Sorting"
    }
  };
  


  // Iterate over each chapter
for (const chapter in bookContent) {
  
    // Iterate over each subchapter within the chapter
    for (const subchapter in bookContent[chapter]) {
      console.log(`  Subchapter ${subchapter}: ${bookContent[chapter][subchapter]}`);
    }
  }
  