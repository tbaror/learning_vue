const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  computed :{

    fullname (){
      console.log('Runing again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Baror';

    },
   

  },
  methods: {
    
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
