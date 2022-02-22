import { getRandomColor } from "./utils.js";

export default function initApp () {
    console.log('Hello World!');

    const buttonForChangeColor = document.createElement('button');
    buttonForChangeColor.className = 'button';
    buttonForChangeColor.textContent = 'Изменить цвет страницы';
    document.body.append(buttonForChangeColor);

    buttonForChangeColor.addEventListener('click', () => {
        document.body.style.background = `${getRandomColor()}`;
    })
}