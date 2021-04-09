<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
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
      <div class="col-3"></div>
    </div>
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
    async editCategory() {
      const newCategory = {
        id : this.id,
        categoryName : this.categoryName,
        description : this.description,
        imageUrl : this.imageUrl,
        products : null
      }

      await axios({
        method: 'post',
        url: this.baseURL+"category/update/"+this.id,
        data : JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
          //sending the event to parent to handle
        this.$emit("fetchData");
        this.$router.push({name:'AdminCategory'});
        swal({
          text: "Category Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'Signin'});
      return;
    }
    this.id = this.$route.params.id;
    this.categoryIndex = this.categories.findIndex(category => category.id == this.id);
    //input fields
    this.categoryName = this.categories[this.categoryIndex].categoryName;
    this.description = this.categories[this.categoryIndex].description;
    this.imageUrl = this.categories[this.categoryIndex].imageUrl;
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
