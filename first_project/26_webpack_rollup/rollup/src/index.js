import "../index.css";
import JS_IMAGE from '../assets/JS_IMAGE.jpeg';

console.log('hello world')

const container = document.createElement('div');
container.className = 'container';


const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

const titleHTML = document.createElement('h1');
titleHTML.className = 'love-js';
titleHTML.textContent = 'I love JavaScript';

document.body.append(container);
container.append(jsImageHTML, titleHTML);