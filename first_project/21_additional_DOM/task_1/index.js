/*
Шаблон выпадающего списка:

<div class="select-dropdown select-dropdown--123">
   <button class="select-dropdown__button select-dropdown__button--123">
      <span class="select-dropdown select-dropdown--123">Выберите элемент</span>
   </button>
  <ul class="select-dropdown__list select-dropdown__list--123">
     <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
     <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
     <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
     <li class="select-dropdown__list-item" data-value="4">HTML</li>
     <li class="select-dropdown__list-item" data-value="5">CSS</li>
  </ul>
</div>
 */
const container = document.querySelector('.container');

const listItems = [
    {
        value: 1,
        text: 'JavaScript'
    },
    {
        value: 2,
        text: 'NodeJS'
    },
    {
        value: 3,
        text: 'ReactJS'
    },
    {
        value: 4,
        text: 'HTML'
    },
    {
        value: 5,
        text: 'CSS'
    }
]
class CustomSelect {
    constructor(id, options) {
        this.id = id;
        this.options = [...options];
    }



    render (container) {
        console.log(this.options)
        const selectDropdown = document.createElement('div');
        selectDropdown.className = `select-dropdown select-dropdown--${this.id}`;

        const selectDropdownButton = document.createElement('button');
        selectDropdownButton.className = `select-dropdown__button select-dropdown__button--${this.id}`;

        const selectDropdownSpan = document.createElement('span');
        selectDropdownSpan.className = `select-dropdown select-dropdown--${this.id}`;
        selectDropdownSpan.textContent = 'Выберите элемент';

        const selectDropdownList = document.createElement('ul');
        selectDropdownList.className = `select-dropdown__list select-dropdown__list--${this.id}`;

        const selectDropdownListItem = document.createElement('li');
        selectDropdownListItem.className = 'select-dropdown__list-item';
        selectDropdownListItem.dataset.value = '1';
        selectDropdownListItem.textContent = 'JavaScript';


        container.append(selectDropdown);
        selectDropdown.append(selectDropdownButton, selectDropdownList);
        selectDropdownButton.append(selectDropdownSpan);
        for (let i = 0; i <= this.options.length; i++) {
            let selectDropdownListItem = document.createElement('li');
            selectDropdownListItem.className = 'select-dropdown__list-item';
            selectDropdownListItem.dataset.value = `${this.options[i].value}`;
            selectDropdownListItem.textContent = `${this.options[i].text}`;
            selectDropdownList.append(selectDropdownListItem);
        }

    }





}





const newCustomSelect = new CustomSelect(123, listItems);
newCustomSelect.render(container)