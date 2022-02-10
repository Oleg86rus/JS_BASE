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
const divTaskList = document.querySelector('.tasks-list');
const createTaskForm = document.querySelector('.create-task-block');


tasks.forEach((obj) => {
    numbersOfId.push(Number(obj.id))
    console.log('Список всех Id: ', numbersOfId)
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

    divTaskList.insertAdjacentElement('beforeend', divTaskItem);
    divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
    divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
    divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
    formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
    formCheckbox.insertAdjacentElement('beforeend', label);
    divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
    divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
})

createTaskForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const { target } = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;

    if (inputValue && !textOfTasks.includes(inputValue)) {
        const errorByCreateElement = document.querySelector('.errorByCreateElement');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        let randomNumber = getRandomNumber(1111111111111, 9999999999999);
        if (numbersOfId.includes(randomNumber)) {
            randomNumber = getRandomNumber(1111111111111, 9999999999999);
        }
        console.log(inputValue);
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

        divTaskList.insertAdjacentElement('beforeend', divTaskItem);
        divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
        divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
        divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
        formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
        formCheckbox.insertAdjacentElement('beforeend', label);
        divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
        divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
    } else if (!inputValue){
        const errorByCreateElement = document.querySelector('.errorByCreateElement');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        const searchErorEpmty = document.querySelector('.errorEmpty');
        if (!searchErorEpmty) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'errorByCreateElement errorEmpty';
            errorSpan.textContent = `Название задачи не должно быть пустым! Введите задачу корректно!`
            createTaskForm.append(errorSpan);
        }

    } else if (textOfTasks.includes(inputValue)) {
        const errorByCreateElement = document.querySelector('.errorByCreateElement');
        if (errorByCreateElement) {
            errorByCreateElement.remove();
        }
        const searchErrorDouble = document.querySelector('.errorDouble');
        if (!searchErrorDouble) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'errorByCreateElement errorDouble';
            errorSpan.textContent = `Задача с таким названием уже существует! Исключите повторы!`;
            createTaskForm.append(errorSpan);
        }
    }
})