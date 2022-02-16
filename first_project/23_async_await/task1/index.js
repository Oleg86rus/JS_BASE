//
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = () => {
// isLoading = true;
// fetch(POSTS_URL, {
//   method: 'POST',
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log('result', result)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })
//   .finally(() => {
//     isLoading = false;
//   });
// };
// createNewPost();


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
async function createNewPost() {
    try {
        isLoading = true;
        const response = await fetch(POSTS_URL, {method: "POST"});
        const data = await response.json();
        console.log('Data: ', data);
    } catch (error) {
        console.error('ОШИБКА!!!')
    } finally {
        isLoading = false;
    }
}
createNewPost();