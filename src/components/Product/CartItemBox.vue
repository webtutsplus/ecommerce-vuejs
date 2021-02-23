<template>
  
  <div class="product-box">
     

        <div class="row">

            <div class="col-4" @click="showDetails">
                <img class="img-fluid" v-bind:src="this.imgUrl" alt="product-image">
            </div>

            <div class="col-8">
            
                <h3 class="product_name" @click="showDetails">{{this.pName}}</h3>
                <h3 class="product_description">{{this.pDescription}}</h3>
                <h3 class="product_price"><span>$</span>{{this.pPrice}}</h3>
                <h3 class="product_description">{{this.pQuantity}}</h3>
                <button class="button_delete" @click="$emit('delete',this.id)">Delete item</button>
                <button class="button_update" @click="$emit('update',this.id)">Update Quantity</button>

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
                
                    imgUrl:'',
                    pName:'',
                    pDescription:'',
                    pPrice:'',
                    pQuantity:'',
                    id:'',
                
            len:0
        }
    },
    methods : {
        showDetails(){
            this.$router.push({ name: 'ShowDetails', params: { id : this.cart.product.id } })
        }
    },
    mounted(){
        console.log("Entering fir loop of " + this.cart)
            //console.log('==>'+this.item+'\n')
            /* this.cartData[this.len].imgUrl = this.cart[this.len].product.imageURL
            this.cartData[this.len].itemId = this.cart[this.len].productId
            this.cartData[this.len].pName = this.cart[this.len].product.name
            this.cartData[this.len].pDescription = this.cart[this.len].product.description
            this.cartData[this.len].pPrice = this.cart[this.len].product.price
            this.cartData[this.len].pQuantity = this.cart[this.len].quantity 
            this.cartData[this.len].id = this.cart[this.len].id; */
            console.log("Initially Len =  " + this.len)
            this.imgUrl = this.cart.product.imageURL
            this.pName = this.cart.product.name
            this.pDescription = this.cart.product.description
            this.pPrice = this.cart.price
            this.pQuantity = this.cart.quantity 
            this.id = this.cart.id
            this.len += 1;
            console.log("Finally Len =  " + this.len)
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