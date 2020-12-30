<template>
  <div class="addCategory container">
    <h2>Create new Category</h2>
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
        <input type="url" class="form-control" v-model="imageURL" required>
      </div>
      <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categoryName : null,
      description : null,
      imageURL : null, 
    }
  },
  props : ["baseURL", "categories"],
  methods : {
    addCategory : async function() {
      const newCategory = {
        categoryName : this.categoryName,
        description : this.description,
        imageUrl : this.imageURL,
      }
      await fetch(this.baseURL+"category/create", {
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
          alert("Category Added Successfully!");
      })
      .catch((err) => console.log(err));
    }
  }
}
</script>

<style>
.addCategory h2 {
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
</style>