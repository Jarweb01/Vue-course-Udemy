const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vuelink: 'https://www.vuejs.org',
      dynamicId: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA
      return this.courseGoalB
    }
  }
});

app.mount('#user-goal');