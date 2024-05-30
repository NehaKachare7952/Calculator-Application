document.addEventListener('DOMContentLoaded', function () {
    // Ensures that the script runs only after the HTML has fully loaded
    const display = document.getElementById('display');
    // display is the input box where the result is shown.
    const buttons = document.querySelectorAll('button');
    // buttons selects all the buttons within the calculator.
    buttons.forEach(button => {
        // Iterates over each button and attaches a click event listener.
        button.addEventListener('click', () => {
            // Defines what happens when a button is clicked
            const value = button.getAttribute('data-value');
            // retrieves the value assigned to the button.
            if (value === 'C') {
                display.value = '';
                // Clears the display.
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
                // Removes the last character from the display
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                // Evaluates the expression using eval(). If an error occurs, it displays "Error"

            } else if (value !== '@') { // ignoring '@' button
                display.value += value;
                // Adds the value to the display if it's not the '@' button.
            }
        });
    });
});
