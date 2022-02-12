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

class CustomSelect {
    constructor(id, options) {
        this.id = id;
        this.options = [...options];
    }

    render (container) {
        const findNameInOptions = this.options;
        container = document.querySelector('.container');
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
        this.options.forEach((el) => {
            console.log(el)
            let selectDropdownListItem = document.createElement('li');
            selectDropdownListItem.className = 'select-dropdown__list-item';
            selectDropdownListItem.dataset.value = `${el.value}`;
            selectDropdownListItem.textContent = `${el.text}`;
            selectDropdownList.append(selectDropdownListItem);
        })
        function addEventListenerInUl() {
            console.log(selectDropdownList)
            selectDropdownButton.addEventListener('click', () => {
                const searchClassInUl = [...selectDropdownList.classList];
                console.log(searchClassInUl)
                if (!searchClassInUl.includes('active')) {
                    selectDropdownList.classList.add('active');
                } else {
                    selectDropdownList.classList.remove('active');
                }
            })

        }
        addEventListenerInUl()

        function addEventListenerInLi() {
            console.log(selectDropdownListItem)
            const selectDropdownAllListItems = document.querySelectorAll('.select-dropdown__list-item')
            // selectDropdownButton.addEventListener('click', (event) => {
            //     // const { target } = event
            //     const selectDrodownLi = event.target.closest('.select-dropdown__list-item');
            //     // console.log(target)
            //     if (selectDrodownLi) {
            //         console.log('1')
            //     }
            //
            // })



        selectDropdownAllListItems.forEach((el) => {
            el.addEventListener('click', (event) => {
                console.log(el.dataset.value)
                const { target } = event;
                console.log(target.dataset.value, target.textContent)
                console.log(findNameInOptions)
                const newTextInButton = findNameInOptions.find((elem) => {
                    if (elem.value === Number(target.dataset.value)) {
                        return elem;
                    }
                })
                console.log(newTextInButton)
                selectDropdownSpan.textContent = newTextInButton.text;
                selectDropdownList.classList.remove('active');
            })
        })

        }
        addEventListenerInLi()

    }
}
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
const newCustomSelect = new CustomSelect(123, listItems);
newCustomSelect.render();


const select2 = new CustomSelect(222, listItems)
select2.render()
