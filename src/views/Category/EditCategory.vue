<template>
  <div class="editCategory container">
    <h2>Edit Category</h2>
    <form>
      <div class="form-group">
        <label>Category Name</label>
        <input type="text" class="form-control" v-model="categoryName" required>
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="description" required>
      </div>
      <div class="form-group">
        <label>ImageURL</label>
        <input type="url" class="form-control" v-model="imageUrl" required>
      </div>
      <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id : null,
      categoryName : null, 
      description : null,
      imageUrl : null,
      categoryIndex : null
    }
  },
  props : ["baseURL", "categories"],
  methods : {
    editCategory : async function() {
      const newCategory = {
        id : this.id,
        categoryName : this.categoryName, 
        description : this.description,
        imageUrl : this.imageUrl,
        products : null
      }

      const url = this.baseURL+"category/update/"+this.id.toString(10);
      await fetch(url, {
          method : "POST",
          body : JSON.stringify(newCategory),
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
          this.$router.replace("/category");
          swal({
            text: "Category Updated Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
      })
      .catch((err) => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
    //input fields
    this.categoryName = this.categories[this.categoryIndex].categoryName;
    this.description = this.categories[this.categoryIndex].description;
    this.imageUrl = this.categories[this.categoryIndex].imageUrl;
  }
}
</script>

<style>
.editCategory h2 {
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
</style>