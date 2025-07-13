// Get the first argument passed to the script
const firstArg = process.argv[2];

// Convert the first argument to an integer
// The Number() constructor can convert various types to numbers.
// If the conversion results in NaN (Not-a-Number), it means it's not a valid integer.
const myNumber = Number(firstArg);

// Check if the converted number is Not-a-Number (NaN)
// isNaN() function checks if a value is NaN.
if (isNaN(myNumber)) {
  // If the argument cannot be converted to an integer
  console.log("Not a number");
} else {
  // If the argument can be converted to an integer
  console.log("My number: " + myNumber);
}