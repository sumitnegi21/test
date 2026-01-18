const langchain = require('langchain');

// Simple calculator function
function calculate(operation, num1, num2) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Error: Unknown operation';
  }
}

// Example usage
console.log('Addition:', calculate('add', 5, 3));
console.log('Subtraction:', calculate('subtract', 5, 3));
console.log('Multiplication:', calculate('multiply', 5, 3));
console.log('Division:', calculate('divide', 5, 3));