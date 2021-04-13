<template>

  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your Orders</h4>
      </div>
    </div>

    <div v-if="orders" v-for="itr in len" :key="itr" class="row mt-2 pt-3 justify-content-around">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img v-bind:src="orderList[itr-1].imageURL" class="w-100 card-img-top embed-responsive-item">
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title"><router-link v-bind:to="'/order/'+orderList[itr-1].pid">Order No : {{itr}}</router-link></h6>
          <p class="mb-0">{{orderList[itr-1].totalItems}} item<span v-if="orderList[itr-1].totalItems > 1">s</span></p>
          <p id="item-price" class="mb-0 font-weight-bold">Total Cost : <sup>$</sup>{{totalCost[itr-1]}}</p>
          <p id="item-total-price">Ordered on : {{orderdate[itr-1]}}</p>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr></div>
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
                pid:this.orders[i].id,
                imageURL: this.orders[i].orderItems[0].product.imageURL,
                totalItems: this.orders[i].orderItems.length
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

<style scoped>
h4, h5 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

.embed-responsive .card-img-top {
  object-fit: cover;
}
</style>
