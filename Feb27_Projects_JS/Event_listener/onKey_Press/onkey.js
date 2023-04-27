let inputBox = document.getElementById("input-box");
let display = document.getElementById("display");

// adding a keypress event listener to the inputbox
inputBox.addEventListener('keypreess', function(e){
    display.innerText = "You have pressed" + e.key;
})