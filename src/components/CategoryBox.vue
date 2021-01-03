<template>
  <div class="category-box">
      <div class="row">
        <div class="col-4">
            <img class="img-fluid" v-bind:src="category.imageUrl" :alt="category.categoryName" @click="listProducts">
        </div>
        <div class="col-8">
            <router-link :to="{name : 'EditCategory', params : {id : category.id} }" v-show="this.$route.name=='AdminCategory'">
                <button class="btn btn-primary edit_btn">Edit</button>
            </router-link>
            <h3 class="category_name" @click="listProducts">{{category.categoryName}}</h3>
            <h3 class="category_description">{{category.description}}</h3>
            <button type="button" class="see_btn btn btn-lg btn-info" @click="listProducts">See All Products</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "CategoryBox",
    props : ["category"],
    methods : {
        listProducts(){
            this.$router.push({ name: 'ListProducts', params: { id : this.category.id } })
        }
    }
}
</script>

<style>
.category-box{
    background-color: rgb(234, 249, 255);
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px 15px;
}
.category-box img{
    border-radius : 10px;
}   
.category-box img:hover{
    cursor:pointer;
}
.category_name{
    font-size: 35px;
}
.category_name:hover{
    color:rgb(243, 126, 31);
    cursor:pointer;
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