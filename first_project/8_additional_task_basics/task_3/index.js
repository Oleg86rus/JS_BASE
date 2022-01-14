let password = prompt('Введите пароль');
let i = 0;
let symbol = '';
let numberInPassword = false;
let lowerCaseInPassword = false;
if (password.length > 2 && password.length <= 20) {
    while (i < password.length) {
        symbol = password.charAt(i);
        if (!isNaN(symbol)) {
            numberInPassword = true;
        } else {
            if (symbol === symbol.toUpperCase()) {
                lowerCaseInPassword = true;
            }
        }
        i++;
    }
    if (numberInPassword === true && lowerCaseInPassword === true) {
        alert('Пароль валидный')
    } else {
        alert('Пароль не удовлетворяет условиям');
    }
} else {
    alert('Пароль не удовлетворяет условиям');
}
