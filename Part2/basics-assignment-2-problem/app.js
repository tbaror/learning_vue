const app = Vue.createApp({
    data() {
        return {
        userInput: '',
        confirmedInput: ''
        
        
        };
    },

    methods: {

        confirmdInput() {
            this.confirmedInput  = this.userInput;
        },

        

        savInput(event){
            this.userInput = event.target.value;

        },

    

        

        showAlert () {
            alert('alert Triggered');
        }

    }

});

app.mount('#assignment')