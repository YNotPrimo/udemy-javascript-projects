var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var buttonElement = document.getElementById("button");
function add(a, b) {
    return a + b;
}
buttonElement.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    console.log(result);
});
