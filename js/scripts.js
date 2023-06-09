//Business Logic

//UI Logic
function handleGenerateBeepBoop(countToInput) {
    console.log(countToInput.value);
}

function InitializeUILogic() {
    const countToInput = document.getElementById("count");
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", (event) => handleGenerateBeepBoop(countToInput));
}

window.addEventListener("load", InitializeUILogic);