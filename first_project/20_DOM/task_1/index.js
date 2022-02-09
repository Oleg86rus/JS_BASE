/*
Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговый элементы внутрь тега body.

Решите задачу 2-мя способами:

через innerHTML;
через document.createElement.
 */
const tasks = document.querySelector('#tasks');

const form = document.createElement('form');
form.className = 'create-user-form';

const firstLabel = document.createElement('label');
firstLabel.textContent = 'Имя';

const secondLabel = document.createElement('label');
secondLabel.textContent = 'Пароль';

const firstInput = document.createElement('input');
firstInput.type = 'text';
firstInput.name = 'userName';
firstInput.placeholder = 'Введите ваше имя';

const secondInput = document.createElement('input');
secondInput.type = 'password';
secondInput.name = 'password';
secondInput.placeholder = 'Придумайте пароль';
const buttonInForm = document.createElement('button');
buttonInForm.type = 'submit';
buttonInForm.textContent = 'Подтвердить';

tasks.insertAdjacentElement('afterend', form);
form.insertAdjacentElement('afterbegin', firstLabel);
firstLabel.insertAdjacentElement('beforeend', firstInput);
form.insertAdjacentElement('beforeend', secondLabel);
secondLabel.insertAdjacentElement('beforeend', secondInput)
secondLabel.insertAdjacentElement('afterend', buttonInForm);

firstLabel.innerHTML = '';
firstLabel.innerHTML =  'Имя: <input type="text" name="userName" placeholder="Введите ваше имя">'
secondLabel.innerHTML = '';
secondLabel.innerHTML = 'Пароль: <input type="password" name="password" placeholder="Придумайте Пароль">';
buttonInForm.innerHTML = '';
buttonInForm.innerHTML = 'Подтвердить';

form.innerHTML = '';
form.innerHTML = '<label>Имя<input type="text" name="userName" placeholder="Введите ваше имя"> </label><label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль"></label><button type="submit">Подтвердить</button>';