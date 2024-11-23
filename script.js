// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Store the current expression
let currentExpression = '';

// Handle button click events
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            // Clear the display
            currentExpression = '';
            display.value = '';
        } else if (value === '=') {
            // Calculate the result
            try {
                currentExpression = eval(currentExpression).toString();
                display.value = currentExpression;
            } catch (error) {
                display.value = 'Error';
                currentExpression = '';
            }
        } else {
            // Append the clicked value to the expression
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});
