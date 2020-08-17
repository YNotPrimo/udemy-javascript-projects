const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput() {
    return parseInt(userInput.value)
}

function createAndWriteLog(op, resultBefore, calcNum) {
    const calcDescription = `${resultBefore} ${op} ${calcNum}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult += userInputValue;
    createAndWriteLog("+", initResult, userInputValue)
}

function subtract() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult -= userInputValue;
    createAndWriteLog("-", initResult, userInputValue)
}

function multiply() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult *= userInputValue;
    createAndWriteLog("*", initResult, userInputValue)
}

function divide() {
    const userInputValue = getUserInput();
    const initResult = currentResult;
    currentResult /= userInputValue;
    createAndWriteLog("/", initResult, userInputValue)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
