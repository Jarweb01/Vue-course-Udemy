const app = Vue.createApp({
  data() {
    return {
      name: 'Gennadiy',
      yearOfBirth: 1996,
      urlOfImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    }
  },
  methods: {
    showMyAge () {
      date =  new Date().getFullYear();
      return date - this.yearOfBirth;
    },
    favouriteNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    }
  }
});

app.mount('#assignment');