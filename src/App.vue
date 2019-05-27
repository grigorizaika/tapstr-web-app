<template>
  <div id="app">
    <login-form />
  </div>
</template>

<script>
import LoginForm from './components/Login.vue'

export default {
  name: 'app',
  components: {
    LoginForm
  },
  data: () => ({
    message: "wzhhhh",
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins|Righteous&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bumblebee-yellow {
  color: #ffb101;
}

button {
    width: 250px;
    height: 40px;
    border-radius: 36px;
    margin: 4px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #ffffff;

    border-width: 0px;
  }

input[type='text'] { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    opacity: 0.9; /* Firefox */
    padding-left: 32px;

    border-width: 1px;
  }

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    opacity: 0.5; /* Firefox */

}
</style>
