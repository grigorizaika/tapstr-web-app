<template>
  <b-container fluid id="userMainScreen">

      <div @click="toggleSidebar()" id="userImage"></div>
      <sidebar ref="sidebar"></sidebar>

      <transition name="fade" mode="out-in">
        <search-panel id="searchPanel" v-if="searchVisible" v-on:click.native="hideSidebar()" class="searchPanel"></search-panel>
      </transition>

      <google-map v-on:click.native="hideSidebar()" @mapZoomClose="removeSearch()" @mapZoomFar="displaySearch()" class="gMap" ref="gmap" name="example"></google-map>

      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>

  </b-container>
</template>

<script>
import SearchPanel from './Search.vue'
import GoogleMap from './Map.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'UserMainScreen',
  components: {
    SearchPanel,
    GoogleMap,
    Sidebar,
  },
  data: function () {
        return {
          visible: true,
          searchVisible : true,
          mapVisible: true,

        }
  },
  methods: {
    toggleSidebar: function() {
      this.$refs.sidebar.toggle();
    },
    hideSidebar: function() {
      this.$refs.sidebar.hide();
    },
    removeSearch: function() {
      /* TODO: replace with a transition later */
      this.searchVisible = false;
    },
    displaySearch: function() {
      /* TODO: replace with a transition later */
      this.searchVisible = true;
    }
  },

  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    if (toDepth > fromDepth) {

    }
    }
  }
};
</script>

<style>

#userMainScreen {
  width: 100%;
  /* TODO: Increasing height results in increasing margin-top. Don't know why. Figure it out.*/
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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
  background-image: url('https://tapstr-files.s3.eu-central-1.amazonaws.com/images/menu/avocado.jpg');
  background-size: cover;
  background-repeat: no-repeat;
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

#routerView {
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
    position: relative;
    z-index: 100;
    margin-left: auto;
    margin-right: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
