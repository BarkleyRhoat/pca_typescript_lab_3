// Declare a variable called `input` that can be a string OR a number
// Set it to one of those values

const input: string | number = "hello"

// Write a function `toUpperOrFixed` that:
// - takes a single argument that is string | number
// - if it's a string, return the uppercase version
// - if it's a number, return the number as a string with 2 decimal places

function toUpperOrFixed(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value.toFixed(2)
}

// Example:
// toUpperOrFixed("hello") ➞ "HELLO"
// toUpperOrFixed(3.14159) ➞ "3.14"
