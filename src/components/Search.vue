<template>
<div id="search-panel">
    <div class="search-wrapper">
        <transition name="slide">
            <b-input class="" type="text" v-model="search" placeholder="Search restaurants"
            @focus="searchResultsVisible = true" @blur="searchResultsVisible = false"
            @keydown="filterResults()" class="rounded-pill"/>
        </transition>
    </div>
    <transition name="slide">
        <div v-if="this.searchResultsVisible" class="result-wrapper">
            <transition name="fade">
            <div v-for="result in filteredResults" v-bind:key="result.id">
                <a target="_blank">
                <small>{{ result.name }}</small>
                {{ result.rating_text }}
                </a>
            </div>
        </transition>
        </div>
    </transition>
</div>
</template>


<script>
import axios from 'axios'
import Fuse from 'fuse.js'

export default {
    name: "SearchPanel",
    data: function () {
        return {
            visible: true,
            search: '',
            results: [],
            filteredResults: [],
            searchResultsVisible: false,
            }
    },
    methods: {
        hide: function() {
            this.visible = false;
        },
        show: function() {
            this.visible = true;
        },

        filterResults: function() {
            var fuseOptions = {
                keys: [{
                    name: 'name',
                    weight: 1
                },
                {
                    name: 'cuisine',
                    weight: 0.5
                }]
            }
            var fuse = new Fuse(this.results, fuseOptions)
            this.filteredResults = fuse.search(this.search)
        },

    },
    mounted: function() {
           axios.get('http://127.0.0.1:8000/api/restaurants/')
                .then((response) => {
                    this.results = response.data.results;
                });
    },
};
</script>


<style>

.result-wrapper {
    background: rgba(255, 255, 255, 0.8);

    position: absolute;
    margin-left: 48px;
    width: 80%;
    list-style-type: none;
    transform-origin: top;
    transition: transform .3s ease-in-out;
    overflow: hidden;
    border-radius: 36px;
}

#venuesAroundButton {
    position: absolute;
    margin-left: -120px;
    top: 80px;
    background: #ffb101;
}

a {
    cursor: pointer;
}


/* <transitions> */
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* </transitions> */
</style>
