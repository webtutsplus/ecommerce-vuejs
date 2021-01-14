<template>
  <div class="card category-card">
    <img :src="category.imageUrl" class="card-img-top" alt="image" @click="listProducts">
    <div class="card-body">
      <p class="name" @click="listProducts">{{category.categoryName}}</p>
      <p class="card-text">{{category.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name : "CategoryCard",
  props : ["category"],
  methods : {
    listProducts(){
      this.$router.push({ name: 'ListProducts', params: { id : this.category.id } })
    }
  }
}
</script>

<style>
.card{
  width : 20rem;
  height : 24rem;
}

.category-card img:hover{
  cursor:pointer;
}

.category-card .name:hover{
  cursor:pointer;
}

p.name{
  font-family: 'Courgette', cursive;
  font-size : 30px;
}
</style>