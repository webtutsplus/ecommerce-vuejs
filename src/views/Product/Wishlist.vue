<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your WishList</h4>
      </div>
    </div>

    <div class="row">
      <div v-for="product of products" :key="product.id" 
      class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
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
    fetchWishlist() {

      // fetch products
      axios.get(`${this.baseURL}wishlist/${this.token}`)
        .then(data => this.products = data.data)
        .catch(err => console.log(err));
    }
  },
  mounted() {
        this.token = localStorage.getItem('token');
        this.fetchWishlist();
    }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
