const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.getElementById("button") as HTMLInputElement;

function add(a: number, b: number): number {
	return a + b;
}

let results: { res: number }[] = [];

buttonElement.addEventListener("click", () => {
	const num1 = +num1Input.value;
	const num2 = +num2Input.value;

	const result = add(num1, num2);

	const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
	};

	results.push(resultContainer);

	console.log(results);
});
