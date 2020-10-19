<template>
     <bing-map
    :credentials="mapCredentials"
    :options="mapOptions"
    v-if="mapVisible"
  >
    <bing-map-layer
      name="activeFlightsLayer"
      v-on:layer-click="handleEvent"
      v-on:layer-mouseover="showTooltip"
      v-on:layer-mouseout="hideTooltip"
      :visible="pinsVisible"
    >
      <bing-map-pushpin
        v-for="(item, index) in pins"
        :metadata="item.metadata"
        :location="item.location"
        :options="item.options"
        :key="index"
      ></bing-map-pushpin>
        <bing-map-infobox :options="tooltip" v-if="tootipVisible">
          <ul class="customInfobox">
            <li v-for="(item, index) in tooltip.description" :key="index">
              {{ item }}
            </li>
          </ul>
        </bing-map-infobox>
    </bing-map-layer>
  </bing-map>
</template>

<script>

export default {
  data() {
    return {
      mapVisible: true,
      mapCredentials: "Your Bing Maps Key",
      mapOptions: {
        center: {
          latitude: 39.92,
          longitude: 116.46,
        },
        zoom: 10,
      },
      pinsVisible: true,
      pins: [
        {
          location: {
            latitude: 39.92,
            longitude: 116.46,
          },
          metadata: {
            title: "Type of work",
            description: ["fontend", "ui", "ps", "搬砖"],
          },
          options: {
            text: "4",
            color: "red",
          },
        },
             {
          location: {
            latitude: 39.92,
            longitude: 115.9,
          },
          metadata: {
            title: "Type of work",
            description: ["后端", "ui", "ps", "搬砖"],
          },
          options: {
            text: "3",
            color: "red",
          },
        },
      ],
      tooltip: {
        description: null,
        location: {
          latitude: 39.92,
          longitude: 116.46,
        },
        title: "Type of work",
      },
      tootipVisible: false,
    };
  },
  // mounted(){
  //   this.mapOptions.center.latitude = 35.027222
  // },
  methods: {
    handleEvent(e) {
      this.tootipVisible = !this.tootipVisible;
      console.log(e);
      // this.tooltip.description = e.meta.description.reduce((total,value) => {
      //   return total += value
      // },"")
    },
    showTooltip(e) {
      this.tootipVisible = true;
      this.tooltip.description = e.meta.description;
      this.tooltip.location.latitude = e.location.latitude;
       this.tooltip.location.longitude = e.location.longitude
    },
    hideTooltip() {
      this.tootipVisible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      .customInfobox {
            background-color: rgba(0,0,0,0.5);
            color: red;
            max-width: 200px;
            border-radius: 10px;
            padding: 10px;
            font-size:12px;
            pointer-events:auto !important;
            width: 100px;
            height: 200px;
        }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body{
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style-type: none;
}
.customInfobox {
  background-color: white;
  color: black;
  max-width: 200px;
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  pointer-events: auto !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration:  1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
