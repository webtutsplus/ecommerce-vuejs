<template>
  <div class="products-box container">
    <h2>Our Products</h2>
    <router-link :to="{name : 'AddProduct'}">
        <button type="button" class="btn btn-success add-btn btn-lg">Add a new Product</button>
    </router-link>
    <div v-for="product of products" :key="product.id">
      <ProductBox :product="product">
      </ProductBox>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/ProductBox';
export default {
  name: 'Product',
  components : {ProductBox}, 
  props : [ "baseURL" , "products" ],
}
</script>

<style>
.products-box h2{
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
.add-btn{
  margin : 20px 0;
}
</style>