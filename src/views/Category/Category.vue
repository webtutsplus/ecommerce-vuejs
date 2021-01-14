<template>
  <div class="categories-box container">
    <h2>All Categories</h2>
    <router-link :to="{name : 'AddCategory'}" v-show="this.$route.name=='AdminCategory'">
      <button type="button" class="btn btn-success add-btn btn-lg">Add a new Category</button>
    </router-link>
    <div v-for="category of categories" :key="category.id">
      <CategoryBox :category="category">
      </CategoryBox>
    </div>
  </div>
</template>

<script>
import CategoryBox from '../../components/Category/CategoryBox';
export default {
  name: 'Category',
  components : {CategoryBox}, 
  props : [ "baseURL" , "categories" ],
}
</script>

<style>
.categories-box h2{
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
.add-btn{
  margin : 20px 0;
}
</style>