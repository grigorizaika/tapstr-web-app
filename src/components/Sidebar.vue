<template>
<div class="sidebar" v-bind:style="{ width: this.width+'px', marginLeft: this.marginLeft+'px' }">
    <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;</a>
    <div id="userInfo">
        <img id="userPicture" style="width:64px; height:64px;" src="https://tapstr-files.s3.eu-central-1.amazonaws.com/images/menu/oranges.jpg" alt="User Picture">
        <a id="userName">{{ this.username }}</a>
    </div>
    <a @click="this.registerClicked" href="#">Log In</a>
    <a href="#">Account</a>
    <a href="#">Settings</a>
    <a href="#">About</a>

     <button id="logoutButton">Log out</button>
</div>
</template>

<script >
    export default {
        name: 'Sidebar',
        data: function() {
            return {
                width: 0,
                marginLeft: 0,
                username: "Foody Fooderson",
            }
        },
        methods: {
            toggle: function() {
                if(this.width == 0) {
                    this.width = 250;
                } else {
                    this.width = 0;
                }
            },
            hide: function() {
              this.width = 0;
            },
            registerClicked: function() {
                this.$emit('registerClickedEvent');
            }
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
}

#userName {
  padding: 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

#userPicture {
    border-radius: 50%;
    background: black;
}

#logoutButton {
    width: 200px;
    background-color: #b3b3b3;
    position: absolute;
    bottom: 112px;
    left: 10%;

}

</style>
