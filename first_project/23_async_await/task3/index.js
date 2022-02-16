const url = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('#data-container');
const photoLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
        console.log('загрузка добавлена');
    } else {
        loaderHTML.setAttribute('hidden', '');
        console.log('загрузка удалена');
    }
    return loaderHTML;
}
const createHTMLelement = (albumName) => {
    const albumItem = document.createElement('li');
    albumItem.textContent = albumName;
    return albumItem;
}
async function renderAlbums() {
    try {
        await photoLoader();
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка в получении данных о альбоме!!!');
        }
        console.log(response);
        const result = await response.json();
        await console.log(result);
        result.forEach((obj) => {
            const htmlElement = createHTMLelement(obj.title);
            dataContainer.append(htmlElement);
        })
    } catch (error) {
        console.log(error);
    } finally {
        await photoLoader();
    }
}
renderAlbums()