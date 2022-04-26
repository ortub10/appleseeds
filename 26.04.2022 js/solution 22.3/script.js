const number = Math.floor(Math.random() * 26 + 97);
const letersToGuess = String.fromCharCode(number);
const letterHide = document.getElementById("letter_hide");
const lettersGuessed = document.getElementById("letters_guessed");
const message = document.getElementById("message");
const h2 = document.querySelector("h2");
const lettersGuessedArr = [];
let isOn = true;
window.document.addEventListener("keypress", (event) => {
  if (isOn) {
    const letterOfUser = event.key;
    if (
      (letterOfUser.charCodeAt() < 97 || letterOfUser.charCodeAt() > 122) &&
      (letterOfUser.charCodeAt() < 65 || letterOfUser.charCodeAt() > 90)
    ) {
      message.style.color = "red";
      message.innerText = "Please enter a valid letter";
    } else if (letterOfUser.toLocaleLowerCase() !== letersToGuess) {
      message.style.color = "red";
      if (lettersGuessedArr.includes(letterOfUser)) {
        message.innerText = `${letterOfUser} has already been guessed`;
      } else {
        message.innerText = "Nope, wrong letter";
        lettersGuessedArr.push(letterOfUser);
        lettersGuessed.innerText = lettersGuessedArr.join(",");
      }
    } else if (letterOfUser.toLocaleLowerCase() === letersToGuess) {
      letterHide.innerText = letterOfUser;
      message.style.color = "green";
      message.innerText = "Right letter";
      h2.innerText = "Would you like to play again?";
      lettersGuessed.innerText = "";
      const btn = document.createElement("button");
      isOn = false;
      btn.innerText = "Yes";
      lettersGuessed.appendChild(btn);
      btn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
});
