let sum = document.getElementById("sum");

function randomNum() {
    let min = document.getElementById("inputMin").value;
    let max = document.getElementById("inputMax").value;
    min = Math.ceil(min);
    max = Math.floor(max);
    
    sum.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click", randomNum);