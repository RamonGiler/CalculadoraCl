function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Por favor, ingresa números válidos";
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            default:
                result = "Operación no válida";
        }
    }

    document.getElementById('result').value = result;
}
