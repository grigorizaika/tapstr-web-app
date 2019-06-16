<template>
    <b-container fluid id="userAccountSection" style="width: 100vw; height: 100vh;">
        <b-row class="p-2">
            <b-col cols="11">
                {{ restaurantSlug }}
            </b-col>
            <b-col>
                <a id="closeBtn" @click="$router.go(-1)"><font-awesome-icon icon="times"/></a>
            </b-col>
        </b-row>
            <b-row class="h-50">
                <b-col cols="4">
                    row 1; col 1
                </b-col>
            <b-col cols="4">
                    row 1; col 2
                </b-col>
                <b-col cols="4">
                    row 1; col 3
                </b-col>
            </b-row>
            <b-row class="h-50">
                <b-col cols="4">
                    row 2; col 1
                </b-col>
                <b-col cols="4">
                    row 2; col 2
                </b-col>
                <b-col cols="4">
                    row 2; col 3
                </b-col>
            </b-row>
    </b-container>
</template>


<script>
export default {
    name: "RestaurantPage",
    data: function() {
        return {
            restaurantSlug: this.$route.params.id,
        }
    }

};
</script>


<style scoped>
</style>
