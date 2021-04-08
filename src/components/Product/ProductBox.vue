<template>
  <div class="card h-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Product Image">
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id : product.id } }"><h5 class="card-title">{{product.name}}</h5></router-link>
      <p class="card-text"><sup>$</sup>{{product.price}}</p>
      <p class="card-text font-italic">{{product.description.substring(0,65)}}...</p>

<!--      <button href="#" class="btn btn-primary" @click="showDetails">View</button>-->
      <router-link :to="{name : 'EditProduct', params : {id : product.id} }" v-show="$route.name=='AdminProduct'">
        <button class="btn btn-primary edit_btn">Edit</button>
      </router-link>
    </div>
  </div>
<!--  <div class="product-box">-->
<!--      <div class="row">-->
<!--        <div class="col-4" @click="showDetails">-->
<!--            <img class="img-fluid" :src="product.imageURL" alt="product-image">-->
<!--        </div>-->
<!--        <div class="col-8">-->
<!--            <router-link :to="{name : 'EditProduct', params : {id : product.id} }" v-show="$route.name=='AdminProduct'">-->
<!--                <button class="btn btn-primary edit_btn">Edit</button>-->
<!--            </router-link>-->
<!--            <h3 class="product_name" @click="showDetails">{{product.name}}</h3>-->
<!--            <h3 class="product_description">{{product.description}}</h3>-->
<!--            <h3 class="product_price"><span>$</span>{{product.price}}</h3>-->
<!--        </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
    name : "ProductBox",
    props : ["product"],
    methods : {
        showDetails(){
            this.$router.push({ name: 'ShowDetails', params: { id : this.product.id } })
        }
    }
}
</script>

<style scoped>

.embed-responsive .card-img-top {
  object-fit: cover;
}

a {
  text-decoration: none;
}

.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-title:hover {
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}


/*.product-box{*/
/*    background-color: rgb(253, 240, 250);*/
/*    border-radius: 10px;*/
/*    margin: 20px 0;*/
/*    padding: 15px 15px;*/
/*    min-height: 250px;*/
/*}*/
/*.product-box img{*/
/*    border-radius : 10px;*/
/*}*/
/*.product-box img:hover{*/
/*    cursor: pointer;*/
/*}*/
/*.product_name{*/
/*    font-size: 35px;*/
/*    margin-right : 120px;*/
/*}*/
/*.product_name:hover{*/
/*    color:rgb(243, 126, 31);*/
/*    cursor: pointer;*/
/*}*/
/*.product_description{*/
/*    font-size: 20px;*/
/*}*/
/*.product_price{*/
/*    font-size: 20px;*/
/*    color:red;*/
/*}*/
/*.product_price span{*/
/*    font-size:15px;*/
/*}*/
/*.edit_btn{*/
/*    float : right;*/
/*}*/
/*.buy_btn{*/
/*    margin-top : 60px;*/
/*}*/
/*.btn:focus {*/
/*    outline: none;*/
/*    box-shadow: none;*/
/*}*/

</style>
