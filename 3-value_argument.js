// Check if the first argument (at index 2) exists
// If process.argv[2] is undefined, it means no argument was passed.
if (process.argv[2] === undefined) {
  // If no arguments are passed to the script
  console.log("No argument");
} else {
  // If an argument is passed, print the first argument
  console.log(process.argv[2]);
}