<template>

  <div v-for="itr in this.len" :key="itr">
  
  <p>itr : {{itr}}</p>

  <div class="product-box">

        <div class="row">

            <div class="col-4" @click="showDetails(itr-1)">
                <img class="img-fluid" v-bind:src="this.cartItem[itr-1].imgUrl" alt="product-image">
            </div>

            <div class="col-8">
            
                <h3 class="product_name" @click="showDetails(itr-1)">{{this.cartItem[itr-1].pName}}</h3>
                <h3 class="product_description">{{this.cartItem[itr-1].pDescription}}</h3>
                <h3 class="product_price"><span>$</span>{{this.cartItem[itr-1].pPrice}}</h3>
                <h3 class="product_description">Quantity : {{this.cartItem[itr-1].pQuantity}}</h3>
                <button class="button_delete" @click="$emit('delete',this.cartItem[itr-1].id)">Delete from cart</button>
                <input v-model="this.pQuantity" @click="$emit('update',this.id,this.pQuantity)" placeholder="update quantity" />

            </div>

        </div>

  </div>

  </div>

</template>

<script>
export default {
    name : "CartItemBox",
    props : ['cart'],
    emits : ['delete','update'],
    data(){
        return {
                cartItem : [ 
                    {
                        imgUrl:'',
                        pName:'',
                        pDescription:'',
                        pPrice:'',
                        pQuantity:'',
                        pId:'',
                        id:''
                    }
                ],
                len:0,
                totalcost:0,
               }
    },
    methods : {
        showDetails(itr){
            this.$router.push({ name: 'ShowDetails', params: { id : this.cartItems[itr].pId } })
        },
        setData(){
            this.totalcost = this.cart.totalCost
            this.len = Object.keys(this.cart.cartItems).length
            console.log('Entering for loop ' + this.len)
            let i;
            for(i=0;i<this.len;i++){
                    console.log("i "+ i + ' len ' + this.len)
                    console.log('img ' + this.cart.cartItems[i].product.imageURL)
                    this.cartItem[i].imgUrl = this.cart.cartItems[i].product.imageURL
                    this.cartItem[i].pName = this.cart.cartItems[i].product.name
                    this.cartItem[i].pDescription = this.cart.cartItems[i].product.description
                    this.cartItem[i].pPrice = this.cart.cartItems[i].product.price
                    this.cartItem[i].pQuantity = this.cart.cartItems[i].quantity 
                    this.cartItem[i].id = this.cart.cartItems[i].id
                    this.cartItem[i].pId = this.cart.cartItems[i].product.id;
                }
            console.log('Exiting for loop')
        }
    },
    created(){
        this.setData()
    },
    updated(){
        this.setData()
    },
    mounted(){
        this.setData()
    }
}
</script>

<style>
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
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
}
.button_update {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
}

</style>