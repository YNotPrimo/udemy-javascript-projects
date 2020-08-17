const defaultResult = 0;

function add(num1, num2){
    const result = num1 + num2;
    alert(`The result is ${result}`);    
    return result;
}

const additionaResult = add(1, 2);
add(5, 5);

let currResult = (defaultResult + 10) * 3 / 2 - 1;
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`

outputResult(currResult, calculationDescription);
