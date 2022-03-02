console.log(Number('-'))
console.log(Boolean('1'))
const a = '111 ';
function validatePIN (pin) {
    let validate = true
    if (pin.length === 4 || pin.length === 6) {
        const pinArr = pin.split('');
        pinArr.forEach((el) => {
            console.log(el)
            if (Boolean(el)) {
                validate = false
                console.log(validate)
            }
        })
    } else {
        validate = false
    }

    console.log(validate)
    return validate;
}
console.log(validatePIN(a))