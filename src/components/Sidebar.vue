<template>
<div class="sidebar" v-bind:style="{ width: this.width+'px', marginLeft: this.marginLeft+'px' }">
    <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;</a>
    <transition name="fade">
      <div  id="userInfo" v-if="itemsVisible">
        <img @click="goUser()" id="userPicture" style="width:64px; height:64px;" src="https://tapstr-files.s3.eu-central-1.amazonaws.com/images/menu/oranges.jpg" alt="User Picture">
        <a @click="goUser()" id="userName">{{ this.userEmail }}</a>
      </div>
    </transition> 
    <transition name="fade"> 
      <div v-if="itemsVisible" id="sidebarItems">
      <a @click="goAuth()" v-if="!this.isLoggedIn">Log In</a>
      <a href="#">About</a>
      
      <amplify-sign-out id="logoutButton" v-if="this.isLoggedIn"></amplify-sign-out>
      </div>
    </transition> 
  </div>
</template>

<script >
    export default {
        name: 'Sidebar',
        data: function() {
            return {
                width: 0,
                itemsVisible: false,
                marginLeft: 0,
            }
        },
        computed: {
          userClient() { return this.$store.getters.userClient },
          userEmail() { return this.$store.getters.isUserSignedIn ? this.$store.getters.userClient.attributes.email : "foody@fooderson.fo"},
          isLoggedIn() { return this.$store.getters.isUserSignedIn },
        },
        methods: {
            toggle: function() {
                if(this.width == 0 && !this.itemsVisible) {
                    this.itemsVisible = true
                    this.width = 250;
                } else {
                    this.itemsVisible = false
                    this.width = 0;
                }
            },
            hide: function() {
              this.width = 0
              this.itemsVisible = false
            },

            /* <route-related> */
            goAuth: function() {
              this.hide();
              this.$router.push('auth');
            },
            goUser: function() {
              this.hide();
              this.$router.push('user');
            }
            /* </route-related> */
        }

    };
</script>

<style>
.sidebar {
    height: 100%; /* 100% Full-height */
    width: 0px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 100; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #e8e8e8; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.sidebar a {
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#userInfo {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;


   transition: fade 1.3s;
}

#userName {
  padding: 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

#userPicture {
    border-radius: 50%;
    background: black;
}

#sidebarItems {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#logoutButton {
    position: absolute;
    bottom: 10%;
    left: 10%;

}

#userPicture {
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
