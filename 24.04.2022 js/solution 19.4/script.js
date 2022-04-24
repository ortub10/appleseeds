const bodyHTML =
`
<div class="show_pic">
<p>Submit to see picture</p>
<button class="submit-pic">submit<br></button>
</div>
`;

const myFragment = document.createRange().createContextualFragment(bodyHTML);
document.body.appendChild(myFragment);
const div = document.querySelector("div.show_pic");
const img = document.createElement("img");
img.src = "./starWar.png";
img.style.width = "10rem";
const btnSubmit = document.querySelector('.submit-pic');
btnSubmit.addEventListener('click', () => {
div.append(img);
})