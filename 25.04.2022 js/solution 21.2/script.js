const text = document.getElementById("header");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
let size = parseInt(getComputedStyle(text).fontSize);
minusBtn.addEventListener("click",()=>{
    if(size >6){
        size-=1;
        text.style.fontSize = `${size}px`; 
    }
});

plusBtn.addEventListener("click",()=>{
    if(size <100){
        size+=1;
        text.style.fontSize = `${size}px`; 
    }
});