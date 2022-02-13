const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter > 0) this.counter = this.counter - num;
    },
    setName(event, prefix) {
      this.name = prefix + ' ' + event.target.value
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
