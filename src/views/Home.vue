<template>
  <div class="home-landing">
    <div class="welcome">
      <h1>Webtutsplus Market</h1>
      <p><strong>Shop from a wide range of categories</strong></p>
      <button class="myBtn"><router-link :to="{name : 'Product'}">Start Shopping</router-link></button>
    </div>
  </div>

  <div class="listing">
    <h1>Popular Categories</h1>
    <div class="display-categories" v-if="categories">
      <div v-for="index in this.category_size" :key="index">
        <CategoryCard :category="categories[index-1]"/>
      </div>
    </div>

    <h1>Best Products</h1>
    <div class="display-products" v-if="products">
      <div v-for="index in this.product_size" :key="index">
        <ProductCard :product="products[index-1]"/>
      </div>
    </div>
  </div>

</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue"
import CategoryCard from "../components/Category/CategoryCard.vue"
export default {
  name: 'Home',
  components : {ProductCard, CategoryCard},
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
/* Home Landing */
.home-landing{
  padding : 100px;
  background-image: url("../assets/home.png");
  height: 85vh;
  width: 100%;
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
  color : rgb(241, 23, 132);
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.welcome p{
  font-size : 30px;
  color: rgb(226, 6, 61);
}

@media only screen and (max-width: 700px) {

   .welcome h1{ 
      font-size: 40px; 
   }

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

@media only screen and (max-width: 480px) {

   .welcome h1{ 
      font-size: 30px; 
   }

}

@media only screen and (max-width: 450px) {

   .welcome h1{ 
      font-size: 20px; 
   }
   .welcome p{
     font-size: 20px;
   }
   .welcome{
     max-width: 300px;
   }
   .myBtn{
     font-size:15px
   }

}

</style>