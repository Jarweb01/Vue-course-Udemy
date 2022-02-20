const app = Vue.createApp({
  data() {
    return {
      customClass: '',
      computedCustomClass: '',
      paragraphVisible: true,
      customBackground: ''
    }
  },
  methods: {
    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    }
  },
  computed: {
    paragraphClasses () {
      return {visible: this.paragraphVisible, hidden: !this.paragraphVisible}
    }
  },
  watch: {
    customClass(value) {
      this.computedCustomClass = value;
    }
  }
});

app.mount('#assignment');