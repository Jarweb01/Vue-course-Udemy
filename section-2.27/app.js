const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  computed: {
    fullname() {
      console.log('fullname')
      // if (this.name === '') return '';
      return this.name + ' ' + this.lastName;
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
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000)
      }
    }
  //   name(value) {
  //     if (value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
  }
});

app.mount('#events');
