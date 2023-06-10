//Business Logic
function translateBeepBoop(currentCount) {
    return currentCount;
}

function getBeepBoopCountingArray(countTo) {
    for (let i = 0; i <= countTo; i++) {
        console.log(i);
    }
}

//UI Logic
function handleGenerateBeepBoop(countToInput) {
    console.log(countToInput.value);
}

//Guarentees Integer input less than 1000
function handleCharInput(event) {
    prevInput = this.value.slice(0, -1);
    this.value = /[1-9][0-9]*$/.test(this.value) && this.value.length <= 3 ?
        + this.value : prevInput;
}

function InitializeUILogic() {
    const countToInput = document.getElementById("count");
    countToInput.addEventListener("input", handleCharInput);
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", (event) => handleGenerateBeepBoop(countToInput));
}

window.addEventListener("load", InitializeUILogic);