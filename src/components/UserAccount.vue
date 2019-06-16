<template>
    <b-container fluid id="userAccountSection" style="width: 100vw;">
            <b-row>
                <b-col cols="4" align-self="center">
                    <img id="userPicture" style="width: 128px; height: 128px;" src="https://tapstr-files.s3.eu-central-1.amazonaws.com/images/menu/oranges.jpg" alt="User Picture" class="m-2">
                </b-col>
                <b-col cols="4" >
                    <div id="userAccountInfo" align-self="center">
                        <p contenteditable="true" id="userName" class="m-2">{{ user.name }}</p>
                        <b-form-input v-model="user.email" placeholder="Email" class="rounded-pill m-4 w-75"></b-form-input>
                        <b-form-input type="password" placeholder="Current password" class="rounded-pill mt-4 w-75"></b-form-input>
                        <b-form-input type="password" placeholder="New password" class="rounded-pill mt-4 w-75"></b-form-input>
                        <b-form-input type="password" placeholder="Repeat password" class="rounded-pill mt-2 mb-4 w-75"></b-form-input>
                        <b-form-input v-model="user.phone_number" placeholder="Mobile phone" class="rounded-pill m-4 w-75"></b-form-input>
                        <b-form-input v-model="user.city" placeholder="City" class="rounded-pill m-4 w-75">{{ user.city }}</b-form-input>
                        <b-button class="rounded-pill m-4 ">Save changes</b-button>
                    </div>
                </b-col>
                <b-col cols="4" style="padding: 24px;">
                    <a @click="$router.go(-1)"><font-awesome-icon icon="times"/></a>
                </b-col>
            </b-row>
    </b-container>
</template>


<script>
import axios from 'axios'
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
    name: 'UserAccount',
    data: function() {
        return {
            isLoading: false,

            user: {
                name: "Foody Fooderson",
                email: "boris@borya.com",
                phone_number: "8789",
                city: "Warsaw"
            },
        }
    },
    computed: {
        userClient() { return this.$store.getters.userClient },
        userSession() { return this.$store.getters.userSession },
        userEmail() { return this.$store.getters.isUserSignedIn ? this.$store.getters.userClient.attributes.email : "foody@fooderson.fo"},
        userPhoneNumber() { return this.$store.getters.isUserSignedIn ? this.$store.getters.userClient.attributes.phone_number : "empty"},
    },
    created() {
        this.user.email = this.userEmail;
        this.user.phone_number = this.userPhoneNumber;
    },
    methods: {
           submitUserData() {
                var that = this;
                that.isLoading = true;

                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': this.userSession.getIdToken().getJwtToken(),
                }

                axios.post('https://axqeajmn83.execute-api.eu-central-1.amazonaws.com/dev/user-profile', that.user, { headers: headers })
                    .then((response) => {
                        that.isLoading = false;
                        console.log(response);
                    });
                },
            getUserData() {
                var that = this;

                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': this.userSession.getIdToken().getJwtToken(),
                };

                axios.get('https://axqeajmn83.execute-api.eu-central-1.amazonaws.com/dev/user-profile?accessToken='
                + this.userSession.getAccessToken().getJwtToken(), { headers: headers })
                    .then((response) => {
                        console.log(response.data);
                    });
            },
            async deleteUserData() {
                 var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': this.userSession.getIdToken().getJwtToken(),
                };

                axios.delete('https://axqeajmn83.execute-api.eu-central-1.amazonaws.com/dev/user-profile?accessToken='
                + this.userSession.getAccessToken().getJwtToken(), { headers: headers })
                    .then((response) => { console.log(response.data) });


                this.$store.commit('changeUserClient', undefined);
                this.$store.commit('changeUserSession', undefined);

                console.log(await Auth.signOut());
            }
    }
};
</script>


<style>
#userAccountSection {
    background-color: #e3e3e3;
    z-index: 100;
}

#userAccountInfo {
    padding: 12px;
    box-shadow: 0 0 10px #a0a0a0;
    background-color: #cecece;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
