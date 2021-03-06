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
// const tasks = [
//     {
//         id: '1138465078061',
//         completed: false,
//         text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//         id: '1138465078062',
//         completed: false,
//         text: 'Выполнить тест после урока',
//     },
//     {
//         id: '1138465078063',
//         completed: false,
//         text: 'Выполнить ДЗ после урока',
//     },
// ]
// const getRandomNumber = function getRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min)) + min;
// }
// const numbersOfId = [];
// const textOfTasks = [];
// const divTasksList = document.querySelector('.tasks-list');
// const createTaskForm = document.querySelector('.create-task-block');
// const body = document.querySelector('body');
//
// tasks.forEach((obj) => {
//     numbersOfId.push(Number(obj.id));
//     console.log('Список всех Id: ', numbersOfId);
//     const divTaskItem = document.createElement('div');
//     divTaskItem.className = 'task-item';
//     divTaskItem.dataset.taskId = `${obj.id}`;
//
//     const divTaskItemMainContainer = document.createElement('div');
//     divTaskItemMainContainer.className = 'task-item__main-container';
//
//     const divTaskItemMainContent = document.createElement('div');
//     divTaskItemMainContent.className = 'task-item__main-content';
//
//     const formCheckbox = document.createElement('form');
//     formCheckbox.className = 'checkbox-form';
//
//     const inputCheckbox = document.createElement('input');
//     inputCheckbox.className = 'checkbox-form__checkbox';
//     inputCheckbox.type = 'checkbox';
//     inputCheckbox.id = `task-${obj.id}`;
//
//     const label = document.createElement('label');
//     label.htmlFor = `task-${obj.id}`;
//
//     const spanTaskItemText = document.createElement('span');
//     spanTaskItemText.className = 'task-item__text';
//     spanTaskItemText.innerHTML = `${obj.text}`;
//     textOfTasks.push(spanTaskItemText.innerHTML);
//
//     const buttonTaskItemDeleteButton = document.createElement('button');
//     buttonTaskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
//     buttonTaskItemDeleteButton.innerHTML = 'Удалить';
//
//     divTasksList.insertAdjacentElement('beforeend', divTaskItem);
//     divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
//     divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
//     divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
//     formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
//     formCheckbox.insertAdjacentElement('beforeend', label);
//     divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
//     divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
// })
// const checkTaskNameInputOnValidation = (value) => {
//     if (!value) {
//         return false;
//     }
//     return true;
// }
// const createTaskBlock = document.querySelector('.create-task-block');
// const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');
//
// taskNameInput.addEventListener('input', (event) => {
//     const { target } = event;
//     const { value } = target;
//
//     const isValid = checkTaskNameInputOnValidation(value);
//     const messageBlockFromDOM = document.querySelector('.error-message-block');
//
//     if (!isValid || textOfTasks.includes(value)) {
//         // messageBlockFromDOM.remove();
//         const newMessageBlock = document.createElement('span');
//         newMessageBlock.className = 'error-message-block';
//         newMessageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!';
//         createTaskBlock.append(newMessageBlock);
//     } else if (isValid && messageBlockFromDOM) {
//         messageBlockFromDOM.remove();
//     }
// })
//
// createTaskForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const { target } = event;
//     const taskNameInput = target.taskName;
//     const inputValue = taskNameInput.value;
//     console.log(textOfTasks);
//     console.log(inputValue);
//     if (inputValue && !textOfTasks.includes(inputValue)) {
//         const errorByCreateElement = document.querySelector('.error-message-block');
//         if (errorByCreateElement) {
//             errorByCreateElement.remove();
//         }
//         let randomNumber = getRandomNumber(1111111111111, 9999999999999);
//         if (numbersOfId.includes(randomNumber)) {
//             randomNumber = getRandomNumber(1111111111111, 9999999999999);
//         }
//         const divTaskItem = document.createElement('div');
//         divTaskItem.className = 'task-item';
//         divTaskItem.dataset.taskId = `${randomNumber}`;
//
//         const divTaskItemMainContainer = document.createElement('div');
//         divTaskItemMainContainer.className = 'task-item__main-container';
//
//         const divTaskItemMainContent = document.createElement('div');
//         divTaskItemMainContent.className = 'task-item__main-content';
//
//         const formCheckbox = document.createElement('form');
//         formCheckbox.className = 'checkbox-form';
//
//         const inputCheckbox = document.createElement('input');
//         inputCheckbox.className = 'checkbox-form__checkbox';
//         inputCheckbox.type = 'checkbox';
//         inputCheckbox.id = `task-${randomNumber}`;
//
//         const label = document.createElement('label');
//         label.htmlFor = `task-${randomNumber}`;
//
//         const spanTaskItemText = document.createElement('span');
//         spanTaskItemText.className = 'task-item__text';
//         spanTaskItemText.innerHTML = `${inputValue}`;
//         textOfTasks.push(spanTaskItemText.innerHTML);
//
//         const buttonTaskItemDeleteButton = document.createElement('button');
//         buttonTaskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
//         buttonTaskItemDeleteButton.innerHTML = 'Удалить';
//
//         divTasksList.insertAdjacentElement('beforeend', divTaskItem);
//         divTaskItem.insertAdjacentElement('afterbegin', divTaskItemMainContainer);
//         divTaskItemMainContainer.insertAdjacentElement('afterbegin', divTaskItemMainContent);
//         divTaskItemMainContent.insertAdjacentElement('afterbegin', formCheckbox);
//         formCheckbox.insertAdjacentElement('afterbegin', inputCheckbox);
//         formCheckbox.insertAdjacentElement('beforeend', label);
//         divTaskItemMainContent.insertAdjacentElement('beforeend', spanTaskItemText);
//         divTaskItemMainContainer.insertAdjacentElement('beforeend', buttonTaskItemDeleteButton);
//     } else if (!inputValue){
//         const errorByCreateElement = document.querySelector('.error-message-block');
//         if (errorByCreateElement) {
//             errorByCreateElement.remove();
//         }
//         const searchErorEpmty = document.querySelector('.errorEmpty');
//         if (!searchErorEpmty) {
//             const errorSpan = document.createElement('span');
//             errorSpan.className = 'error-message-block errorEmpty';
//             errorSpan.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!`;
//             createTaskForm.append(errorSpan);
//             console.log(`Название задачи не должно быть пустым! Введите задачу корректно!`);
//         }
//
//     } else if (textOfTasks.includes(inputValue)) {
//         const errorByCreateElement = document.querySelector('.error-message-block');
//         if (errorByCreateElement) {
//             errorByCreateElement.remove();
//         }
//         const searchErrorDouble = document.querySelector('.errorDouble');
//         if (!searchErrorDouble) {
//             const errorSpan = document.createElement('span');
//             errorSpan.className = 'error-message-block errorDouble';
//             errorSpan.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен дублироваться!`;
//             createTaskForm.append(errorSpan);
//             console.log(`Задача с таким названием уже существует! Исключите повторы!`);
//         }
//     }
// })
// //создание окна с подтверждением удаления задачи
// const divDeleteTaskModalOverlay = document.createElement('div');
// divDeleteTaskModalOverlay.className = 'modal-overlay modal-overlay_hidden';
// const divDeleteModal = document.createElement('div');
// divDeleteModal.className = 'delete-modal';
// const h3DeleteModalQuestion = document.createElement('h3');
// h3DeleteModalQuestion.className = 'delete-modal__question';
// h3DeleteModalQuestion.textContent = 'Вы действительно хотите удалить задачу?';
// const divDeleteModalButtons = document.createElement('div');
// divDeleteModalButtons.className = 'delete-modal__buttons';
// const DeleteModalButtonConfirm = document.createElement('button');
// DeleteModalButtonConfirm.className = 'delete-modal__button delete-modal__confirm-button';
// DeleteModalButtonConfirm.textContent = 'Удалить';
// const DeleteModalButtonCancel = document.createElement('button');
// DeleteModalButtonCancel.className = 'delete-modal__button delete-modal__cancel-button';
// DeleteModalButtonCancel.textContent = 'Отмена';
// body.insertAdjacentElement('beforeend', divDeleteTaskModalOverlay);
// divDeleteTaskModalOverlay.insertAdjacentElement('afterbegin', divDeleteModal);
// divDeleteModal.insertAdjacentElement('afterbegin', h3DeleteModalQuestion);
// divDeleteModal.insertAdjacentElement('beforeend', divDeleteModalButtons);
// divDeleteModalButtons.insertAdjacentElement('afterbegin', DeleteModalButtonConfirm);
// divDeleteModalButtons.insertAdjacentElement('beforeend', DeleteModalButtonCancel);
//
// divTasksList.addEventListener('click', (event) => {
//     const targetDataTaskId = event.target.closest('.task-item');
//     console.log(targetDataTaskId.dataset.taskId);
//     console.log('target', event.target);
//     const isDeleteButton = event.target.closest('.task-item__delete-button');
//     console.log(isDeleteButton);
//     if (isDeleteButton) {
//         divDeleteTaskModalOverlay.classList.remove('modal-overlay_hidden');
//         divDeleteTaskModalOverlay.addEventListener('click', (event) => {
//             console.log('target', event.target);
//             const { target } = event;
//             console.log(target);
//             console.log(isDeleteButton);
//             if (target.textContent === 'Удалить') {
//                 divDeleteTaskModalOverlay.classList.add('modal-overlay_hidden');
//                 targetDataTaskId.remove();
//             } else if (target.textContent === 'Отмена'){
//                 divDeleteTaskModalOverlay.classList.add('modal-overlay_hidden');
//             }
//         })
//     }
// })


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

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.innerText = 'Удалить';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

    return taskItem;
}

