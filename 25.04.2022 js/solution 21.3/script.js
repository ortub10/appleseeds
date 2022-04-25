const text = document.getElementById("textarea");
const btn = document.getElementById("ok_btn");
btn.addEventListener("click",()=>{
    if(text.value.replaceAll(" ","").length<100){
        alert(" enter at least 100 characters")
    }
    else{
        alert("The message has been received");
    }
})