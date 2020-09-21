const app = Vue.createApp({
	data() {
		return {
			name: "Primo",
			age: 20,
            years: 5,
            link: "https://www.programwitherik.com/content/images/2017/01/87ow-1.png",
            inputElValue: "Vue Rocks!"
		};
	},
	methods: {
		outputName() {
			return this.name;
		},
		outputAge() {
			return this.age;
		},
		outputAgeInXYears() {
			return this.age + this.years;
		},
		outputFavouriteNumber() {
            return Math.random().toFixed(2);
        },
        outputLink() {
            return this.link;
        },
        setInputValue() {
            return this.inputElValue;
        }
	},
});

app.mount("#assignment");
