<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few charachters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>

</template>

<script>
import ErrorAlert from './ErorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
        // alert('Input must not be empty!')
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>
