const app = Vue.createApp({
  data () {
    return {
      firstOutput: '',
      secondOutput: '',
    }
  },
  methods: {
    showAlert() {
      alert('There is an alert! Hi ;)');
    },
    outputByKeydown(event) {
      this.firstOutput = event.target.value;
    },
    outputByEnterKey(event) {
      this.secondOutput = event.target.value;
    }
  }
});

app.mount('#assignment');