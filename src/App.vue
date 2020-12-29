<template>
    <div class="nav">
        <router-link :to="{name : 'Home'}">
          <img src="./assets/logo.png" alt="Webtutsplus logo" class="logo">
        </router-link>
        <ul class="main-nav">
            <li><router-link :to="{name : 'Home'}" >Home</router-link></li>
            <li><router-link :to="{name : 'Product'}">Product</router-link></li>
            <li><router-link :to="{name : 'Category'}">Category</router-link></li>
            <li><router-link :to="{name : 'Signup'}">Signup</router-link></li>
        </ul>
    </div>
    <router-view :baseURL="baseURL" :products="products" :categories="categories"></router-view>
</template>

<script>
export default {
  data() {
    return {
      baseURL : "http://104.236.26.66:8080/api/",
      products : null,
      categories : null,
    }
  },
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
#app {
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav{
  background-color: #e2c2e9;
  justify-content: center;
  font-size: 25px;
}
.nav img {
  margin : 10px;
  border-radius: 20px;
}
.logo{
  height : 90px;
  width : auto;
  float : left;
  margin-top : 20px;
}
.main-nav {
    float : right;
    list-style: none;
    margin : 35px 0 0 640px;
}
.main-nav li {
    display : inline-block;
    margin-left:40px;
    font-size : 20px;
}
.main-nav a,
.main-nav a:hover{
  color : black;
  text-decoration : none;
}
.main-nav a:hover{
  padding-bottom : 4px;
  border-bottom:2px solid #d612dd;
}
</style>
