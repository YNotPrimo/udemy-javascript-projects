const app = Vue.createApp({
	data() {
		return {
			counter: +prompt("Enter initial number"),
		};
	},

	methods: {
		increment(n) {
			this.counter += n;
		},

		decrement(n) {
			this.counter -= n;
		},
	},
});

app.mount("#events");
