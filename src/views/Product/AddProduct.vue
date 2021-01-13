<template>
  <div class="addProduct container">
    <h2>Add new Product</h2>
    <form>
      <div class="form-group">
        <label>Category</label>
        <select class="form-control" v-model="categoryId" required>
          <option v-for="category of categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name" required>
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="description" required>
      </div>
      <div class="form-group">
        <label>ImageURL</label>
        <input type="url" class="form-control" v-model="imageURL" required>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" v-model="price" required>
      </div>
      <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id : null,
      categoryId : null,
      name : null, 
      description : null,
      imageURL : null, 
      price : null
    }
  },
  props : ["baseURL", "products", "categories"],
  methods : {
    addProduct : async function() {
      const newProduct = {
        id : this.id,
        categoryId : this.categoryId,
        name : this.name, 
        description : this.description,
        imageURL : this.imageURL,
        price : this.price 
      }

      await fetch(this.baseURL+"product/add", {
          method : "POST",
          body : JSON.stringify(newProduct),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((res) => {
          if(!res.ok){
            throw Error("Status code error!!");
          }
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.replace("/product");
          swal({
            text: "Product Added Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
      })
      .catch((err) => console.log(err));
    }
  }
}
</script>

<style>
.addProduct h2 {
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}

</style>