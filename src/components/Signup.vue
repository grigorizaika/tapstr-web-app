<template>
    <section id="signup-section" class="form">
        <h3 class="tapstr-logo bumblebee-yellow">tapstr.</h3>
        <input class="tapstr-input" type="text" name="femail" placeholder="Email"><br/>
        <input class="tapstr-input" type="password" name="fassword" placeholder="Password"><br/>
        <input class="tapstr-input" type="password" name="fassword" placeholder="Repeat password"><br/>
        <p style="color: #ffffff; font-size: 12px;"><a>Forgot password?</a></p>
        <button>Sign in</button>
        <p style="color: #ffffff;">Don't have an account?</p>
        <p><a class="bumblebee-yellow">Sign Up</a></p>
        <p style="color: #ffffff;">OR</p>
        <button class="colors-facebook" type="button">Login using Facebook</button><br/>
        <!--button class="colors-instagram" type="button">Login using Instagram</button><br/-->
    </section>
</template>


<script>
export default {
  name: 'SignupForm',
  data: () => ({
    visible: true,

  }),
};
</script>


<style>
/* These imports should be in a single main file */
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

#signup-section {
    background: rgba(0, 0, 0, .5) url('../assets/images/jakub-kapusnak-296881-unsplash-min.jpg');
    background-blend-mode: overlay;

    height: 100%; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container*/
    filter: blur(4);
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
</style>
