// produces random number between 0 (including) and 1 (excluding)
const randomNumber = Math.random();

if (randomNumber > 0.7) {
  alert(`The number ${randomNumber} is bigger than 0.7`);
}

let numberArray = [1, 2, 3];

for (const number of numberArray) {
  console.log(number);
}

for (let i = numberArray.length; i > 0; i--) {
  console.log(numberArray[i]);
}

const anotherRandomNumber = Math.random();

if (anotherRandomNumber > 0.7 && randomNumber > 0.7) {
  alert("Both random numbers are greater than 0.7");
} else if (anotherRandomNumber < 0.2 || randomNumber < 0.2) {
  alert("One of the random numbers isn't greater than 0.2");
}
