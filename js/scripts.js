//Business Logic
function translateBeepBoop(number) {
    const outputs = { 0: number, 1: "Beep!", 2: "Boop!", 3: "Won't you be my neighbor?" };
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

function getBeepBoopCountingArray(countToInteger) {
    let beepBoopArr = [];
    for (let i = 0; i <= countToInteger; i++) {
        beepBoopArr.push(translateBeepBoop(i));
    }
    return beepBoopArr;
}

//UI Logic
let previousCharInput = "";

function addLiElement(resultElement, value) {
    const liElement = document.createElement("li");
    liElement.append(value);
    resultElement.appendChild(liElement);
}

function removeChildren(element) {
    element.innerHTML = "";
}

function handleGenerateBeepBoop(countToElement, resultElement) {
    const beepBoopArr = getBeepBoopCountingArray(parseInt(countToElement.value));
    removeChildren(resultElement);
    beepBoopArr.forEach((value) => addLiElement(resultElement, value));
}

//Guarentees Integer input [1 - 999]
function handleCharInput() {
    this.value = /^$|^[1-9]\d{0,2}$/.test(this.value) ? this.value : previousCharInput;
    previousCharInput = this.value;
}

function initializeUILogic() {
    const countToElement = document.getElementById("count");
    const generateElement = document.getElementById("generate");
    const resultElement = document.getElementById("result");
    countToElement.addEventListener("input", handleCharInput);
    generateElement.addEventListener("click", () =>
        handleGenerateBeepBoop(countToElement, resultElement));
}

window.addEventListener("load", initializeUILogic);