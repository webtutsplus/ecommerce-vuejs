<template>
  <div class="product-box">
      <div class="row">
        <div class="col-4">
            <img class="img-fluid" v-bind:src="product.imageURL" alt="product-image">
        </div>
        <div class="col-8">
            <router-link :to="{name : 'EditProduct', params : {id : product.id} }">
                <button class="btn btn-primary edit_btn">Edit</button>
            </router-link>
            <h3 class="product_name">{{product.name}}</h3>
            <h3 class="product_description">{{product.description}}</h3>
            <h3 class="product_price"><span>$</span>{{product.price}}</h3>
            <button type="button" class="buy_btn btn btn-lg btn-outline-success">Buy Now</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "ProductBox",
    props : ["product"]
}
</script>

<style>
.product-box{
    background-color: rgb(246, 241, 245);
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px 15px;
}
.product-box img{
    border-radius : 10px;
}   
.product_name{
    font-size: 35px;
}
.product_name:hover{
    color:rgb(43, 107, 226);
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
.edit_btn{
    float : right;
}
.buy_btn{
    margin-top : 60px;
}
.btn:focus {
    outline: none;
    box-shadow: none;
}
</style>