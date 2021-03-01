<template>
  <div class="nav">
    <router-link :to="{name : 'Home'}">
      <img src="../assets/logo.png" alt="Webtutsplus logo" class="logo">
    </router-link>
    <ul class="main-nav">
      <li>
        <router-link v-if="!token" :to="{name: 'Signin'}">WISHLIST</router-link>
        <router-link v-else :to="{name : 'Wishlist'}" >WISHLIST</router-link>
      </li>
      <li><router-link :to="{name : 'Home'}" >HOME</router-link></li>
      <li><router-link :to="{name : 'Product'}">PRODUCT</router-link></li>
      <li><router-link :to="{name : 'Category'}">CATEGORY</router-link></li>
      <li><router-link :to="{name : 'Cart'}">CART</router-link></li>
      <li><router-link :to="{name : 'Checkout'}">CHECKOUT</router-link></li>
      <li><router-link :to="{name : 'Order'}">ORDERS</router-link></li>
      <li>|</li>
      <li><router-link :to="{name: 'Admin'}">ADMIN</router-link></li>
      <li>
        <router-link v-if="!token" :to="{name: 'Signin'}">SIGNIN</router-link>
        <a v-if="token" href="#" @click="signout">SIGNOUT</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "Navbar",
  data() {
    return {
      token: null
    }
  },
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.push({name:'Home'});
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem('token');
  }
}
</script>

<style>
.nav{
  background-image: url("../assets/nav-back.jpg");
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
  font-size : 19px;
}
.main-nav a,
.main-nav a:hover{
  font-weight:700;
  color : rgb(85, 49, 25);
  text-decoration : none;
}
.main-nav a:hover{
  padding-bottom : 5px;
  border-bottom:2px solid #4d380c;
}
</style>