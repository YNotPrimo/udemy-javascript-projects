const button = document.querySelector("button");

const buttonClickHandler = event => {
	// event.target.disabled = true;
	console.log(event);
};

const anotherButtonClickHandler = () => {
	console.log("Clicked");
};

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", boundFn);

// setTimeout(() => {
// 	button.removeEventListener("click", boundFn);
// }, 2000);

// buttons.forEach(btn => {
// 	btn.addEventListener("mouseenter", buttonClickHandler);
// })

// window.addEventListener("")

const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
	console.log(event);
});

const div = document.querySelector("div");

div.addEventListener(
	"mouseenter",
	event => {
		console.log("Clicked div");
		console.log(event);
	},
	true
);

button.addEventListener("mouseenter", event => {
	event.stopPropagation();
	console.log("Clicked button");
	console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(item => {
// 	item.addEventListener("click", event => {
// 		event.target.classList.toggle("highligh");
// 	});
// });

list.addEventListener("click", event => {
	// event.target
	event.target.closest("li").classList.toggle("highlight");;
});
