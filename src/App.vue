<template>
  <div class="nav">
      <router-link :to="{name : 'Home'}">
        <img src="./assets/logo.png" alt="Webtutsplus logo" class="logo">
      </router-link>
      <ul class="main-nav">
          <li><router-link :to="{name : 'Home'}" >HOME</router-link></li>
          <li><router-link :to="{name : 'Product'}">PRODUCT</router-link></li>
          <li><router-link :to="{name : 'Category'}">CATEGORY</router-link></li>
      </ul>
  </div>
  <router-view :baseURL="baseURL" :products="products" :categories="categories"></router-view>
  <footer v-show="this.$route.name != 'Home'">
    <div class="container">
      <div class="row">
        <div class="col-6">
            <ul class="footer-nav">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Android App</a></li>
                <li><a href="#">iOS App</a></li>
            </ul>
        </div>
        <div class="col-6">
            <ul class="social-links">
              <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-google"></ion-icon></a></li>
            </ul>
        </div>
      </div>
      <div>
        <p>Webtutsplus Market</p>
      </div>
    </div>
  </footer>
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
.nav{
  background-image: url("./assets/nav-back.png");
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

/* Footer */
footer {
  margin-top : 100px;
  background-color:rgb(51, 51, 51);
  font-size:16px;
}

footer p{
  margin-bottom : 0;
}

.footer-nav {
  list-style: none;
  padding:50px 0 80px 0; 
  float:left;
}

.social-links {
  list-style : none;
  padding:50px 0 80px 0px;
  float:right;
}

.footer-nav li,
.social-links li {
  display:inline-block;
  margin-right:20px;
}

.footer-nav li:last-child,
.social-links li:last-child {
  margin-right:0;
}

.footer-nav li a:link,
.footer-nav li a:visited {
    text-decoration:none;
    border:0;
    color:#888;
    transition : color 0.2s;
}

.footer-nav li a:hover,
.footer-nav li a:active{
  color:#ddd;
}

.social-links li a:link,
.social-links li a:visited {
  text-decoration:none;
  border:0;
  color:#888;
  transition : color 0.2s;
  font-size : 24px;
}

ion-icon[name=logo-facebook],
ion-icon[name=logo-twitter],
ion-icon[name=logo-google],
ion-icon[name=logo-instagram] {
  transition : color 0.2s;
}

ion-icon[name=logo-facebook]:hover,
ion-icon[name=logo-facebook]:active {
  color :#1877f2;
}

ion-icon[name=logo-twitter]:hover,
ion-icon[name=logo-twitter]:active {
  color : #1da1f2;
}

ion-icon[name=logo-google]:hover,
ion-icon[name=logo-google]:active {
  color : #ea4335;
}

ion-icon[name=logo-instagram]:hover,
ion-icon[name=logo-instagram]:active {
  color : #c32aa3;
}

footer p {
  color:#888;
  margin-top:30px;
  padding-bottom:5px;
  text-align:center;
}
</style>
