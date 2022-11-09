const app = Vue.createApp({
    data() {
        return {
            boxASeleceted: false,
            boxBSeleceted: false,
            boxCSeleceted: false,

        };


    },

    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASeleceted = !this.boxASeleceted;
            } else if (box === 'B'){
                this.boxBSeleceted = !this.boxBSeleceted;
            } else if (box === 'C') {
                this.boxCSeleceted = !this.boxCSeleceted;
            }


        },

    }
});

app.mount('#styling');