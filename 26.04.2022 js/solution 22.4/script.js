const plyer1 = document.getElementById("player1-race");
const plyer2 = document.getElementById("player2-race");
const player1Option = plyer1.getElementsByTagName("td");
const player2Option = plyer2.getElementsByTagName("td");
const finsih1 = plyer1.querySelector(".finish");
const finsih2 = plyer2.querySelector(".finish");
const solution = document.getElementById("solution");
const btn = document.getElementById("btn");
let count1 = 0;
let count2 = 0;
let isWon = true;
window.document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight" || event.key === "Right") {
    player1Option[count1].setAttribute("class", "");
    if (count1 < player1Option.length - 1) count1++;
    player1Option[count1].setAttribute("class", "active");
    if (finsih1.getAttribute("class") === "active" && isWon) {
      solution.innerText = "player1 won!!";
      btn.style.display = "inline";
      isWon = false;
    }
  }
});

window.document.addEventListener("keyup", (event) => {
  if (event.key === "a") {
    player2Option[count2].setAttribute("class", "");
    if (count2 < player2Option.length - 1) count2++;
    player2Option[count2].setAttribute("class", "active");
    if (finsih2.getAttribute("class") === "active" && isWon) {
      solution.innerText = "player2 won!!";
      btn.style.display = "inline";
      isWon = false;
    }
  }
});

btn.addEventListener("click", () => {
  location.reload();
});
