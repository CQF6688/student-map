<template>
  <div>
    <el-button type="info" @click="AddressShow">select address</el-button>
    <el-dialog
      title="select address"
      :visible.sync="AddressToggle"
      width="500px"
    >
      <div id="box">
        <bing-map :credentials="mapCredentials" :options="mapOptions"
        v-if="mapVisible" v-on:map-click="get">
          <bing-map-layer
            name="activeFlightsLayer"
            v-on:layer-click="getFunc"
            :visible="pinsVisible"
          >
            <bing-map-pushpin
              v-for="(item, index) in pins"
              :metadata="item.metadata"
              :location="item.location"
              :options="item.options"
              :key="index"
            ></bing-map-pushpin>
          </bing-map-layer>
        </bing-map>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "AddAddress",
  data() {
    return {
      mapCredentials:
        "At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML",
      mapOptions: {
        center: {
          latitude: 39.92,
          longitude: 116.46,
        },
        zoom: 10,
      },
      mapVisible:true,
      AddressToggle: false,
      pinsVisible: true,
      pins: [
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
      ],
    };
  },
  methods: {
    AddressShow() {
      this.AddressToggle = !this.AddressToggle;
    },
    getFunc(e) {
      console.log(e, this);
    },
    get(){
        console.log("sdfs")
    }
  },

  mounted() {},
};
</script>
<style scoped>
#box {
  width: 100%;
  height: 300px;
}
</style>
