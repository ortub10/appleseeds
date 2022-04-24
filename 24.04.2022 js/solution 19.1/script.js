const li = document.querySelector("li.start-here")
li.innerText = "main title";
const newSubLi = document.createElement("li");
newSubLi.innerText = "sub title 4"
const ul = document.getElementsByTagName("ul")
const secondtUl = ul[1] 
secondtUl.append(newSubLi);
const firstUl = ul[0];
const removeMe = firstUl.lastElementChild;
firstUl.removeChild(removeMe);
const title = document.querySelector("title");
title.innerText = "Master Of The Dom";
const p = document.querySelector("p");
p.innerText = "Walcome to the world";

