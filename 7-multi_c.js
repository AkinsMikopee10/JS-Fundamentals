// Get the first argument passed to the script
const firstArg = process.argv[2];

// Convert the first argument to an integer
const x = Number(firstArg);

// Check if x is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Use a loop to print "C is fun" x times
  // We are allowed to use two console.log calls in total.
  // One for the error message, and one for the loop output.
  // Since we are inside the 'else' block, this is the second allowed console.log.
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}