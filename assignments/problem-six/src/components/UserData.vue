<template>
  <div>
    <form>
      <div>
        <label>Name</label>
        <input type="text" placeholder="name" v-model="enteredName">
      </div>
      <div>
        <label>Age</label>
        <input type="text" placeholder="age" v-model="enteredAge">
      </div>
      <div>
        <button @click.prevent="changeUser">Change user</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['change-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    }
  },
  methods: {
    changeUser() {
      this.$emit('change-user', this.enteredName, this.enteredAge);
      this.enteredName = '';
      this.enteredAge = '';
    }
  }

}
</script>

<style>

</style>