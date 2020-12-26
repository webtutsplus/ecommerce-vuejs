<template>
  <Navbar/>
  <router-view :baseURL="baseURL" :products="products" :categories="categories"></router-view>
  <Footer v-show="this.$route.name != 'Home'" />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
      baseURL : "http://104.236.26.66:8080/api/",
      products : null,
      categories : null,
    }
  },
  components : {Footer, Navbar},
  mounted : async function mounted() {
    // fetch products
    const response1  = await fetch(this.baseURL + "product/");
    this.products = await response1.json();
    //fetch categories
    const response2  = await fetch(this.baseURL + "category/");
    this.categories = await response2.json();
  }
}
</script>

<style>
html{
  overflow-y: scroll;
}
#app {
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
