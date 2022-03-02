const person = {
    name: 'Oleg'
}

function info(phone, email) {
    console.log(`Имя: ${this.name}, Тел: ${phone}, Email: ${email}`);
}

info.bind(person)('12345', 'qwe@mail.ru')
info.bind(person, '12345')('qwe@mail.ru')
info.bind(person, '12345', 'qwe@mail.ru')()


info.call(person, '12345', 'qwe@mail.ru')
info.apply(person, ['12345', 'qwe@mail.ru'])

function bind(fn, context) {
    const rest = Array.prototype.slice.call(arguments, 2)
    return function () {
        const args = Array.prototype.slice.call(arguments)
        return fn.apply(context, rest.concat(args))
    }
}
bind(info, person)('12345', 'qwe@mail.ru')
bind(info, person, '12345')('qwe@mail.ru')
bind(info, person, '12345', 'qwe@mail.ru')()

function bind(fn, context, ...rest) {
    return function (...args) {
        //return fn.apply(context, rest.concat(args))
        return fn.call(context, ...rest.concat(args))
    }
}
bind(info, person)('12345', 'qwe@mail.ru')
bind(info, person, '12345')('qwe@mail.ru')
bind(info, person, '12345', 'qwe@mail.ru')()