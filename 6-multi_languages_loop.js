// Create an array of strings with the desired messages
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string to build our multi-line output
let outputString = "";

// Use a for loop to iterate over the array
for (let i = 0; i < messages.length; i++) {
  outputString += messages[i];
  // Add a newline character after each message, except for the last one
  if (i < messages.length - 1) {
    outputString += "\n";
  }
}

// Use only one console.log to print the accumulated string
console.log(outputString);