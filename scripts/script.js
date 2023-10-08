function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let result;
    try {
        result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
