let counter =0;

document.getElementById("number").textContent = counter;

document.getElementById("reset").onclick = function() {
    counter = 0;
    document.getElementById("number").textContent = counter;
}

document.getElementById("increase").onclick = function() {
    counter = counter +1;
    document.getElementById("number").textContent = counter;
}

document.getElementById("decrease").onclick = function() {
    counter = counter -1;
    document.getElementById("number").textContent = counter;
}