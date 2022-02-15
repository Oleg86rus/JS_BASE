/*
Создайте функцию getFastestLoadedPhoto, которая принимает в себя 1 параметр ids, являющийся массивом параметров id у объекта photo. Чтобы получить информацию о фото, вам необходимо использовать следующий url (ссылка) (1 - это id фотографии). С помощью массива ids получите данные о фотографии, которая быстрее всего загрузилась при fetch запросе. Для решения поставленной задачи используйте Promise.race .

Для удобства необходимо добавить элемент span с текстом “Загрузка...” перед загрузкой фотографии, и спрятать этот элемент после загрузки данных.

Для создания HTML-элемента фотографии используйте данный шаблон:

<li class="photo-item">
   <img class="photo-item__image" src="https://via.placeholder.com/600/92c952">
   <h3 class="photo-item__title">
       accusamus beatae ad facilis cum similique qui sunt
   </h3>
</li>
В src у img должно быть подставлено значение свойства url у фотографии, а в тег h3 - значение свойства title. Добавляйте конечную фотографию в элемент с id равным “data-container”.
 */
const photoArr = [];
const URL = 'https://jsonplaceholder.typicode.com/photos';

const photoLoader = () => {
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

const dataContainer = document.querySelector('#data-container');
const createHTMLelement = (url, title) => {
    const photoItem = document.createElement('li');
    photoItem.className = 'photo-item';
    const photoItemImage = document.createElement('img');
    photoItemImage.className = 'photo-item__image';
    photoItemImage.src = url;
    const photoItemTitle = document.createElement('h3');
    photoItemTitle.className = 'photo-item__title';
    photoItemTitle.textContent = title;
    photoItem.append(photoItemImage, photoItemTitle);

    return photoItem;
}
// const getUsersByIds = (ids) => {
//     usersLoader();
//     const requests = ids.map((id) => fetch(`${URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((response) => response.json());
//             return Promise.all(dataResults);
//         })
//         .then((users) => {
//             console.log('todos: ', users);
//             users.forEach((user) => {
//                 const userHTML = createUserElement(user.name);
//                 dataContainer.append(userHTML);
//             })
//         })
//         .catch((error) => {
//             console.error('ОШИБКА - ERROR', error);
//         })
//         .finally(() => {
//             usersLoader();
//         })


// dataPushesInHTML
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Ошибка запроса!');
//         }
//         return response.json();
//     })
//     .then((todos) => {
//         console.log(todos);
//         todos.forEach((todo) => {
//             const todoHTML = createTodoElement(todo.name);
//             dataContainer.append(todoHTML);
//         })
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         toggleLoader();
//         console.log(toggleLoader());
//         console.log('finally');
//         toggleLoader();
//     });
// }
// getUsersByIds();
const getFastestLoadedPhoto = (ids) => {
    photoLoader();
    const dataCreatingHTML = fetch(URL, {
        method: 'GET'
    })
    console.log(dataCreatingHTML);


    dataCreatingHTML
        .then((response) => {
            if (!response.ok) {
                throw new Error('ОШИБКА');
            }
            return response.json();
        })
        .then((photoes) => {
            console.log(photoes)
            photoes.forEach((photo) => {
                console.log(photo);
                const photoHTML = createHTMLelement(photo);
                dataContainer.append(photoHTML);
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        })

    dataCreatingHTML.race
}
getFastestLoadedPhoto()