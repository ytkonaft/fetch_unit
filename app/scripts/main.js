// 1. Получить все посты  по урлу http://localhost:3000/posts
// 2. Отрисовать все посты в #app
//3. При нажатии на кнопку выводился id поста в консоль

//1. Получил данные всех постов
const postsURL = "http://localhost:3000/posts";

function sendRequest(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
function initPostsList() {
  sendRequest(postsURL).then(appendList);
}

function appendList(data) {
  const listNode = creatList(data);
  const app = document.getElementById("app");
  app.append(listNode);
}

function creatList(postsData) {
  //Функция которая возвращает div внутри которого будут лежать все посты.
  const list = document.createElement("div");
  postsData.forEach((post) => {
    list.append(createPost(post));
  });
  return list;
}

function createPost({ id, img, title, description, link, tags }) {
  const post = document.createElement("div");
  post.classList.add("post-item");

  const postImg = document.createElement("img");
  postImg.src = img;

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.innerHTML = title;

  const postTags = document.createElement("span");
  postTags.classList.add("post-tags");
  postTags.innerHTML = tags;

  const postText = document.createElement("p");
  postText.innerHTML = description;

  const postLink = document.createElement("a");
  postLink.href = link;
  postLink.innerHTML = "Link";

  const favoritBtn = document.createElement("button");
  favoritBtn.innerHTML = "Add to favorite";
  favoritBtn.classList.add("favorit-btn");

  favoritBtn.addEventListener("click", () => {
    console.log(id);
  });

  post.append(postImg, postTitle, postTags, postText, postLink, favoritBtn);

  return post;
}

initPostsList();
