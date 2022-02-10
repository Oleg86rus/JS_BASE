/*
<div class="task-item" data-task-id="1">
   <div class="task-item__main-container">
       <div class="task-item__main-content">
           <form class="checkbox-form">
               <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
               <label for="task-1"></label>
           </form>
           <span class="task-item__text">Посмотреть новый урок по JavaScript</span>
       </div>
       <button class="task-item__delete-button default-button
        delete-button" data-delete-task-id="5">Удалить</button>
   </div>
</div>
 */
//console.log(Date.now())    Пропустил, что можно было id получить через дату, оставил свою реализацию.
const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]
const getRandomNumber = function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
const numbersOfId = [];
const textOfTasks = [];
const divTasksList = document.querySelector('.tasks-list');
const createTaskForm = document.querySelector('.create-task-block');
const body = document.querySelector('body');


const changeTegBorder = function (el, color) {
    el.forEach(element => element.style.border = color);
}
const changeTegColor = function (el, color) {
    el.forEach(element => element.style.color = color);
}
const changeColorInLabel = function (el, property, color) {
    el.forEach((element) => {
        element.style.setProperty(property, color);
    })
}
tasks.forEach((obj) => {
    numbersOfId.push(Number(obj.id));
    console.log('Список всех Id: ', numbersOfId);
    const divTaskItem = document.createElement('div');
    divTaskItem.className = 'task-item';
    divTaskItem.dataset.taskId = `${obj.id}`;

    const divTaskItemMainContainer = document.createElement('div');
    divTaskItemMainContainer.className = 'task-item__main-container';

    const divTaskItemMainContent = document.createElement('div');
    divTaskItemMainContent.className = 'task-item__main-content';

    const formCheckbox = document.createElement('form');
    formCheckbox.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = 'checkbox-form__checkbox';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `task-${obj.id}`;

    const label = document.createElement('label');
    label.htmlFor = `task-${obj.id}`;

    const spanTaskItemText = document.createElement('span');
    spanTaskItemText.className = 'task-item__text';
    spanTaskItemText.innerHTML = `${obj.text}`;
    textOfTasks.push(spanTaskItemText.innerHTML);

    const buttonTaskItemDeleteButton = document.createElement('button');
    buttonTaskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
    buttonTaskItemDeleteButton.innerHTML = 'Удалить';

    divTasksList.insertAdjacentElement('beforeend', divTaskItem);
    divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
    divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
    divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
    formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
    formCheckbox.insertAdjacentElement('beforeend', label);
    divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
    divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
})
const checkTaskNameInputOnValidation = (value) => {
    if (!value) {
        return false;
    }
    return true;
}

