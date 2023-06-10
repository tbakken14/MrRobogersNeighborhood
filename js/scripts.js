//Business Logic
function translateBeepBoop(number) {
    const outputs = { 0: number, 1: "Beep!", 2: "Boop!", 3: "Won't you be my neighbor?" };
    let output = 0;
    while (number > 0) {
        let digit = number % 10;
        number = Math.floor(number / 10);
        console.log("hi")
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

function getBeepBoopCountingArray(countToInteger) {
    console.log(countToInteger.value);
    let beepBoopArr = [];
    for (let i = 0; i <= countToInteger; i++) {
        beepBoopArr.push(translateBeepBoop(i));
    }
    console.log(beepBoopArr.length);
    return beepBoopArr;
}

//UI Logic
function handleGenerateBeepBoop(countToElement) {
    const beepBoopArr = getBeepBoopCountingArray(parseInt(countToElement.value));
}

//Guarentees Integer input less than 1000
function handleCharInput(event) {
    prevInput = this.value.slice(0, -1);
    this.value = /[1-9][0-9]*$/.test(this.value) && this.value.length <= 3 ?
        + this.value : prevInput;
}

function InitializeUILogic() {
    const countToElement = document.getElementById("count");
    countToElement.addEventListener("input", handleCharInput);
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", (event) => handleGenerateBeepBoop(countToElement));
}

window.addEventListener("load", InitializeUILogic);