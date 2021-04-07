<template>
  <Navbar :key="key"  v-if="!['Signup', 'Signin'].includes($route.name)"/>
  <div style="min-height: 60vh">
  <router-view v-if="products && categories"
    :baseURL="baseURL"
    :products="products"
    :categories="categories"
    @fetchData = "fetchData"
    @refreshNav = "refreshNav">
  </router-view>
  </div>
  <Footer v-if="!['Signup', 'Signin'].includes($route.name)"/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
      //baseURL : "http://remotedevs.org:8443/api/",
      baseURL : "http://localhost:8080/api/",
      products : null,
      categories : null,
      key : 0
    }
  },
  components : {Footer, Navbar},
  methods : {
    async fetchData() {
      // fetch products
      await axios.get(this.baseURL + "product/")
      .then(res => this.products = res.data)
      .catch(err => console.log(err))

      //fetch categories
      await axios.get(this.baseURL + "category/")
      .then(res => this.categories = res.data)
      .catch(err => console.log(err))
    },
    refreshNav() {
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
</style>
