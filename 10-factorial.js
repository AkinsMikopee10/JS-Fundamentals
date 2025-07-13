// Define the factorial function recursively
function factorial(n) {
  // Convert the input to a number.
  // This handles cases where 'n' might be a string from process.argv.
  const num = Number(n);

  // Base case 1: Factorial of NaN is 1 (as per requirement)
  // Also handles cases where num is 0 or 1, as 0! = 1 and 1! = 1.
  if (isNaN(num) || num === 0 || num === 1) {
    return 1;
  }

  // Base case 2: Factorial of negative numbers is typically undefined.
  // For this problem, we'll follow the common convention or treat it like NaN if not specified,
  // but a simple recursive definition usually assumes non-negative integers.
  // If a negative number is passed, the recursion will go to -Infinity.
  // A common approach is to return 1 or handle it as an error.
  // Given "Factorial of NaN is 1", it implies a lenient handling.
  // For simplicity and to match common factorial behavior for positive integers,
  // we'll assume positive integer input or rely on the NaN/0/1 base case.
  // If num is negative, the recursion will not terminate positively with this definition.
  // Let's add a check for negative numbers to return 1 as well, aligning with NaN.
  if (num < 0) {
    return 1;
  }

  // Recursive step: n * factorial(n - 1)
  return num * factorial(num - 1);
}

// Get the first argument from the command line
const inputArg = process.argv[2];

// Compute the factorial and print the result
console.log(factorial(inputArg));