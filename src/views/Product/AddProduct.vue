<template>
  <div class="addProduct container">
    <h2>Add new Product</h2>
    <form>
      <div class="form-group">
        <label>Category ID</label>
        <input type="number" class="form-control" v-model="category_id" required>
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
      category_id : null,
      name : null, 
      description : null,
      imageURL : null, 
      price : null
    }
  },
  props : ["baseURL", "products"],
  methods : {
    addProduct : async function() {
      const newProduct = {
        category_id : this.category_id,
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
          this.products.push(newProduct);
          this.$router.replace("/product");
          alert("Product Added Successfully!");
      })
      .catch((err) => console.log(err));
    }
  }
}
</script>

<style>
.addProduct h2 {
  font-size : 60px;
  text-align : center;
  margin : 30px 0 30px 0;
}

</style>