const createErrorBlock = (errorMessage) => {
    const errorBlock = document.createElement('span');
    errorBlock.innerText = errorMessage;
    errorBlock.className = 'error-message-block';
    return errorBlock;
}

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskText = (event.target.taskName.value || '').trim();
    const isTaskExists = tasks.some((task) => task.text === newTaskText);
    const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block');

    if (!newTaskText) {
        const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
        createTaskForm.append(errorBlock);
    } else if (isTaskExists) {
        const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
        createTaskForm.append(errorBlock);
    } else if (newTaskText && !isTaskExists) {
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
        };
        console.log(newTask.id)
        tasks.push(newTask);
        const taskItem = createTaskItem(newTask.id, newTask.text);
        tasksListContainer.append(taskItem);
    }
    if (errorMessageBlockFromDOM) {
        errorMessageBlockFromDOM.remove();
    }
});

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});

const createDeleteModal = (text) => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay modal-overlay_hidden';

    const deleteModal = document.createElement('div');
    deleteModal.className = 'delete-modal';

    modalOverlay.append(deleteModal);

    const modalTitle = document.createElement('h3');
    modalTitle.className = 'delete-modal__question';
    modalTitle.innerText = text;
    const modalButtons = document.createElement('div');
    modalButtons.className = 'delete-modal__buttons';

    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.innerText = 'Отмена'
    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.innerText = 'Удалить';

    deleteModal.append(modalTitle, modalButtons);
    modalButtons.append(cancelButton, confirmButton);

    return {
        deleteModal,
        cancelButton,
        confirmButton,
        modalOverlay,
    };
}


let targetTaskIdToDelete = null;
const {
    deleteModal, cancelButton, confirmButton, modalOverlay,
} = createDeleteModal('Вы действительно хотите удалить эту задачу?');
document.body.prepend(modalOverlay);
cancelButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
});
console.log(targetTaskIdToDelete)
confirmButton.addEventListener('click', () => {
    const deleteIndex = tasks.findIndex((task) => {
        console.log(task.id)
        console.log(targetTaskIdToDelete)
        return task.id
    });
    console.log()
    console.log(deleteIndex);
    if (deleteIndex >= 0) {
        tasks.splice(deleteIndex, 1);
        const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
        taskItemHTML.remove();
        modalOverlay.classList.add('modal-overlay_hidden');
    }
});

const tasksList = document.querySelector('.tasks-list');
tasksList.addEventListener('click', (event) => {
    const { target } = event;
    const closestTarget = target.closest('.task-item__delete-button');
    if (closestTarget) {
        const closestTask = closestTarget.closest('.task-item');
        if (closestTask) {
            const taskId = closestTask.dataset.taskId;
            targetTaskIdToDelete = taskId;
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
    }
});