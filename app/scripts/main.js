// 1. Получить все посты  по урлу http://localhost:3000/posts
// 2. Отрисовать все посты в #app

const postsURL = "http://localhost:3000/posts";

function sendRequest(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
sendRequest(postsURL).then((data) => console.log(data));
