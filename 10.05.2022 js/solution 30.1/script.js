const users = [];
const username = document.getElementById("input_name");
const search = document.getElementById("btn_search");
const cards = document.getElementById("cards");
async function addCard() {
  try {
    const detailes = await fetch(
      `https://api.github.com/users/${username.value}`
    );
    const user = await detailes.json();
    if (!user.message) {
      if (!users.includes(username.value)) {
        const card = `<a href="https://github.com/${username.value}" target = "_blank">
        <div class="card">
          <img
            src="${user.avatar_url}"
            alt="not found"
          />
          <h3>${user.name}</h3>
          <p>${user.public_repos}</p>
        </div>
      </a>`;
        cards.innerHTML += card;
        users.push(username.value);
        username.value = "";
      } else {
        alert("This card Exists");
      }
    } else {
      alert(user.message);
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
