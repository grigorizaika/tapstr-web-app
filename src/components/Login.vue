<template>
    <b-container id="login-section" class="form" >
      <div><a @click="$router.go(-1)">&times;</a></div>
      <amplify-authenticator></amplify-authenticator>
    </b-container>


</template>


<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'LoginForm',
  data: () => ({
    visible: true,
    formState: 'login',
  }),
  methods: {
    closeRegistration: function() {
      this.$emit('registerCloseEvent');
    },
    showRegistration: function() {
      this.formState='registration';
    },
    showLogIn: function() {
      this.formState='login';
    },
    showVerificationMessage: function() {
      this.formState='verificationMessage';
    },
    confirmRegistration: function() {
      /* Check data integrity */
      this.showVerificationMessage();
    },
    goBack: function() {
      this.$router.go(-1);
    }
  },
  computed: {
    isRegistration: function() { return this.formState == 'registration'; },
    isLogin: function() { return this.formState == 'login'; },
    isRegistrationFinished: function() { return this.formState == 'verificationMessage'; },
  }
};
</script>


<style>
/* These imports should be in a single main file */
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');



#login-section {
    z-index: 100;
}

.tapstr-logo {
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    align-items: center;
    text-align: center;
}


.colors-facebook {
    background: #3b5998;
    color: #ffffff;
}

#login-section .closebtn {
  position: absolute;
  top: 0;
  right: 432px;
  font-size: 32px;
  margin-left: 20px;
  padding: 12px;
  text-decoration: none;
  color: white;
  display: block;
  transition: 0.3s;
}

#login-section .closebtn:hover {
  color: #f1f1f1;
}

#registrationLink {
  cursor: pointer;
}

#verificationMessage {
  font-style: italic;
  padding: 16px;
  padding-top: 128px;
}

#verificationMessage a {
  font-style: normal;
}

.tapstr-input:focus {
  width: 80%;
  outline-width: 0;
}

@media only screen and (max-width: 884px) {
  #login-section {
    width: 90%;
  }
}

</style>
