<template>
<div id="search-panel">
    <div class="search-wrapper">
        <input class="tapstr-input search-input " type="text" v-model="search" placeholder="Search restaurants"
        @focus="searchResultsVisible = true" @blur="searchResultsVisible = false"
        />
    </div>
    <transition name="slide">
    <div v-if="this.searchResultsVisible" class="result-wrapper">
        <div class="card" v-for="result in results" v-bind:key="result">
            <a target="_blank">
            <img v-bind:src="result.img"/>
            <small>{{ result.name }}</small>
            {{ result.rating_text }}
            </a>
        </div>
    </div>
    </transition>
    <button v-if="!this.searchResultsVisible" id="venuesAroundButton">Venues around me</button>
</div>
</template>


<script>
import axios from 'axios'

export default {
    name: "SearchPanel",
    data: function () {
        return {
            visible: true,
            search: '',
            results: [],
            searchResultsVisible: false,
            }
    },
    methods: {
        hide: function() {
            this.visible = false;
        },
        show: function() {
            this.visible = true;
        }
    },
    /*computed: {
        filteredList() {
            return this.results.filter(result => {
                return result.name.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },*/
    mounted: function() {
           axios.get('http://127.0.0.1:8000/api/restaurants/')
                .then((response) => {
                    console.log(this.search + " ");
                    this.results = response.data.results;
                });
    },
};
</script>


<style>


.search-input {
    width: 432px;
    height: 40px;
    border-radius: 36px;

}

.search-input:focus {
  width: 100% !important;
  outline-width: 0 !important;
}

.result-wrapper {
    background: white;
    position: absolute;
    margin-left: 92px;
    width: 300px;
    list-style-type: none;
    transform-origin: top;
    transition: transform .4s ease-in-out;
    overflow: hidden;
    border-radius: 36px;
}

.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}

#venuesAroundButton {
    position: absolute;
    margin-left: -120px;
    top: 80px;
}

a {
    cursor: pointer;
}
</style>
