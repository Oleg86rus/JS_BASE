import "../index.css";
import JS_IMAGE from '../assets/JS_IMAGE.jpeg';

console.log('hello world')

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;
document.body.append(jsImageHTML);