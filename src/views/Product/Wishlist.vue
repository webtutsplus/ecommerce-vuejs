<template>
  <div class="products-box container">
    <h2>Our Products</h2>
    <div v-if="products">
        <div v-for="product of products" :key="product.id">
        <ProductBox :product="product">
        </ProductBox>
        </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/ProductBox';
export default {
  data() {
      return {
          products:null,
          token:null
      }
  },  
  name: 'Product',
  components : {ProductBox}, 
  props : [ "baseURL"],
  methods : {
    fetchWishlist : function() {
      // fetch products
      fetch(this.baseURL + "wishlist/"+this.token)
        .then(res => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err));

      //fetch categories
      fetch(this.baseURL + "category/")
        .then(res => res.json())
        .then(data => this.categories = data)
        .catch(err => console.log(err));
    },
    refreshNav : function () {
      this.key += 1;
    }
  },
  mounted() {
        this.token = localStorage.getItem('token');
        this.fetchWishlist();
    }
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