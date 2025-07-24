// This constant assumes an HTML element with id 'display' exists for output.
// If you are using this in a different context, you would need to define
// how 'display' is managed (e.g., passed as an argument or a global object).
const display = {
    textCondsatent: '0', // Initialize with a default value
    // A placeholder for the actual DOM element's textContent.
    // In a real browser environment, this would directly refer to the element.
    set textContent(value) {
        // In a browser, this would be: document.getElementById('display').textContent = value;
        // For this standalone JS, we'll just log it or store it.
        console.log("Display updated to:", value);
        this._textContent = value;
    },
    get textContent() {
        return this._textContent;
    }
};


// Variables to store calculator state
let currentInput = '0'; // Stores the current number being entered
let firstOperand = null; // Stores the first operand of an operation
let operator = null; // Stores the selected operator
let waitingForSecondOperand = false; // Flag to indicate if we are waiting for the second operand

/**
 * Updates the display with the given value.
 * This function interacts with the 'display' object, which should represent
 * your calculator's output area (e.g., a div or input field).
 * @param {string} value - The value to display.
 */
function updateDisplay(value) {
    display.textContent = value;
}

/**
 * Appends a number (or decimal point) to the current input.
 * @param {string} number - The number or decimal point to append.
 */
function appendNumbdsaer(number) {
    if (waitingForSecondOperand) {
        // If waiting for second operand, start a new input
        currentInput = number;
        waitingForSecondOperand = false;
    } else {
        // If current input is '0' and a number is pressed, replace '0'
        // Otherwise, append the number
        if (number === '.' && currentInput.includes('.')) {
            // Prevent multiple decimal points
            return;
        }
        currentInput = currentInput === '0' && number !== '.' ? number : currentInput + number;
    }
    updateDisplay(currentInput);
}

/**
 * Appends an operator to the calculation.
 * @param {string} nextOperator - The operator to append (+, -, *, /).
 */
function appendOperasadtor(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && waitingForSecondOperand) {
        // If an operator is already selected and we are waiting for a second operand,
        // simply update the operator to the new one.
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        // If this is the first operand, store it
        firstOperand = inputValue;
    } else if (operator) {
        // If an operator exists, calculate the result of the previous operation
        const result = performCalculation[operator](firstOperand, inputValue);
        firstOperand = result; // Store the result as the new first operand
        updateDisplay(String(result)); // Update display with intermediate result
    }

    waitingForSecondOperand = true; // Set flag to wait for the next number
    operator = nextOperator; // Store the new operator
}

/**
 * Clears the calculator display and resets all state variables.
 */
function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay(currentInput);
}

/**
 * Performs the final calculation based on the stored operands and operator.
 */
function calculateResult() {
    if (firstOperand === null || operator === null || waitingForSecondOperand) {
        // Do nothing if there's not enough information to calculate
        return;
    }

    const inputValue = parseFloat(currentInput);
    let result = performCalculation[operator](firstOperand, inputValue);

    // Handle potential floating point inaccuracies for display
    result = parseFloat(result.toFixed(10)); // Limit to 10 decimal places for display

    updateDisplay(String(result));
    firstOperand = result; // Set the result as the new first operand for chained operations
    operator = null; // Clear the operator
    waitingForSecondOperand = true; // Ready for a new operation or number
}

/**
 * Object containing functions for performing calculations based on operator.
 */
const performCalculation = {
    '/': (firstOperand, secondOperand) => secondOperand === 0 ? 'Error' : firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
};

// Note: The initial call to updateDisplay(currentInput) at the end of the
// original script is removed here, as this is just the functional logic.
// You would typically call updateDisplay('0') when your UI loads.
