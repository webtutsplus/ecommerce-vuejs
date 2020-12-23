<template>
  <div class="category-box">
      <div class="row">
        <div class="col-4">
            <img class="img-fluid" v-bind:src="category.imageUrl" :alt="category.categoryName">
        </div>
        <div class="col-8">
            <router-link :to="{name : 'EditCategory', params : {id : category.id} }">
                <button class="btn btn-primary edit_btn">Edit</button>
            </router-link>
            <h3 class="category_name">{{category.categoryName}}</h3>
            <h3 class="category_description">{{category.description}}</h3>
            <button type="button" class="see_btn btn btn-lg btn-info">See All Products</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "CategoryBox",
    props : ["category"]
}
</script>

<style>
.category-box{
    background-color: rgb(246, 241, 245);
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px 15px;
}
.category-box img{
    border-radius : 10px;
}   
.category_name{
    font-size: 35px;
}
.category_name:hover{
    color:rgb(43, 107, 226);
}
.category_description{
    font-size: 20px;
}
.category_price{
    font-size: 20px;
    color:red;
}
.category_price span{
    font-size:15px;
}
.edit_btn{
    float : right;
}
.see_btn{
    margin-top: 68px;
}
.btn:focus {
    outline: none;
    box-shadow: none;
}
</style>