
const display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input!");
        clearDisplay();
    }
}

// Clear the display
function clearDisplay() {
    display.value = "";
}
