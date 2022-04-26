const checkbox = document.getElementById("checkbox");
const img = document.querySelector("img");
checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    img.style.display = "inline";
  } else {
    img.style.display = "none";
  }
});
