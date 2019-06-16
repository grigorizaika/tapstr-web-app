<template>
  <b-container fluid id="userMainScreen" class="p-0 m-0">
      <sidebar ref="sidebar"></sidebar>
      <restaurant-sidebar></restaurant-sidebar>
      <google-map v-on:click.native="hideSidebar()" @mapZoomClose="removeSearch()" @mapZoomFar="displaySearch()" class="gMap" ref="gmap" name="example"></google-map>


      <b-row class="vh-100">

        <b-col cols="9">

          <b-row class="h-25 p-4">
            <b-col cols="2">
              <div @click="toggleSidebar()" id="userImage" class="mx-auto"></div>
            </b-col>
          </b-row>

          <b-row class="h-50 p-4">

            <b-col cols="6">
            </b-col>
            <b-col cols="5">
              <!--transition name="fade" mode="out-in">
                <search-panel id="searchPanel" v-if="searchVisible" v-on:click.native="hideSidebar()"></search-panel>
              </transition-->

            </b-col>
            <b-col cols="1">
            </b-col>

          </b-row>

      </b-col>

      <b-col cols="3">
        <b-row class="h-100">
        </b-row>
      </b-col>

    </b-row>


  </b-container>
</template>

<script>
import SearchPanel from './Search.vue'
import GoogleMap from './Map.vue'
import Sidebar from './Sidebar.vue'
import RestaurantSidebar from './RestaurantSidebar.vue'
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'UserMainScreen',
  components: {
    SearchPanel,
    GoogleMap,
    Sidebar,
    RestaurantSidebar,
  },
  data: function () {
        return {
          visible: true,
          searchVisible : true,
          mapVisible: true,
          resturantSidebarVisible: true,

          user: Object,
          session: Object,
          signedIn: false,
        }
  },
  created() {
    this.findUser();
    /* AmplifyEventBus events pertain to amplify components.
       Here we add a listener for the auth components, and when
       they are triggered, info is returned, e. g. 'signedIn', 'signedOut', 'signUp',
       https://aws-amplify.github.io/docs/js/vue#amplifyeventbus
    */
    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        console.log("info: ")
        console.log(info)
        this.findUser();
      } else if(info == "signedOut") {
        this.$store.commit('changeUserClient', undefined);
        this.$store.commit('changeUserSession', undefined);
      }
      else {
        console.log("info: ")
        console.log(info)
        this.signedIn = false;
      }
    });
  },

  methods: {
    async findUser() {
      try {
        /*
          TODO:
          appending
          .then((data) => console.log(data)) or
          .catch((err) => console.log('err ' + err));
          to Auth.currentAuthenticatedUser()
          results in this.user staying undefined
          why?

          read up on promises, callbackes, async, await.
        */
        this.$store.commit('changeUserClient', await Auth.currentAuthenticatedUser());
        this.$store.commit('changeUserSession', await Auth.currentSession());
      } catch (err) {
        console.log(err)
       /* this.$store.commit('changeIsSignedIn', false);*/
      }
    },

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
    },

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
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 0;
  overflow: hidden;
}

#userImage {
  width: 64px;
  height: 64px;
  left: calc(50% - 32px);
  top: calc(50% - 32px);
  position: absolute;
  background: #ffffff;
  z-index: 99;
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

#searchPanel {
  position: absolute;
  z-index: 99;
}



#routerView {
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.gMap {
  position: absolute;
  z-index: 10;
  padding: 0;
  margin: 0;
}


.loginForm {
    position: relative;
    z-index: 100;
    margin-left: auto;
    margin-right: auto;
}

</style>
