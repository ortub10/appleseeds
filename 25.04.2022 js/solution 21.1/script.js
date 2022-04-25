const input = document.getElementById("input");
const btn = document.getElementById("btn");
const body = document.querySelector("body");
const pElement = document.createElement("p");
body.appendChild(pElement);
btn.addEventListener("click",()=>{
    let isCorrect = true;
    for(let i = 0; i<input.value.length && isCorrect; i+=1){
        if(input.value.charCodeAt(i)>57 ||input.value.charCodeAt(i)<48){
            isCorrect = false;
        }
    }
    if(!isCorrect){
        pElement.innerText = "Enter only digits please"
    } 
    else if(input.value>=18){
        pElement.innerText = "You can drink appear";
    }
    else{
        pElement.innerText = "You're too young";
    }
});