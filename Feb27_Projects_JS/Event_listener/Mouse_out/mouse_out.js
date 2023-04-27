const boxElement = document.getElementById("box");

//add a mouse event listenmer to the element
boxElement.addEventListener("mouseout", function(){
    alert("You left the safe zone 😐");
})