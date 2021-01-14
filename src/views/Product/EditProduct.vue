<template>
  <div class="editProduct container">
    <h2>Edit Product</h2>
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
      <button type="button" class="btn btn-primary" @click="editProduct">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id : null,
      categoryId : 0,
      name : null, 
      description : null,
      imageURL : null,
      price : 0,
      productIndex : null
    }
  },
  props : ["baseURL", "products", "categories"],
  methods : {
    editProduct : async function() {
      const newProduct = {
        id : this.id,
        categoryId : this.categoryId,
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
          if(!res.ok){
            throw Error("Status code error!!");
          }
          //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({name : 'AdminProduct'});
          swal({
            text: "Product Updated Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
      })
      .catch((err) => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.productIndex = this.products.findIndex(product => product.id == this.id);
    //input fields
    this.categoryId = this.products[this.productIndex].categoryId;
    this.name = this.products[this.productIndex].name;
    this.description = this.products[this.productIndex].description;
    this.imageURL = this.products[this.productIndex].imageURL;
    this.price = this.products[this.productIndex].price;
  }
}
</script>

<style>
.editProduct h2 {
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}

</style>