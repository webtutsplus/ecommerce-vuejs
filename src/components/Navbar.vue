<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top sticky-top">
    <a class="navbar-brand" href="/"><img id="logo" src="../assets/logo.png" class="img-fluid" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">

       <li class="nav-item">
            <h5><strong><router-link class="nav-link" v-if="!token" :to="{name: 'Signin'}">WISHLIST</router-link>
            <router-link class="nav-link" v-else :to="{name : 'Wishlist'}" >WISHLIST</router-link></strong></h5>
       </li>

        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name : 'Home'}" >HOME</router-link></li></strong></h5>
        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name : 'Product'}">PRODUCT</router-link></li></strong></h5>
        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name : 'Category'}">CATEGORY</router-link></li></strong></h5>
        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name : 'Cart'}">CART</router-link></li></strong></h5>
        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name : 'Order'}">ORDERS</router-link></li></strong></h5>
        <h5><strong><li class="nav-item"><router-link class="nav-link" :to="{name: 'Admin'}">ADMIN</router-link></li></strong></h5>
        <h5><strong><li class="nav-item">
          <router-link class="nav-link" v-if="!token" :to="{name: 'Signin'}">SIGNIN</router-link>
          <a class="nav-link" v-if="token" href="#" @click="signout">SIGNOUT</a>
        </li></strong></h5>


      </ul>
    </div>
  </nav>

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

<style scoped>
 #logo {
    width: 70%;
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgb(233, 42, 42);
  }
</style>