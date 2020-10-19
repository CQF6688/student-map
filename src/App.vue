<template>
<div>
  <AddAddress></AddAddress>
</div>
</template>
<script>
import AddAddress from './components/AddAddress.vue'
export default {
  components:{
AddAddress
  },
  name: "home",
  data() {
    return{
      msg:null
    } 
  },
  methods:{
  }
};
// bing map vu
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
