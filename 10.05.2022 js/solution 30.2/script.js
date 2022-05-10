const movieInput = document.getElementById("input_name");
const search = document.getElementById("btn_search");
const cards = document.getElementById("cards");
async function addCard() {
  try {
    const detailes = await fetch(
      `http://www.omdbapi.com/?t=${movieInput.value}&apikey=2e25c92a`
    );
    const movie = await detailes.json();
    let text = "";
    for (let i = 1; i < movie.Ratings.length; i += 1) {
      text += movie.Ratings[i].Source + " : " + movie.Ratings[i].Value + "<br>";
    }
    if (movie.Title) {
      const card = `
        <div class="card">
          <img
            src="${movie.Poster}"
            alt="not found"
          />
          <h3>${movie.Title}</h3>
          <hr>
          <p>${movie.Genre}</p>
          <p>${movie.Year}</p>
          <p>${movie.Plot}</p>
          <p>${movie.Director}</p>
          <p>${movie.Actors}</p>
          <p> imdb : ${movie.Ratings[0].Value}</i </p>
          <p>${text}</i </p>
        </div>`;
      cards.innerHTML = card;
      movieInput.value = "";
    } else {
      alert("not found");
    }
  } catch {
    alert("something wrong!!");
  }
}

search.addEventListener("click", addCard);
window.document.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    addCard();
  }
});
