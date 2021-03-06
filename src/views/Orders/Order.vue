<template>

  <div class="cart-box container">

    <h2>Orders</h2>
    <div v-if="orders">

          <div v-for="itr in this.len" :key="itr">

              <div class="order_class">
                <h4><router-link v-bind:to="'/order/'+this.orderList[itr-1].pid">Order No : {{itr}}</router-link></h4> 
                <h4>Total Cost : $ {{totalCost[itr-1]}}</h4>
                
              </div>

              <h4>Ordered on : {{orderdate[itr-1]}}</h4>

          </div>

    </div>

  </div>

</template>

<script>

export default {

  data() {
    return {
      orders: [],
      token: null,
      len:0,
      orderList : [],
      totalCost:[],
      orderdate:[]
    }
  },

  props:["baseURL"],

  name: 'Order',

  methods: {  
    
      listOrders(){
      axios.get(`${this.baseURL}order/?token=${this.token}`).then((response) => {
        if(response.status==200){
          this.orders = response.data
          this.len = Object.keys(this.orders).length
          let i
          for(i=0;i<this.len;i++){
              this.totalCost[i] = this.orders[i].totalPrice
              this.orderdate.push((this.orders[i].createdDate).substring(0,10))
              this.orderList.push({
                pid:this.orders[i].id
              })
          }
        }
      },
      (error)=>{
        console.log(error)
      });
    },
    
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.listOrders();
  },
};

</script>

<style>

.order_class{
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0;
}

.order_class h4:hover{
  cursor: pointer;
}

</style>