<template>
  <div class="product-box">
      <div class="row">
        <div class="col-4" @click="showDetails">
            <img class="img-fluid" v-bind:src="product.imageURL" alt="product-image">
        </div>
        <div class="col-8">
            <router-link :to="{name : 'EditProduct', params : {id : product.id} }" v-show="this.$route.name=='AdminProduct'">
                <button class="btn btn-primary edit_btn">Edit</button>
            </router-link>
            <h3 class="product_name" @click="showDetails">{{product.name}}</h3>
            <h3 class="product_description">{{product.description}}</h3>
            <h3 class="product_price"><span>$</span>{{product.price}}</h3>
            <button @click="addToWishList(product.id)">Add to wishlist</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "ProductBox",
    data() {
        return {
            token: null
        }
    },
    props : ["product"],
    methods : {
        showDetails(){
            this.$router.push({ name: 'ShowDetails', params: { id : this.product.id } })
        },
        addToWishList(id){
            axios.post("http://remotedevs.org:8080/api/wishlist/add?token="+this.token, {
                id:this.id
            }).then(function (response) {
                console.log(response)
            }).error(function(error){
                console.log(error)
            });
        }

    },
    mounted() {
        this.token = localStorage.getItem('token');
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
.edit_btn{
    float : right;
}

.favourite{
    float : right;
    font-size : 30px;
    margin : 4px 15px 0 0;
    color : red;
    cursor : pointer;
}

.buy_btn{
    margin-top : 60px;
}
.btn:focus {
    outline: none;
    box-shadow: none;
}
</style>