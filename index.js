// This is a sample function
function sampleFunction(a, b) {
  return a + b;
}

// Another function with a bug
function buggyFunction(list) {
  return list.map(item => item * 2);
}

// Call the functions
console.log(sampleFunction(5, 3));
console.log(buggyFunction([1, 2, '3', 4]));