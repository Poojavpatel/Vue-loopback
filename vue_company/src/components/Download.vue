<template>
    <div class="box">
        <a class="btn" target="_blank" href="http://localhost:3000/api/customers/download">Download Data as csv</a>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Download',
}
</script>

<style scoped>
.box{
    width: 100%;
    display: flex;
}
.btn{
    border-radius: 5px;
    margin: 3% auto;
    background: #349e33;
    color: white;
    padding: 1.7% 2%;
    text-decoration: none;
}
</style>
