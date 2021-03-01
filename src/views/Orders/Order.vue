<template>

  <div class="cart-box container">

    <h2>Orders</h2>
    <div v-if="orders">

        <div v-for="itr in this.len" :key="itr">
  
        <div class="product-box">

            <div class="row">

                <div class="col-4">
                  <img class="img-fluid" v-bind:src="this.orderList[itr-1].imgUrl" alt="product-image">
                </div>

                <div class="col-8">

                    <h3 class="product_name">{{this.orderList[itr-1].pName}}</h3>
                    <h3 class="product_description">{{this.orderList[itr-1].pDescription}}</h3>
                    <h3 class="product_price"><span>$</span>{{this.orderList[itr-1].pPrice}} per unit</h3>
                    <h3 class="product_description">Quantity : {{this.orderList[itr-1].pQuantity}}</h3>
                    <h3 class="product_description">Total Price : {{this.orderList[itr-1].pPrice*this.orderList[itr-1].pQuantity}}</h3>

                </div>

            </div>

          </div>

        </div>


    </div>

  </div>

</template>

<script>

export default {

  data() {
    return {
      orders: null,
      token: null,
      len:0,
      totalcost:0,
      orderList : []
    }
  },

  name: 'Order',

  methods: {    
listOrders(){
      axios.get(`http://localhost:8080/api/order/?token=${this.token}`).then((response) => {
        console.log("yayyy")
        if(response.status==200){
          this.orders = response.data
          console.log(response.data)
          this.len = Object.keys(this.orders).length
          let i;
          for(i=0;i<this.len;i++){
              this.orderList.push({
              imgUrl:this.orders[i].product.imageURL,
              pName:this.orders[i].product.name,
              pDescription:this.orders[i].product.description,
              pPrice:this.orders[i].product.price,
              pQuantity:this.orders[i].quantity ,
              id:this.orders[i].id,
              pId:this.orders[i].product.id,
              userId:this.orders[i].userId
            })
          }
        }
      },
      (error)=>{
        console.log(error)
      });

    }
  },

  mounted() {
    this.token = localStorage.getItem("token");
    //list the orders
    this.listOrders();
  },
};

</script>

<style>

.cart-box h2 {
  font-family: "Courgette", cursive;
  font-size: 60px;
  text-align: center;
  margin: 70px 0;
}
.add-btn {
  margin: 20px 0;
}

.product-box{
    background-color: rgb(253, 240, 250);
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px 15px;
    min-height: 250px;
}
.product-box img{
    border-radius : 10px;
}   
.product-box img:hover{
    cursor: pointer;
}
.product_name{
    font-size: 35px;
    margin-right : 120px;
}
.product_name:hover{
    color:rgb(243, 126, 31);
    cursor: pointer;
}
.product_description{
    font-size: 20px;
}
.product_price{
    font-size: 20px;
    color:red;
}
.product_price span{
    font-size:15px;
}

.button_delete {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin: 16px;
  border-radius: 15px;
}
.button_update {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin: 16px;
  border-radius: 15px;
}
</style>