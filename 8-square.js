// Get the first argument, which is the size of the square
const sizeArg = process.argv[2];

// Convert the argument to an integer
const size = Number(sizeArg);

// Check if the size is a valid number
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // If the size is a valid number, proceed to print the square
  // Check for non-positive size, as a square size should be positive
  if (size <= 0) {
    // For non-positive size, we can choose to print nothing or an empty line,
    // or handle it as an error. The prompt doesn't specify, so we'll just
    // not enter the loop, effectively printing nothing for size <= 0.
    // If an error message is desired for size <= 0, it would be added here.
  } else {
    // Outer loop for rows
    for (let i = 0; i < size; i++) {
      let row = "";
      // Inner loop for columns to build each row
      for (let j = 0; j < size; j++) {
        row += "X";
      }
      // Print the completed row
      console.log(row);
    }
  }
}