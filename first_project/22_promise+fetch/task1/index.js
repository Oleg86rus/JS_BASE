/*
Вам необходимо получить всех пользователей с помощью fetch и добавить данные о имени каждого пользователя внутрь html-элемента с id равным “data-container”.

Для удобства необходимо добавить элемент span с текстом “Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

<li><a href="#">Имя пользователя</a></li>
 */


const URL = 'https://jsonplaceholder.typicode.com/users';

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
        console.log('Показали загрузчик');
    } else {
        loaderHTML.setAttribute('hidden', '');
        console.log('Удалили загрузчик');
    }
    return loaderHTML;
}

const dataContainer = document.querySelector('#data-container');

const getAllTodos = () => {
    toggleLoader();
    const dataPushesInHTML = fetch(URL, {
        method: 'GET',
    });
    console.log(dataPushesInHTML);

    dataPushesInHTML
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка запроса!');
            }
            return response.json();
        })
        .then((todos) => {
            console.log(todos);
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.name);
                dataContainer.append(todoHTML);
            })
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
            console.log(toggleLoader());
            console.log('finally');
            toggleLoader();
        });
}

getAllTodos();