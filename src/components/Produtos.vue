<template>
    <div>
        <h1>Produtos</h1>
        <table>
            <td>Nome</td>
            <td>Preço</td>
            <td>Tipo</td>
        </table>
    </div>
</template>
<script>

import vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
export default{
    name: "Produtos", 

    data()
    {
        return{produtos:underfined}
    },

    mounted(){
        vue.axios.get('https://dummyjson.com/products')
        this.produtos.resp.data.data
        .then(res => res.json())
        .then(console.log);
        }
    }
</script>