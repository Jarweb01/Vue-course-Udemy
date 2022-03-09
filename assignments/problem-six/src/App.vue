<template>
  <h1>Active user: </h1>
  <active-user
    :username="username"
    :age="age"
  ></active-user>
  <user-data
    @change-user="changeActiveUser"
  ></user-data>
</template>

<script>
  export default {
    data() {
      return {
        username: 'my username',
        age: '999',
      }
    },
    methods: {
      changeActiveUser(newName, newAge) {
        this.username = newName;
        this.age = newAge;
      }
    }
  }
</script>

<style>
#app {
  text-align: center;
}
</style>