import Vue from 'vue';
import VueRouter from 'vue-router'

/* <vue-router-configuration> */
import app from "../App.vue"
import UserMainScreen from '../components/UserMainScreen.vue'
import LoginForm from '../components/Login.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    /* adding { path: '/', component: app } here leads to the map not rendering */
    { path: '/auth', component: LoginForm },
  ]
});
/* </vue-router-configuration> */
