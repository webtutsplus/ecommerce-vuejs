<template>
  <!-- Page Wrapper -->
  <div id="background-div" class="page-holder bg-cover">

    <div class="container py-5">
      <header class="text-left text-white py-5">
        <h3 class="mb-4 rounded"><a href="#start-shopping" class="bg-white px-2 py-2 rounded" id="heading">Start Shopping</a></h3>
        <p id="content" class="lead mb-0 bg-dark p-1 rounded">Simple Coding Market is for educational purposes only. It can be used by developers to learn about developing an ecommerce application complete with backend and frontend for Web and Android</p>
<!--        <p class="font-italic">Snippet By <a href="https://bootstrapious.com" class="text-white">-->
<!--          <u>Bootstrapious</u></a>-->
<!--        </p>-->
      </header>

<!--      <div class="text-white">-->
<!--        <p class="lead">It's not a good approch to deal directly with <code class="bg-white px-2 py-1 rounded">body</code> So, create a wrapper container and make it a full-window height.</p>-->
<!--        <p class="lead">Set the wrapper initial height to full window height using <code class="bg-white px-2 py-1 rounded">min-height: 100vh</code></p>-->
<!--        <p class="lead">Use <code class="bg-white px-2 py-1 rounded">.bg-cover</code> to make the background fit all viewports.</p>-->
<!--      </div>-->

    </div>
  </div>

  <div id="start-shopping" class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Categories</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <CategoryBox :category="categories[index-1]">
        </CategoryBox>
      </div>
    </div>
  </div>

  <hr>
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Products</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <ProductBox :product="products[index-1]">
        </ProductBox>
      </div>
    </div>
  </div>



</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue"
import CategoryCard from "../components/Category/CategoryCard.vue"
import ProductBox from "../components/Product/ProductBox";
import CategoryBox from "../components/Category/CategoryBox";
export default {
  name: 'Home',
  components : {ProductCard, CategoryCard, ProductBox, CategoryBox},
  props : ["baseURL", "products", "categories"],
  emits : ["fetchData", "refreshNav"],
  data(){
    return{
      category_size:0,
      product_size:0
    }
  },
  mounted(){
    this.category_size = Object.keys(this.categories).length
    if(this.category_size>3){
     this.category_size/=2
     this.category_size = Math.floor(this.category_size)
    }
    this.product_size = Object.keys(this.products).length
    if(this.product_size>8){
      this.product_size/=2
      this.product_size = Math.floor(this.product_size)
    }
  }
}
</script>

<style>


.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/homepage2.jpg)
}

#heading {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: 'Josefin Sans', sans-serif;
}

#content {
  opacity: 0.8;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
