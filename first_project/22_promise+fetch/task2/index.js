/*
Вам необходимо создать функцию getUsersByIds, которая будет принимать массив с id пользователей. Вам нужно получить всех пользователей, у которых есть данные значения id. Используйте некоторый код из предыдущего задания и Promise.all для решения поставленной задачи.

Добавьте данные о имени каждого пользователя внутрь html-элемента с id равным “data-container” . Также для удобства необходимо добавить элемент span с текстом “Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

<li><a href="#">Имя пользователя</a></li>
 */

const URL = 'https://jsonplaceholder.typicode.com/users';
const usersLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
        console.log('загрузка добавлена')
    } else {
        loaderHTML.setAttribute('hidden', '');
        console.log('загрузка удалена');
    }

    return loaderHTML;
}

const usersIds = [5, 6, 2, 1];
const dataContainer = document.querySelector('#data-container');
const createUserElement = (text) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = text;
    userElement.append(userElementAnchor);

    return userElement;
}

const getUsersByIds = (ids) => {
    usersLoader();
    const requests = ids.map((id) => fetch(`${URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((users) => {
            console.log('todos: ', users);
            users.forEach((user) => {
                const userHTML = createUserElement(user.name);
                dataContainer.append(userHTML);
            })
        })
        .catch((error) => {
            console.error('ОШИБКА - ERROR', error);
        })
        .finally(() => {
            usersLoader();
        })
}
getUsersByIds(usersIds);