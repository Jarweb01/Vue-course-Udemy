const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  methods: {
    addFive () {
      this.result += 5;
    },
    addOne () {
      this.result += 1;
    }
  },
  computed: {
    isItRight() {
      if (this.result < 37) return "Not there yet";
      if (this.result > 37) return "Too much!";
      return this.result;
    }
  },
  watch: {
    isItRight() {
      setTimeout(() => {
        this.result = 0;
      }, 5000)
    }
  }
});

app.mount('#assignment');