<template>
  <div id="app">
    <h1>Welcome to Customers data</h1>
    <Addcustomer></Addcustomer>
    <Customers v-bind:customers="customers"></Customers>
    <Download></Download>
  </div>
</template>

<script>
import axios from 'axios';
import Customers from './components/Customers';
import Addcustomer from './components/Addcustomer'
import Download from './components/Download'

export default {
  name: 'app',
  components: {
    Customers,
    Addcustomer,
    Download
  },
  data(){
    return{
      customers:[],
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/customers/listcustomers')
    .then((response) => {
      this.customers = response.data.custlist;
    })
    .catch("error in fetching - axios")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
