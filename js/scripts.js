//Business Logic
function translateBeepBoop(number) {
    const outputs = { 0: number, 1: "Beep!", 2: "Boop!", 3: "Let me be your neighbor!" };
    let output = 0;
    while (number > 0) {
        let digit = number % 10;
        number = Math.floor(number / 10);
        if (digit === 3) {
            output = 3;
            break;
        }
        else if (digit === 2 && output < 2) {
            output = 2;
        }
        else if (digit === 1 && output < 1) {
            output = 1;
        }
    }
    return outputs[output];
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