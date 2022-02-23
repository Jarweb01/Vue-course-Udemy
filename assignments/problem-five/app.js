const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listIsVisible: true,
    }
  },
  computed: {
    buttonContent() {
      return this.listIsVisible ? 'Hide' : 'Show';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = '';
    },
    reverseListVisibilty() {
      this.listIsVisible = !this.listIsVisible;
    }
  }
});

app.mount('#assignment');