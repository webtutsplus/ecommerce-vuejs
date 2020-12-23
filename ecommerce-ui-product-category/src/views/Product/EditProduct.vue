<template>
  <div class="editProduct container">
    <h2>Edit Product</h2>
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
      <button type="button" class="btn btn-primary" @click="editProduct">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      category_id : 0,
      name : null, 
      description : null,
      imageURL : null,
      price : 0,
      productIndex : null,
      id : null
    }
  },
  props : ["baseURL", "products"],
  methods : {
    editProduct : async function() {
      const newProduct = {
        category_id : this.category_id,
        name : this.name, 
        description : this.description,
        imageURL : this.imageURL,
        price : this.price 
      }
      const url = this.baseURL+"product/update/"+this.id.toString(10);

      await fetch(url, {
          method : "POST",
          body : JSON.stringify(newProduct),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((res) => {
          this.products[this.productIndex] = newProduct;
          this.$router.replace("/product");
          alert("Product Updated Successfully!");
      })
      .catch((err) => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.productIndex = this.products.findIndex(product => product.id == this.id);
    //input fields
    this.category_id = this.products[this.productIndex].category_id;
    this.name = this.products[this.productIndex].name;
    this.description = this.products[this.productIndex].description;
    this.imageURL = this.products[this.productIndex].imageURL;
    this.price = this.products[this.productIndex].price;
  }
}
</script>

<style>
.editProduct h2 {
  font-size : 60px;
  text-align : center;
  margin : 30px 0 30px 0;
}

</style>