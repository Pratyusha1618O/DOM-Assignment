//keydown event is fired when a key is pressed
//keyup event is fired when a key is released

let container = document.getElementById("container");
let display = document.getElementById("display");

//keydown
document.addEventListener("keydown", function(e){
    display.style.color= "red";
    display.innerText = e.key + "is keydown";
});
//keyup
document.addEventListener("keyup",function(e){
    display.style.color = "green";
    display.innerText = e.key +"is keyUp";
});