import Vue from 'vue';
import VueRouter from 'vue-router'

/* <vue-router-configuration> */
import app from "../App.vue"
import LoginForm from '../components/Login.vue'
import UserAccount from '../components/UserAccount.vue'
import UserMainScreen from '../components/UserMainScreen.vue'
import RestaurantPage from '../components/RestaurantPage.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    /* adding { path: '/', component: app } here leads to the map not rendering */
    { path: '/auth', component: LoginForm },
    { path: '/user', component: UserAccount},
    { path: '/restaurants', component: RestaurantPage},
    { path: '/restaurants/:id', component: RestaurantPage}
  ]
});
/* </vue-router-configuration> */
