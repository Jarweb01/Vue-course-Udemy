const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course!',
      vuelink: 'https://www.vuejs.org',
      dynamicId: 'https://vuejs.org'
    };
  }
});

app.mount('#user-goal');