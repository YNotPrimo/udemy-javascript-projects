interface Greetable {
	name: string;
}

interface Printable {
	print(): void;
}

class User implements Greetable, Printable {
	// name: string;
	// private age: number;

	constructor(public name: string, private age: number) {}

	print(): void {
		console.log(this.name);
	}
}

class Admin extends User {
	constructor(name: string, age: number, private permissions: Array<string>) {
		super(name, age);
	}
}

const user = new User("Primo", 30);
console.log(user.name);

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.getElementById("button") as HTMLInputElement;

type PrintMode = "console" | "alert";
type ResultType = string | number;

enum OutputMode {
	CONSOLE,
	ALERT,
}

function printResult(result: ResultType, printMode: OutputMode) {
	if (printMode === OutputMode.CONSOLE) {
		console.log(result);
	} else {
		alert(result);
	}
}

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
		},
	};

	results.push(resultContainer);
	printResult(result, OutputMode.CONSOLE);
	printResult(result, OutputMode.ALERT);
	// console.log(results);
});

function logAndEcho<T>(val: T){
	console.log(val);
	return val;
}

logAndEcho<string>("Hi there");
