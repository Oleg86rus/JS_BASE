import { getDate } from "./get-date.js";
import {findingTotalAmount} from "./total-amount";
export function submitAmount() {
    const button = document.querySelector('.donate-form');
    button.addEventListener('submit', (event) => {
        event.preventDefault();
        const {target} = event;
        const donatesContainer = document.querySelector('.donates-container__donates');
        const donateItem = document.createElement('div');
        donateItem.className = 'donate-item';
        const date = getDate();
        donateItem.innerHTML =  `${date} - <b>${target.amount.value}$</b>`;
        donatesContainer.append(donateItem);
        findingTotalAmount();
    })
}