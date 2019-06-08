<template>
  <div id="app">
    <user-main-screen ></user-main-screen>
  </div>
</template>

<script>

import UserMainScreen from './components/UserMainScreen.vue'

export default {
  name: 'app',
  components: {
    UserMainScreen,
  },
  data: () => ({
    message: "wzhhhh",
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;

}

body {
  padding: 0;
  margin: 0;
}

.bumblebee-yellow {
  color: #ffb101;
}

button {
    width: 250px;
    min-width: 100px;
    height: 40px;
    border-radius: 36px;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    margin: 4px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #ffffff;
    background: #ffb101;
    border-width: 0px;
    cursor: pointer;
    -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  }

button:focus {
    outline-color: #ffb101;
}

input { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    opacity: 0.9; /* Firefox */
    padding-left: 32px;
    border-width: 1px;
    transition: ease-in-out, width .35s ease-in-out;
    -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  }


::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    opacity: 0.5; /* Firefox */
}

::selection {
   background: #ffb101; /* WebKit/Blink Browsers */
}

.tapstr-input {
    height: 40px;
    border-radius: 36px;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    margin: 8px;
    min-width: 120px;
    resize: horizontal;
    width: 70%;
    overflow: hidden;

    box-sizing: border-box;
}

</style>
