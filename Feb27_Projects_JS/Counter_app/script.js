const decrement= document.getElementById("decrement");
const number= document.getElementById("number");
const increment= document.getElementById("increment");
const reset= document.getElementById("reset");

// for decrement button click
decrement.addEventListener("click", () => {
    const value=Number(number.innerText);
    if(value>0){
        number.innerText = value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

// for increment button click
increment.addEventListener("click", () =>{
    const value=Number(number.innerText);
    if(value >= 10){
        alert("10+ value not allowed");
    }
    else{
        number.innerText = value+1;
    }
});

// for reset button click
reset.addEventListener("click", ()=>{
    number.innerText=0;
});