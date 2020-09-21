const app = Vue.createApp({
	data() {
		return {
			courseGoal: "Finish the course and learn Vue!",
			vueLink: "https://vuejs.org/",
		};
	},
	methods: {
		outputGoal() {
			let outputMessage;
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				outputMessage = "Learn Vue!";
			} else {
				outputMessage = "Master Vue!";
			}
			return outputMessage;
		},
	},
});

app.mount("#user-goal");
