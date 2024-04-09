function appendToDisplay(value) {
    var display = document.getElementById('display');
    
    if (value === 'C') {
        display.value = '';
    } else if (value === '←') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        calculate();
    } else {
        if ('+-*/'.includes(value)) {
            var lastChar = display.value.slice(-1);
            if ('+-*/'.includes(lastChar)) {
                display.value = display.value.slice(0, -1) + value;
            } else {
                display.value += value;
            }
        } else {
            display.value += value;
        }
    }
}

function calculate() {
    var expression = document.getElementById('display').value;
    var display = document.getElementById('display');

    if (!expression.trim()) {
        display.value = '';
        return;
    }

    try {
        var result = eval(expression);
        if (isFinite(result)) {
            display.value = result;
            // Automatically clear the display field after displaying the result
            setTimeout(function() {
                display.value = '';
            }, 2000); // Adjust the timeout value as needed
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}
