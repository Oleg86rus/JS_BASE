import { cookies } from "../core/cookies.js";

export function cookieConsent () {
    const divWithCookieConsent = document.querySelector('.cookie-consent');
    const cookieConsentButton = document.querySelector('.cookie-consent__button');
    let cookieAccept = cookies();
    console.log('cookies!', cookieAccept);
    if (cookieAccept === 'accept') {
        divWithCookieConsent.classList.add('hide');
    }
    localStorage.setItem('CookieAccept', cookieAccept)
    cookieConsentButton.addEventListener('click', () => {
        cookieAccept = 'accept';
        localStorage.setItem('CookieAccept', cookieAccept)
        console.log('Значение cookieInLocalStorage: ', cookies())
        if (cookieAccept === 'accept') {
            divWithCookieConsent.classList.add('hide');
        }
    })
}