const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('fullname')
      if (this.name === '') return '';
      return this.name + '!'
    }
  },
  methods: {
    setName(event) {
      // this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
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
    },
    // outputFullName() {
    //   if (this.name === '') return '';
    //   return this.name + '!'
    // }
  }
});

app.mount('#events');
