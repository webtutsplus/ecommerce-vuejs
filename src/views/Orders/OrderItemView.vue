<template>

<OrderItems
    :orderID="this.$route.params.id"
    :baseURL="baseURL"
/>

</template>

<script>

import OrderItems from '../../components/Order/OrderItems.vue'

export default {
    
    name:'OrderItemsView',

    components:{OrderItems},

    props:["baseURL"],

    data() {
        return {
            orderProducts:[],
            products:[],
            token:null
        }
    },
    
    mounted(){
        this.token = localStorage.getItem("token");
    }

}

</script>
