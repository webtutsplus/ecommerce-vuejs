<template>
  <div class="home-landing">
    <div class="welcome">
      <h1>Webtutsplus Market</h1>
      <p>Shop from a wide range of categories</p>
      <button class="myBtn"><router-link :to="{name : 'Product'}">Start Shopping</router-link></button>
    </div>
  </div>

  <div class="listing">
    <h1>Popular Categories</h1>
    <div class="display-categories" v-if="products">
      <div v-for="index in 4" :key="index">
        <CategoryCard :category="categories[index-1]"/>
      </div>
    </div>

    <h1>Best Products</h1>
    <div class="display-products" v-if="categories">
      <div v-for="index in 4" :key="index">
        <ProductCard :product="products[index-1]"/>
      </div>
    </div>
  </div>

</template>

<script>
import ProductCard from "../components/ProductCard"
import CategoryCard from "../components/CategoryCard"
export default {
  name: 'Home',
  components : {ProductCard, CategoryCard},
  props : ["baseURL", "products", "categories"],
  emits : ["fetchData"]
}
</script>

<style>
/* Home Landing */
.home-landing{
  padding : 100px;
  background-image: url("../assets/6.jpg");
  height : 85.5vh;
  background-size: cover;
  text-align: center;
}
.welcome{
  padding : 50px;
  max-width : 600px;
  max-height : 600px;
  background: rgba(255,255,255,.2);
  border-radius : 20px;
  box-shadow : 0 5px 15px rgba(0,0,0,0.5);
}
.welcome h1{
  font-size: 80px;
  color : rgb(255, 255, 255);
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.welcome p{
  font-size : 30px;
  color: white;
}
.myBtn{
  font-size: 20px;
  background: rgb(73, 76, 224);
  border : none;
  border-radius: 50px;
  padding:10px 20px;
}
.myBtn:focus{
  outline: none;
  box-shadow: none;
}
.myBtn a,
.myBtn a:hover{
  color : white;
  text-decoration: none;
}

/* Listing */
.listing h1{
  text-align: center;
  margin-top: 70px;
}
.listing h1:after {
  display: block;
  height: 2px;
  background-color: #95673f;
  content:" ";
  width:100px;
  margin : 30px auto;
}
.display-categories,
.display-products{
  margin-top : 70px;
  display : flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>