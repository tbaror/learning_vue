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
                this.boxASeleceted = true;
            } else if (box === 'B'){
                this.boxBSeleceted = true;
            } else if (box === 'C') {
                this.boxCSeleceted = true;
            }


        },

    }
});

app.mount('#styling');