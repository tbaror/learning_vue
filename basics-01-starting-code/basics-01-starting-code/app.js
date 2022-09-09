const app = Vue.createApp({
    data () {
        return {
            courseGoal: ' finish The course and learn Vue!',
            vueLink : 'https://vuejs.org'
        };
    }
});

app.mount('#user-goal');