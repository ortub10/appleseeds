const btn = document.querySelector("button");
const title = document.getElementById("title");
const text = document.getElementById("text");
btn.addEventListener("click", async function () {
  try {
    const detailes = await fetch("https://api.jokes.one/jod");
    const obj = await detailes.json();
    const joke = obj.contents.jokes[0].joke;
    console.log(joke);
    title.innerText = joke.title;
    text.innerText = joke.text;
  } catch {
    alert("something wrong!!");
  }
});
