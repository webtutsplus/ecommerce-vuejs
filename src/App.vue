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
    fetch(this.baseURL + "product/")
      .then(res => res.json())
      .then(data => this.products = data)
      .catch(err => console.log(err));

    //fetch categories
    fetch(this.baseURL + "category/")
      .then(res => res.json())
      .then(data => this.categories = data)
      .catch(err => console.log(err));
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
