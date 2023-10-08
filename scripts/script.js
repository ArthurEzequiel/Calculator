function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const expression = document.getElementById('display').value;
    let result;
    try {
        result = eval(expression);
        if (result !== undefined) {
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = '';
        }
    } catch (error) {
        document.getElementById('display').value = '';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
