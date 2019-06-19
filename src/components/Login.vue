<template>
    <b-container fluid id="loginSection" style="width: 100vw; min-height: 100vh;">
      <b-row>
        <b-col cols="3" sm="1" md="3" lg="3"></b-col>
        <b-col cols="5" sm="8" md="6" lg="5">
          <div id="authBox">
                <a @click="$router.go(-1)" id="closeBtn">&times;</a>
                <amplify-authenticator></amplify-authenticator>
          </div>
        </b-col>
        <b-col cols="4" sm="2" md="3" lg="4"></b-col>
      </b-row>
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


<style scoped>
/* These imports should be in a single main file */
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');



#loginSection {
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0;
    margin: 0;
}

#authBox {
  display: flex;
  align-items: right;
  align-content: right;
  justify-content: right;
  flex-direction: column;
  text-align: right;
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

#closeBtn {
  font-size: 32px;
  text-decoration: none;
  color: white;  
  align-self: right;
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
