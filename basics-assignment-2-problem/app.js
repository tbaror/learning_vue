const app = Vue.createApp({
    data() {
        return {
        name: '',
        confirmedName: ''
        
        
        };
    },

    methods: {

        confirmedInput() {
            this.confirmedName  = this.name;
        },

        

        setName(event){
            this.name = event.target.value;

        },

    

        

        showAlert () {
            alert('alert Triggered');
        }

    }

});

app.mount('#assignment')