// Define the add function as specified
function add(a, b) {
  // Convert inputs to integers to ensure addition works numerically
  // If a or b are not numbers, Number() will return NaN.
  const num1 = Number(a);
  const num2 = Number(b);

  // Check if both conversions resulted in valid numbers
  // If either is NaN, the addition won't make sense, but the prompt
  // doesn't specify error handling for non-integer inputs.
  // JavaScript's addition with NaN will result in NaN, which is printed.
  return num1 + num2;
}

// Get the arguments from the command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the add function with the arguments and print the result
console.log(add(arg1, arg2));