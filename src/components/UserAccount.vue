<template>
    <b-container fluid id="userAccountSection" class="h-100">
            <b-row >
                <b-col cols="4" align-self="center">
                    <img id="userPicture" style="width: 128px; height: 128px;" src="https://tapstr-files.s3.eu-central-1.amazonaws.com/images/menu/oranges.jpg" alt="User Picture" class="m-2">
                    <div style="height: 256px;"></div>
                </b-col>
                <b-col cols="4" >
                    <div id="userInfo" style="padding: 24px;" align-self="center">
                        <p contenteditable="true" id="userName" class="m-2">{{ user.name }}</p>
                        <b-form-input v-model="user.email" placeholder="Email" class="rounded-pill m-4">{{ user.email }}</b-form-input>
                        <b-form-input type="password" placeholder="New password" class="rounded-pill mt-4"></b-form-input>
                        <b-form-input type="password" placeholder="Repeat password" class="rounded-pill mt-2 mb-4"></b-form-input>
                        <b-form-input v-model="user.phone_number" placeholder="Mobile phone" class="rounded-pill m-4">{{ user.phone_number }}</b-form-input>
                        <b-form-input v-model="user.city" placeholder="City" class="rounded-pill m-4">{{ user.city }}</b-form-input>
                        <b-button class="rounded-pill m-4">Save changes</b-button>
                    </div>
                </b-col>
                <b-col cols="4" style="padding: 24px;">
                    <a @click="$router.go(-1)"><font-awesome-icon icon="times"/></a>
                </b-col>
            </b-row>
    </b-container>
</template>


<script>
export default {
    name: 'UserAccount',
    data: function() {
        return {
            user: {
                name: "Foody Fooderson",
                email: "boris@borya.com",
                phone_number: "+48 123 456 789",
                city: "Warsaw"
            },
        }
    },
    methods: {

    }
};
</script>


<style>
#userAccountSection {
    background-color: #e3e3e3;
    z-index: 100;
}
</style>
