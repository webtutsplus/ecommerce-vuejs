<template>
  <div class="list-products container">
    <h2>{{category.categoryName}}</h2>
    <div class="msg">
      <h3>{{msg}}</h3>
    </div>
    <img v-show="len == 0" class="img-fluid" src="../../assets/sorry.jpg" alt="Sorry">
    <div v-for="product of category.products" :key="product.id">
      <ProductBox :product="product">
      </ProductBox>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Product/ProductBox';
export default {
  name: 'ListProducts',
  data(){
    return {
      id : null,
      categoryIndex : null,
      category : {},
      len : 0,
      msg : null
    }
  },
  components : {ProductBox}, 
  props : [ "baseURL" , "categories" ],
  mounted() {
      this.id = this.$route.params.id;
      this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
      this.category = this.categories[this.categoryIndex];
      
      this.len = this.category.products.length;    
      if(this.len == 0) {
        this.msg = "Sorry, no products found";
      } else if(this.len == 1) {
        this.msg = "Only 1 product found";
      } else {
        this.msg = this.len + " products found";
      }
  }
}
</script>

<style>
.list-products h2{
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
.list-products .msg{
  text-align : center;
  margin-bottom : 50px; 
}
.list-products img{
  border-radius : 10px;
}
</style>
