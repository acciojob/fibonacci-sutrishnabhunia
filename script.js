function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Test the function
var num = 10; // Change this value to get the nth Fibonacci number you want
var result = fibonacci(num);
console.log("The " + num + "th Fibonacci number is: " + result);
