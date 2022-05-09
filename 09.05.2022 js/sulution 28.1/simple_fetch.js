const btn = document.querySelector("button");
const title = document.getElementById("title");
const text = document.getElementById("text");
btn.addEventListener("click", function () {
  fetch("https://api.jokes.one/jod")
    .then((response) => response.json())
    .then((data) => (data = data.contents.jokes[0]))
    .then((data) => {
      title.innerText = data.joke.title;
      text.innerText = data.joke.text;
    });
});
