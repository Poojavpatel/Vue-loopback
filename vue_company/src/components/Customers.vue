<template>
    <div>
        <div class="flexme" v-bind:key="customer.id" v-for="customer in customers">
            <p>{{customer.id}}</p>
            <p>{{customer.name}}</p>
            <p>{{customer.email}}</p>
            <p>{{customer.order}}</p>
            <p>{{customer.city}}</p>
            <button v-on:click="deleteCustomer(customer.id)">Delete</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Customers",
    data(){
        return{

        }
    },
    props:["customers"],
    components:{

    },
    methods:{
        deleteCustomer(id){
            axios.post('http://localhost:3000/api/customers/removecustomer',{cid: id})
            .then(alert("Item deleted from database..Refresh the page"))
            .catch("Error in deleting data");
        }
    }
}
</script>

<style>
.flexme{
    display: flex;
    justify-content: space-between;
}
</style>
