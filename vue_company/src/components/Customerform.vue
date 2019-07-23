<template>
    <div v-if="!ishidden">
        <form>
            <p>Enter Customer details</p>
            <div class="box">
                <label for="name">Name</label>
                <input type="text" name="name" id="" v-model="name">
            </div>
            <div class="box">
                <label for="email">Email</label>
                <input type="text" name="email" id="" v-model="email">
            </div>
            <div class="box">
                <label for="phone">Phone no</label>
                <input type="text" name="phone" id="" v-model="phone">
            </div>
            <div class="box">
                <label for="city">City</label>
                <input type="text" name="" id="city" v-model="city">
            </div>
            <div class="box">
                <label for="order">Order Item</label>
                <input type="text" name="order" id="" v-model="order">
            </div>
            <button v-on:click.prevent="addCustomer">Add Customer</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Customerform',
    data(){
        return{
            name:"",
            email:"",
            phone:"",
            city:"",
            order:"",
        }
    },
    props:["ishidden"],
    methods:{
        addCustomer(){
            const cust = {
                name:this.name,
                email:this.email,
                order:this.order,
                phone:this.phone,
                city:this.city,
            };
            console.log(cust);
            axios.post('http://localhost:3000/api/customers/addcustomer',cust)
            .then(response => {
                console.log(response);
            })
            .catch(console.log("error in posting from vue"));
        }
    }
}
</script>

<style scoped>
form{
    border:1px solid mediumspringgreen;
}
.box{
    display: flex;
    border:1px solid grey;
    border-radius: 5px;
}
label{
    flex-basis: 45%;
}
input{
    width: 100%;
    padding: 1.5% 2%;
    border: none;
    border-left: 1px solid grey;
}
button{
    background:initial;
    border:1px solid mediumspringgreen;
    padding: 1% 2%;
}
</style>