const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('input', (event) => {
    const { target } = event;
    const { value } = target;

    const isValid = checkTaskNameInputOnValidation(value);
    const messageBlockFromDOM = document.querySelector('.error-message-block');

    if (!isValid || textOfTasks.includes(value)) {
        // messageBlockFromDOM.remove();
        const newMessageBlock = document.createElement('span');
        newMessageBlock.className = 'error-message-block';
        newMessageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!';
        createTaskBlock.append(newMessageBlock);
    } else if (isValid && messageBlockFromDOM) {
        messageBlockFromDOM.remove();
    }
})
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    console.log('Массик со списком задач: ', textOfTasks);
    console.log('Введенная задача: ', inputValue);
    if (inputValue && !textOfTasks.includes(inputValue)) {
        const errorByCreateElement = document.querySelector('.error-message-block');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        let randomNumber = getRandomNumber(1111111111111, 9999999999999);
        if (numbersOfId.includes(randomNumber)) {
            randomNumber = getRandomNumber(1111111111111, 9999999999999);
        }
        const divTaskItem = document.createElement('div');
        divTaskItem.className = 'task-item';
        divTaskItem.dataset.taskId = `${randomNumber}`;

        const divTaskItemMainContainer = document.createElement('div');
        divTaskItemMainContainer.className = 'task-item__main-container';

        const divTaskItemMainContent = document.createElement('div');
        divTaskItemMainContent.className = 'task-item__main-content';

        const formCheckbox = document.createElement('form');
        formCheckbox.className = 'checkbox-form';

        const inputCheckbox = document.createElement('input');
        inputCheckbox.className = 'checkbox-form__checkbox';
        inputCheckbox.type = 'checkbox';
        inputCheckbox.id = `task-${randomNumber}`;

        const label = document.createElement('label');
        label.htmlFor = `task-${randomNumber}`;

        const spanTaskItemText = document.createElement('span');
        spanTaskItemText.className = 'task-item__text';
        spanTaskItemText.innerHTML = `${inputValue}`;
        textOfTasks.push(spanTaskItemText.innerHTML);

        const buttonTaskItemDeleteButton = document.createElement('button');
        buttonTaskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
        buttonTaskItemDeleteButton.innerHTML = 'Удалить';

        divTasksList.insertAdjacentElement('beforeend', divTaskItem);
        divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
        divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
        divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
        formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
        formCheckbox.insertAdjacentElement('beforeend', label);
        divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
        divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
    } else if (!inputValue){
        const errorByCreateElement = document.querySelector('.error-message-block');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        const searchErorEpmty = document.querySelector('.errorEmpty');
        if (!searchErorEpmty) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'error-message-block errorEmpty';
            errorSpan.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!`;
            createTaskForm.append(errorSpan);
            console.log(`Название задачи не должно быть пустым! Введите задачу корректно!`);
            alert(`Название задачи не должно быть пустым! Введите задачу корректно!`);
        }

    } else if (textOfTasks.includes(inputValue)) {
        const errorByCreateElement = document.querySelector('.error-message-block');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        const searchErrorDouble = document.querySelector('.errorDouble');
        if (!searchErrorDouble) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'error-message-block errorDouble';
            errorSpan.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!`;
            createTaskForm.append(errorSpan);
            console.log(`Задача с таким названием уже существует! Исключите повторы!`);
            alert(`Задача с таким названием уже существует! Исключите повторы!`);
        }
    }
})
//создание окна с подтверждением удаления задачи
const divDeleteTaskModalOverlay = document.createElement('div');
divDeleteTaskModalOverlay.className = 'modal-overlay modal-overlay_hidden';
const divDeleteModal = document.createElement('div');
divDeleteModal.className = 'delete-modal';
const h3DeleteModalQuestion = document.createElement('h3');
h3DeleteModalQuestion.className = 'delete-modal__question';
h3DeleteModalQuestion.textContent = 'Вы действительно хотите удалить задачу?';
const divDeleteModalButtons = document.createElement('div');
divDeleteModalButtons.className = 'delete-modal__buttons';
const DeleteModalButtonConfirm = document.createElement('button');
DeleteModalButtonConfirm.className = 'delete-modal__button delete-modal__confirm-button';
DeleteModalButtonConfirm.textContent = 'Удалить';
const DeleteModalButtonCancel = document.createElement('button');
DeleteModalButtonCancel.className = 'delete-modal__button delete-modal__cancel-button';
DeleteModalButtonCancel.textContent = 'Отмена';
body.insertAdjacentElement('beforeend', divDeleteTaskModalOverlay);
divDeleteTaskModalOverlay.insertAdjacentElement('afterbegin', divDeleteModal);
divDeleteModal.insertAdjacentElement('afterbegin', h3DeleteModalQuestion);
divDeleteModal.insertAdjacentElement('beforeend', divDeleteModalButtons);
divDeleteModalButtons.insertAdjacentElement('afterbegin', DeleteModalButtonConfirm);
divDeleteModalButtons.insertAdjacentElement('beforeend', DeleteModalButtonCancel);

divTasksList.addEventListener('click', (event) => {
    const targetDataTaskId = event.target.closest('.task-item');
    console.log(targetDataTaskId.dataset.taskId);
    console.log('target', event.target);
    const isDeleteButton = event.target.closest('.task-item__delete-button');
    console.log(isDeleteButton);
    if (isDeleteButton) {
        divDeleteTaskModalOverlay.classList.remove('modal-overlay_hidden');
        divDeleteTaskModalOverlay.addEventListener('click', (event) => {
            console.log('target', event.target);
            const { target } = event;
            console.log(target);
            console.log(isDeleteButton);
            if (target.textContent === 'Удалить') {
                divDeleteTaskModalOverlay.classList.add('modal-overlay_hidden');
                targetDataTaskId.remove();
            } else if (target.textContent === 'Отмена'){
                divDeleteTaskModalOverlay.classList.add('modal-overlay_hidden');
            }
        })
    }
})
 const bodyColor = function () {
    const elColor = body.style.background;
    if (elColor === '' || elColor === 'initial') {
        return 'white';
    } else if (elColor === 'rgb(36, 41, 46)') {
        return 'black';
    }
}
bodyColor();
document.addEventListener('keydown', (event) => {
    bodyColor();
    // console.log(bodyColor());
    const { key } = event;
    // console.log(key);
    const taskItem = document.querySelectorAll('.task-item');
    const buttons = document.querySelectorAll('button');
    const borderOfLabel = document.querySelectorAll('label');

    if (key === 'Tab' && bodyColor() === 'white') {
        console.log(key);
        console.log('Вы нажали Tab, цветовая тема была изменена на черную!');
        body.style.background = '#24292E';
        changeTegColor(taskItem, '#ffffff');
        console.log(buttons);
        changeTegBorder(buttons,  '1px solid #ffffff');
        changeColorInLabel(borderOfLabel, '--checkbox-border-color', '#ffffff');
    }
    else if (key === 'Tab' && bodyColor() === 'black') {
        console.log(key);
        console.log('Вы нажали Tab, цветовая тема была изменена на белую!');
        body.style.background = 'initial';
        changeColorInLabel(borderOfLabel, '--checkbox-border-color', '#000');
        changeTegColor(taskItem, 'initial');
        changeTegBorder(buttons,  'none');
    }
})
