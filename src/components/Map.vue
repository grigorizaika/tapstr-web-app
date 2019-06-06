<template>
    <div class="google-map" :id="mapName"></div>
</template>


<script >
export default {

    name: 'GoogleMap',

    props: ['name'],

    data: function () {
        return {
            mapName: this.name + "-map",
            userLatitude: 0,
            userLongitude: 0,
            map: null,
            mapZoom: 14,
        }
    },

    methods: {
        initMap: function () {
            if (navigator.geolocation) {
                var element = document.getElementById(this.mapName);
                    var options = {
                        zoom: 15,
                        center: new google.maps.LatLng(52.237049, 21.017532),
                        disableDefaultUI: true,
                    };
                    this.map = new google.maps.Map(element, options);
                navigator.geolocation.getCurrentPosition((position) => {
                    /* Get geolocation. */
                    this.userLatitude = position.coords.latitude;
                    this.userLongitude = position.coords.longitude;

                    /* Initialize google maps based on the location. */
                    var element = document.getElementById(this.mapName);
                    var options = {
                        zoom: 14,
                        center: new google.maps.LatLng(this.userLatitude, this.userLongitude),
                        disableDefaultUI: true,

                        /* TODO make it into a separete variable */
                        styles: [
                            {
                                "featureType": "poi",
                                "stylers": [
                                    { "visibility": "off" }
                                ]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'labels.icon',
                                stylers: [{visibility: 'off'}]
                            },
                        ]
                    };
                    this.map = new google.maps.Map(element, options);
                    /*map.addListener('zoom_changed', function() {
                        infowindow.setContent('Zoom: ' + this.map.getZoom());
                    });*/

                    let that = this;
                    this.map.addListener('zoom_changed', function() {
                        /* this keyword is this.map here */
                        that.mapZoom = this.getZoom();
                    });
                });
            } else {
                alert("Geolocation is not supported by this browser.");
                var element = document.getElementById(this.mapName);
                    var options = {
                        zoom: 14,
                        center: new google.maps.LatLng(52.237049, 21.017532),
                        disableDefaultUI: true,

                        /* TODO make it into a separete variable */
                        styles: [
                            {
                                "featureType": "poi",
                                "stylers": [
                                    { "visibility": "off" }
                                ]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'labels.icon',
                                stylers: [{visibility: 'off'}]
                            },
                        ]
                    };
                    this.map = new google.maps.Map(element, options);

                    let that = this;
                    this.map.addListener('zoom_changed', function() {
                        /* this keyword is this.map here */
                        that.mapZoom = this.getZoom();
                    });

            }

        },
    },

    watch: {
        mapZoom: function() {
            this.mapZoom > 14 ? this.$emit('mapZoomClose') : this.$emit('mapZoomFar');
        }
    },

    mounted: function() {
        this.initMap();
    }
};
</script>


<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}
</style>
