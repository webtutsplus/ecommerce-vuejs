<template>

  <div class="cart-box container">

    <div v-if="clicked">
      <Checkout :products="cartItem"
                  :baseURL="baseURL"
                  :totalPrice="totalcost"
      />
    </div>

    <div v-else>

    <h2>Cart</h2>
    <div v-if="carts">

        <div v-for="itr in this.len" :key="itr">
  
        <div class="product-box">

            <div class="row">

                <div class="col-4" @click="showDetails(itr-1)">
                  <img class="imgfluid" v-bind:src="this.cartItem[itr-1].imgUrl" alt="product-image">
                </div>

                <div class="col-8">

                    <h3 class="product_name" @click="showDetails(itr-1)">{{this.cartItem[itr-1].pName}}</h3>
                    <h3 class="product_description">{{this.cartItem[itr-1].pDescription}}</h3>
                    <h3 class="product_price"><span>$</span>{{this.cartItem[itr-1].pPrice}} per unit</h3>
                    <h3 class="product_description">Quantity : {{this.cartItem[itr-1].pQuantity}}</h3>
                    <h3 class="product_description">Total Price : {{this.cartItem[itr-1].pPrice*this.cartItem[itr-1].pQuantity}}</h3>
                    <button class="button_delete" @click="deleteItem(this.cartItem[itr-1].id)">Delete from cart</button>
                    <form @submit="updateItem(this.cartItem[itr-1].id,this.cartItem[itr-1].pQuantity)">
                      <input v-model="this.cartItem[itr-1].pQuantity"/>
                      <button class="button_update" type="submit">Update</button>
                    </form>

                </div>

            </div>

          </div>

        </div>

        <h3>Total Cost : $ {{totalcost}}</h3>

        <button :disabled="isDisabled()" class="button_check" @click="checkout()" >Confirm Order</button>
        
    </div>

  </div>

  </div>

</template>
 
<script>

import Checkout from '../Checkout/Checkout.vue'

export default {

  data() {
    return {
      carts: null,
      token: null,
      len:0,
      totalcost:0,
      cartItem : [],
      clicked:false
    }
  },

  name: 'Cart',
  props: ["baseURL"],
  components:{Checkout},

  methods: {

     isDisabled(){
       if(this.len === 0){
         return true;
       }
       return false;
     },

     showDetails(itr){
            this.$router.push({ name: 'ShowDetails', params: { id : this.cartItem[itr].pId } })
     },

     checkout() {
      this.clicked=!this.clicked
     }, 

     listCartItems(){
      axios.get(`${this.baseURL}cart/?token=${this.token}`).then((response) => {
        if(response.status==200){
          this.carts=response.data;
          this.len = Object.keys(this.carts.cartItems).length
          this.totalcost = this.carts.totalCost
          let i;
          for(i=0;i<this.len;i++){
            this.cartItem.push({
              imgUrl:this.carts.cartItems[i].product.imageURL,
              pName:this.carts.cartItems[i].product.name,
              pDescription:this.carts.cartItems[i].product.description,
              pPrice:this.carts.cartItems[i].product.price,
              pQuantity:this.carts.cartItems[i].quantity ,
              id:this.carts.cartItems[i].id,
              pId:this.carts.cartItems[i].product.id,
              userId:this.carts.cartItems[i].userId
            })
          }
        }
      },
      (error)=>{
        console.log(error)
      });

    },

    deleteItem(itemId){
      axios.delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token} `)
        .then((response)=>{
          if(response.status==200){
            this.$router.go(0);
          }
        },(error)=>{
          console.log(error)
        })
    },

    updateItem(itemId,quantity){
      let i
      for(i=0;i<this.len;i++){
        if(this.cartItem[i].id === itemId){
          break
        }
      }
      this.cartItem[i].pQuantity = quantity
      let userId = this.cartItem[i].userId
      let productId = this.cartItem[i].pId
      axios.put(`${this.baseURL}cart/update/${itemId}/?token=${this.token}`,{
        id:itemId,
        userId,
        productId,
        quantity
      })
  
    }

  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
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

  .cart-box h3{
    font-family: 'Grand Hotel', cursive;
  }

  .add-btn {
    margin: 20px 0;
  }

  .imgfluid{
    max-width: 270px;
    max-height: 300px;
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

  .button_delete:focus{
    outline: none;
    box-shadow: none;
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

  .button_update:focus{
    outline: none;
    box-shadow: none;
  }

  .button_check{
    background-color: #5d3dec;
    border: none;
    color: white;
    margin-left: 40%;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
  }

  .button_check:focus{
    outline: none;
    box-shadow: none;
  }

  .button_check:disabled{
    background-color: #9b86f7;
    border: none;
    color: white;
    margin-left: 40%;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    cursor:not-allowed;
  }

</style>