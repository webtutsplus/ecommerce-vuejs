<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your Orders</h4>
      </div>
    </div>
    <!--        for each order display -->
    <div v-for="order in orderList" :key="order.pid" class="row mt-2 pt-3 justify-content-around">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <!--                display image in left-->
        <img v-bind:src="order.imageURL" class="w-100 card-img-top embed-responsive-item">
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <router-link v-bind:to="'/order/'+order.id">Order No : {{order.id}}</router-link>
          </h6>
          <p class="mb-0">{{order.totalItems}} item<span v-if="order.totalItems > 1">s</span></p>
          <p id="item-price" class="mb-0 font-weight-bold">Total Cost : $ {{order.totalCost}}</p>
          <p id="item-total-price">Ordered on : {{order.orderdate}}</p>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr></div>
    </div>
  </div>

</template>

<script>
  const axios = require('axios')
  export default {

    data() {
      return {
        token: null,
        orderList : []
      }
    },
    props:["baseURL"],
    name: 'Order',
    methods: {
      // list of order histories
      listOrders(){
        axios.get(`${this.baseURL}order/?token=${this.token}`)
          .then((response) => {
              if(response.status==200){
                this.orders = response.data
                // for each order populate orderList
                this.orders.forEach((order) => {
                  this.orderList.push({
                    id: order.id,
                    totalCost: order.totalPrice,
                    // get short date
                    orderdate: order.createdDate.substring(0,10),
                    // get image of the first orderItem of the order
                    imageURL: order.orderItems[0].product.imageURL,
                    // get total items
                    totalItems: order.orderItems.length
                  })
                })
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
