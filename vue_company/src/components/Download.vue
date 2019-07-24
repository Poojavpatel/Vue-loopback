<template>
    <div class="box">
        <a class="btn" target="_blank" href="http://localhost:3000/api/customers/download">Download Data as csv</a>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Download',
    methods:{
        download(){
            axios({
                url: 'http://localhost:3000/api/customers/download',
                method: 'GET',
                responseType: 'blob',
                })
                .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'report.csv');
                document.body.appendChild(link);
                link.click();
            });
        }
    }
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
