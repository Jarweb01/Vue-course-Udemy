<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" :age="userAge" />
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Maximilian');
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 29,
    // });
    const uAge = ref(29);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], (newValues, oldValues) => {
      console.log('old age: ' + oldValues);
      console.log('new age: ', newValues);
    });

    const setNewAge = () => {
      uAge.value += 2;
    };

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    return {
      userAge: uAge,
      setAge: setNewAge,
      userName: uName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
