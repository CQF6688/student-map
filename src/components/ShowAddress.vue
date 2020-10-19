<template>
  <div>
    <div class="flexed">
      <el-select v-model="fromat.value" placeholder="请选择工作" @change="func">
        <el-option
          v-for="item in fromat.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="box">
      <bing-map
        :credentials="mapCredentials"
        :options="mapOptions"
        v-if="mapVisible"
      >
        <bing-map-layer
          name="activeFlightsLayer"
          v-on:layer-click="ss"
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
              <li
                v-for="(item, index) in tooltip.description"
                :key="index"
                class="customInfoboxs"
              >
                {{ item }}
              </li>
            </ul>
          </bing-map-infobox>
        </bing-map-layer>
      </bing-map>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectAddress",
  data() {
    return {
      fromat: {
        options: [
          {
            value: "fontend",
            label: "fontend",
          },
          {
            value: "搬砖",
            label: "搬砖",
          },
          {
            value: "backend",
            label: "backend",
          },
          {
            value: "选项4",
            label: "ui",
          },
          {
            value: "ps",
            label: "ps",
          },
        ],
        value: "",
      },
      mapVisible: true,
      mapCredentials:
        "At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML",
      mapOptions: {
        center: {
          latitude: 39.92,
          longitude: 116.46,
        },
        zoom: 10,
      },
      pinsVisible: true,
      pins: [],
      tooltip: {
        description: null,
        location: {
          latitude: 39.92,
          longitude: 116.46,
        },
        title: "Type of work",
      },
      tootipVisible: false,
      arrData: [
        {
          location: {
            latitude: 39.92,
            longitude: 116.46,
          },
          metadata: {
            title: "Type of work",
            description: ["fontend"],
          },
          options: {
            text: null,
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
            description: ["搬砖"],
          },
          options: {
            text: "3",
            color: "red",
          },
        },
        {
          location: {
            latitude: 39.92,
            longitude: 116,
          },
          metadata: {
            title: "Type of work",
            description: ["fontend"],
          },
          options: {
            text: null,
            color: "red",
          },
        },
      ],
    };
  },
  mounted() {
    this.pins = this.arrData;
    this.pins.forEach((d) => {
      d.options.text = d.metadata.description.length.toString();
    });
  },
  methods: {
    func() {
      let value = this.fromat.value;
      if (value) {
        this.pins = this.arrData.filter((d) => {
          //  console.log(d.metadata.description)
          return d.metadata.description.indexOf(value) !== -1;
        });
      } else {
        this.pins = this.arrData;
      }
      console.log(this.pins.metadata, "sdfs");
    },
    ss(e) {
      console.log(e);
      // this.tooltip.description = e.meta.description.reduce((total,value) => {
      //   return total += value
      // },"")
    },
    showTooltip(e) {
      console.log(e);
      this.tootipVisible = true;
      this.tooltip.description = e.meta.description;
      this.tooltip.location.latitude = e.location.latitude;
      this.tooltip.location.longitude = e.location.longitude;
    },
    hideTooltip() {
      this.tootipVisible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
body {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style-type: none;
}
.flexed {
  width: 100%;
  position: fixed;
  left: 77vw;
  z-index: 2000000;
}
.box {
  width: 100%;
  height: 100vh;
}
/* .MicrosoftMap{
  width: 500px;
  height: 200px!important;
} */
.customInfobox {
  background-color: white;
  color: black;
  width: 100px;
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  pointer-events: auto !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.customInfoboxs {
  width: 100%;
  height: 14px;
  color: black;
  font-size: 14px;
  margin-bottom: 14px;
  text-align: center;
}
</style>
