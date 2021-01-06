<template>
  <Navbar :key="key"/>
  <router-view v-if="products && categories"
    :baseURL="baseURL"
    :products="products"
    :categories="categories"
    @fetchData = "fetchData"
    @refreshNav = "refreshNav">
  </router-view>
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
      baseURL : "http://remotedevs.org:8080//api/",
      //baseURL : "http://localhost:8080/api/",
      products : null,
      categories : null,
      key : 0
    }
  },
  components : {Footer, Navbar},
  methods : {
    fetchData : function() {
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
    },
    refreshNav : function () {
      this.key += 1;
    }
  },
  mounted() {
    this.fetchData();
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
