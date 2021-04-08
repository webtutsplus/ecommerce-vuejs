<template>
  <div class="products-box container">
    <h2>Your WishList</h2>
    <div v-if="products">
        <div v-for="product of products" :key="product.id">
        <ProductBox :product="product">
        </ProductBox>
        </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox';
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
      axios.get(`${this.baseURL}wishlist/${this.token}`)
        .then(data => this.products = data.data)
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

<style scoped>
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
