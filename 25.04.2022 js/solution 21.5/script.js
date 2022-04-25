const input = document.getElementById("in");
const btnSub = document.getElementById("sub");
let smailes = document.getElementById("contain");
btnSub.addEventListener("click",()=>{
    let isCorrect = true;
    for(let i = 0; i<input.value.length &&isCorrect; i+=1){
        if(input.value.charCodeAt(i)>57 ||input.value.charCodeAt(i)<48){
            isCorrect = false;
        }
    }
    if(isCorrect){
    smailes.innerHTML = null;
        for(let i=0; i<+input.value; i+=1){
            const img = document.createElement("img");
            img.setAttribute("src","./smile.png");
            img.setAttribute("width","50px");
            img.setAttribute("higth","50px");
            img.style.margin = "5px"
            smailes.appendChild(img);
        }
    }else{
        alert("Enter only digits");
    }
});
input.addEventListener("focus",(event)=>{
    smailes.innerHTML = null
    input.value = "";
});