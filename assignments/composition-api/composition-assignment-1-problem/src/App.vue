<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalIsVisible">{{ myCourseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';

export default {
  data() {
    return {
      myCourseGoal: 'To master Vue!!!',
      goalIsVisible: true,
    };
  },
  methods: {
    toggleGoal() {
      this.goalIsVisible = !this.goalIsVisible;
    },
  },
  // setup() {
  //   const myCourseGoal = reactive({
  //     title: 'To master Vue!',
  //     goalIsVisible: true,
  //     toggleGoal: () => {
  //       myCourseGoal.goalIsVisible = !myCourseGoal.goalIsVisible;
  //     },
  //   });

  //   return { myCourseGoal };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
