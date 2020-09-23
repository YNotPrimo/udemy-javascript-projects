const app = Vue.createApp({
	data() {
		return {
      counter: +prompt("Enter initial number"),
      name: "",
      confirmedName: "",
		};
	},

	methods: {
		increment(n) {
			this.counter += n;
		},

		decrement(n) {
			this.counter -= n;
    },
    
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },

    confirmInput(){
      this.confirmedName = this.name;
    },

    submitForm() {
      alert("Submitted!");
    },
	},
});

app.mount("#events");
