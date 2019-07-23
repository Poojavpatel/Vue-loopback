<template>
    <div class="outer">
        <div class="inner" v-on:click="toggleshow">Add a New Customer</div>
        <Customerform v-bind:ishidden="ishidden"></Customerform>
    </div>
</template>

<script>
import Customerform from './Customerform'

export default {
    name:'Addcustomer',
    data(){
        return{
            ishidden:true
        }
    },
    components:{
        Customerform
    },
    methods:{
        toggleshow(){
            this.ishidden = !this.ishidden;
        }
    }
}
</script>

<style scoped>
.outer{
    width: 60%;
    margin: 0 auto 1% auto;
}
.inner{
    border: 1px solid blue;
    padding: 1.5%  0.5%;
}
</style>
