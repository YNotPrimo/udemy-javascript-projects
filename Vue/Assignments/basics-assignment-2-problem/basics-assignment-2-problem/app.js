const app = Vue.createApp({
    data() {
        return {
            userInput: "",
        }
    },

    methods: {
        showAlert() {
            alert("Alerting!");
        },

        registerUserInput(event){
            this.userInput = event.target.value;
        },

    }
});


app.mount("#assignment")