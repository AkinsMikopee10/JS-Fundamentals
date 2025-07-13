// process.argv[2] will be the first argument
// process.argv[3] will be the second argument

// Concatenate the arguments with " is " in between and print to console
// If an argument is missing, it will be 'undefined', which is handled correctly by JavaScript's string concatenation.
console.log(process.argv[2] + " is " + process.argv[3]);