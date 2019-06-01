<template>
  <div id="userMainScreen">
    <div @click="toggleSidebar()" id="userImage"></div>
    <sidebar @registerClickedEvent ="this.showRegistration" ref="sidebar"></sidebar>
    <search-panel v-on:click.native="searchClicked()" class="searchPanel"></search-panel>
    <google-map v-on:click.native="mapClicked()"  class="gMap" ref="gmap"
  name="example"></google-map>
    <login-form @registerCloseEvent="this.hideRegistration" v-if="this.registerActive" class="loginForm"></login-form>
  </div>
</template>

<script>
import SearchPanel from './Search.vue'
import GoogleMap from './Map.vue'
import Sidebar from './Sidebar.vue'
import LoginForm from './Login.vue'

export default {
  name: 'UserMainScreen',
  components: {
    SearchPanel,
    GoogleMap,
    Sidebar,
    LoginForm,
  },
  data: function () {
        return {
          visible: true,
          searchEnabled : true,
          mapEnabled: true,
          registerActive: false,
        }
  },
  methods: {
    toggleSidebar: function() {
      this.$refs.sidebar.toggle();
      this.hideRegistration();
    },
    showRegistration: function() {
      this.toggleSidebar();
      this.registerActive = true;
    },
    hideRegistration: function() {
      this.registerActive = false;
    },
    searchClicked: function() {
      this.$refs.sidebar.hide();
    },
    mapClicked: function() {
      this.$refs.sidebar.hide();
      this.hideRegistration();
    }
  },


};
</script>

<style>

#userMainScreen {
  width: 100%;
  /* TODO: Increasing height results in increasing margin-top. Don't know why. Figure it out.*/
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center
}

#userImage {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  background: #ffffff;
  z-index: 99;
  left: 40px;
  top: 64px;
  background-image: url('../assets/images/user_icon.png');
  /* border-radius */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  /* box-shadow */
  -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
  -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
}

#userImage:hover {
  cursor: pointer;
}

.gMap {
  position: absolute;
  z-index: 98;
}

.searchPanel {
  position: absolute;
  z-index: 99;
  margin-left: auto;
  margin-right: auto;

}

.loginForm {
    position: absolute;
    z-index: 100;
    margin-left: auto;
    margin-right: auto;
}

</style>
