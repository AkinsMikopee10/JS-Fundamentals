// Create an array of strings with the desired messages
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string to accumulate the messages
// 'let' is used as 'var' is disallowed.
let outputString = "";

// Use a for...of loop to iterate over each message in the array
for (const message of messages) {
  // Append the message followed by a newline character.
  // This will add an extra newline at the end, which we'll trim later.
  outputString += message + "\n";
}

// Use slice(0, -1) to remove the last character (the extra newline).
// This operation does not involve an 'if/else' statement explicitly in the code.
// Then, use only one console.log to print the final accumulated string.
console.log(outputString.slice(0, -1));