const image = document.getElementById("image");
let isOn = false;
image.addEventListener("click",()=>{
    if(isOn){
        image.src = "./off.gif";
        isOn = false;
    }
    else{
        image.src = "./on.gif";
        isOn = true;   
    }
});