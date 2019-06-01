<template>
    <section id="login-section" class="form">
        <div id="loginForm" v-if="isLogin">
          <a href="javascript:void(0)" class="closebtn" @click="this.closeRegistration">&times;</a>
          <h3 class="tapstr-logo bumblebee-yellow">tapstr.</h3>
          <input class="tapstr-input" type="text" name="femail" placeholder="Email"><br/>
          <input class="tapstr-input" type="password" name="fassword" placeholder="Password"><br/>
          <p style="color: #ffffff; font-size: 12px;"><a>Forgot password?</a></p>
          <button>Log in</button>
          <p style="color: #ffffff;">Don't have an account?</p>
          <p id="registrationLink" @click="showRegistration()"><a  class="bumblebee-yellow">Register</a></p>
          <p style="color: #ffffff;">OR</p>
          <button class="colors-facebook" type="button">Login using Facebook</button><br/>
        </div>
        <div id="registrationForm" v-if="isRegistration">
          <a href="javascript:void(0)" class="closebtn" @click="this.closeRegistration">&times;</a>
          <h3 class="tapstr-logo bumblebee-yellow">tapstr.</h3>
          <input class="tapstr-input" type="text" name="registration_name" placeholder="Name"><br/>
          <input class="tapstr-input" type="email" name="registration_email" placeholder="Email"><br/>
          <input class="tapstr-input" type="password" name="registration_password" placeholder="Password"><br/>
          <input class="tapstr-input" type="password" name="registration_rep_password" placeholder="Repeat Password"><br/>
          <br/>
          <button @click="confirmRegistration()">Register</button>
          <p @click="showLogIn()" style="color: #ffffff;"><a>I already have an account.</a></p>
        </div>
        <div id="verificationMessage" v-if="isRegistrationFinished" style="color: #ffffff;">
          <a style="font-style: normal;" href="javascript:void(0)" class="closebtn" @click="this.closeRegistration">&times;</a>
          <p>We have sent an email with a confirmation link to your email address. In order to complete the sign-up process, please click the confirmation link. </p>
          <p>If you do not receive a confirmation email, please check your spam folder. Also, please verify that you entered a valid email address in our sign-up form.</p>
        </div>

    </section>
</template>


<script>
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
    background: rgba(0, 0, 0, .5) url('../assets/images/jakub-kapusnak-296881-unsplash-min.jpg');
    background-blend-mode: overlay;
    width: 30%;
    height: 560px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container*/
    filter: blur(4);
    -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
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


.tapstr-input:focus {
  width: 320px;
  outline-width: 0;
}

.colors-facebook {
    background: #3b5998;
    color: #ffffff;
}

.colors-instagram {
    background: #833ab4;
    color: #ffffff;
}

#login-section .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
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

</style>
