<template>
    <div id="restaurantSidebar" v-bind:style="{ right: this.positionRight+'vw' }">
        <b-row class="h-100 p-0 m-0">

            <div @click="toggle()" id="restaurantSidebarToggler">
                <font-awesome-icon icon="bars" style="color: white"/>
            </div>

            <b-col cols="12" class="m-0 p-0">
                <div id="restaurantLists">
                    <b-row id="restaurantFilters">
                        <b-col cols="12">
                            Filters
                        </b-col>
                    </b-row>
                    <b-row id="suggestedRestaurants" class="p-1">
                        <b-col cols="12">
                            <b-row v-for="restaurant in suggestedRestaurantList" class="h-30 m-1">
                                <b-col cols="11">
                                    <div @click="$router.push('restaurants/' + restaurant.id)" class="suggestedRestaurantBox">
                                        <div class="suggestedRestaurantBoxContent">
                                            <p>{{ restaurant.name }}</p>
                                            <p>{{ restaurant.cuisine }}</p>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row id="restaurantHistory" class="p-1">
                        <b-col cols="1"></b-col>
                        <b-col cols="3" class="p-0 m-1">
                            <div class="restaurantHistoryBox">
                                <div class="restarantHistoryBoxContent">Restaurant 1</div>
                            </div>
                        </b-col>
                        <b-col cols="3" class="p-0 m-1">
                            <div class="restaurantHistoryBox">
                                <div class="restarantHistoryBoxContent">Restaurant 2</div>
                            </div>
                        </b-col>
                        <b-col cols="3" class="p-0 m-1">
                            <div class="restaurantHistoryBox">
                                <div class="restarantHistoryBoxContent">Restaurant 3</div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>

        </b-row>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'RestaurantSidebar',
    data: function() {
        return {
            positionRight: -26,
            visible: true,

            suggestedRestaurantList: [],
        }
    },
    mounted() {
        this.getSuggestedRestaurants();
    },
    methods: {
        toggle() {
            this.positionRight == 0 ? this.positionRight = -26 : this.positionRight = 0;
        },
        getSuggestedRestaurants() {

            var raw_response = []

            axios.get('https://axqeajmn83.execute-api.eu-central-1.amazonaws.com/dev/restaurants?attributes=short&limit=3')
                .then(response => {
                    console.log(response.data)
                    raw_response = response.data

                    Array.prototype.forEach.call(raw_response, (restaurant) => {
                        var address = restaurant.address.S;
                        var cuisine = restaurant.cuisine.S;
                        var name = restaurant.name.S;
                        var restaurant_id = restaurant.venueId.S;

                        this.suggestedRestaurantList.push({
                            name: name,
                            address: address,
                            cuisine: cuisine,
                            id: restaurant_id
                        });
                    });

                });
        }
    }
}
</script>


<style scoped>
#restaurantSidebar {
    position: fixed;
    float: right;
    right: 0vw;
    top: 0;
    z-index: 99;
    width: 25vw;
    height: 100%;

    -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
}


#restaurantSidebarToggler {
  position: absolute;
  top: 45%;
  left: -64px;
  height: 48px;
  width: 48px;
  background: #ffb101;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#restaurantSidebarToggler:hover {
    cursor: pointer;
}

#restaurantLists {
    height: 100%;
    width: 100%;
    background: silver;
    padding: 0px;

}

#restaurantFilters {
    height: 30%;
    background: #e3e3e3;
}

#suggestedRestaurants {
    height: 50%;
    background: white;
}

#restaurantHistory {
    height: 20%;
    background: green;
}

.restaurantHistoryBox {
    position: relative;
    top: 0;
    width: 100%;
    background: silver;

    -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
    -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
}

.restaurantHistoryBox:before {
    content: "";
    display: block;
    padding-top: 100%;
    /* initial ratio of 1:1*/
}

.restarantHistoryBoxContent {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  line-height: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.restaurantHistoryBox:hover {
    cursor: pointer;
}

.suggestedRestaurantBox {
    width: 100%;
    height: 100%;
    background: blue;
    text-align: center;
}

.suggestedRestaurantBox:hover {
    cursor: pointer;
}
</style>
