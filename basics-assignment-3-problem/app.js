const app = Vue.createApp({
data() {
  return {
    counter: 0,
    resualts: ''

  };    
},

watch:{

    counter(value) {

        
          const that = this;
          setTimeout(function(){
            that.counter = 0;
  
          }, 5000);
          
        } 
      

},


computed: {

    resualt(){
        if (this.counter < 37) {
            // block of code to be executed if condition1 is true
            return this.resualts = 'Not There Yet' + ' ' +this.counter
          } else if (this.counter > 37) {
            // block of code to be executed if the condition1 is false and condition2 is true
            return this.resualts = 'To much'
          } else if ( this.counter === 37) {
            // block of code to be executed if the condition1 is false and condition2 is false
            return this.resualts = this.counter
          } else {
            return ''
          }

},
},
methods :{

    add(num) {
        this.counter = this.counter + num;
      },

}

});

app.mount('#assignment');