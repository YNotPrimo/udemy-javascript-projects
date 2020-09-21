Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		},
	},
}).mount("#app");

// const btnEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const ulListEl = document.querySelector("ul");

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement("li");
//     listItemEl.textContent = enteredValue;
//     ulListEl.appendChild(listItemEl);
//     inputEl.value = "";
// }

// btnEl.addEventListener("click", addGoal);
