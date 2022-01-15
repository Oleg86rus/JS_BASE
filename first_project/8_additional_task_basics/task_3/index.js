let password = prompt('Введите пароль');
let i = 0;
let symbol = '';
let numberInPassword = false;
let lowerCaseInPassword = false;
let upperCaseInPassword = false;
if (password.length > 2 && password.length <= 20) {
    while (i < password.length) {
        symbol = password.charAt(i);
        if (!isNaN(symbol)) {
            numberInPassword = true;
        } else if (symbol === symbol.toUpperCase()) {
            upperCaseInPassword = true;
        } else {
            lowerCaseInPassword = true;
        }
        i++;
    }
    if (numberInPassword === true && lowerCaseInPassword === true && upperCaseInPassword === true) {
        alert('Пароль валидный. Добро пожаловать в аккаунт!')
    } else {
        alert('Пароль не удовлетворяет условиям');
    }
} else {
    alert('Пароль не удовлетворяет условиям');
}
