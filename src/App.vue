<template>
  <div id="app">
    <user-main-screen></user-main-screen>
    <div id="routerViewBox">
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
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
  width: 100vw;
  min-height: 100vh;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;

}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    opacity: 0.5; /* Firefox */
}

::selection {
   background: #ffb101 !important; /* WebKit/Blink Browsers */
}

#routerViewBox {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
