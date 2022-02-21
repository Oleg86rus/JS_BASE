/*
<div id="post" class="post">
   <h1 class="post__title">Название Поста</h1>
   <p class="post__text">Текст Поста</p>
   <b class="post__comments-text">Комментарии</b>
   <div class="post__comments">
       <div class="post-comment">
           <span class="post-comment__author">
               maxim@gmail.com
           </span>
           <span class="post-comment__text">
               laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
               necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium
           </span>
       </div>
   </div>
</div>

Каждый класс отвечает за конкретную информацию:
“post__title” - значение свойства title у поста;
“post__text” - значение свойства body у поста;
“post-comment__author” значение свойства email у комментария;
“post-comment__text” значение свойства body у комментария;
 */

const URL = 'https://jsonplaceholder.typicode.com/posts';

const render = () => {
    const post = document.createElement('div');
    post.className = 'post';
    post.id = 'post';

    const postTitle = document.createElement('h1');

}
const renderPost = (id) => {
    const postId = fetch(`${URL}/${id}`);

}

