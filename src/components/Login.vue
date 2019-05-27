<template>
    <section id="login-section" class="form">
        <h3 class="tapstr-logo bumblebee-yellow">tapstr.</h3>
        <input class="tapstr-input" type="text" name="femail" placeholder="Email"><br/>
        <input class="tapstr-input" type="text" name="fassword" placeholder="Password"><br/>
        <p style="color: #ffffff;">Don't have an account?</p>
        <p><a class="bumblebee-yellow">Sign Up</a></p>
        <p style="color: #ffffff;">OR</p>
        <button class="colors-facebook" type="button">Login using Facebook</button><br/>
        <button class="colors-instagram" type="button">Login using Instagram</button><br/>

        <p style="color: #ffffff; font-size: 12px;">Forgot password?</p>


    </section>
</template>


<script>
export default {
  name: 'LoginForm',
  data: () => ({
    visible: true,

  }),
};
</script>


<style>
/* These imports should be in a single main file */
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

#login-section {
    background: rgba(0, 0, 0, .5) url('../assets/images/jakub-kapusnak-296881-unsplash-min.jpg');
    background-blend-mode: overlay;
    height: 500px; /* You must set a specified height */
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

.tapstr-input {
    width: 300px;
    height: 40px;
    border-radius: 36px;
    margin: 8px;
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
