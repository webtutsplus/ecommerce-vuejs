<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Gallery</h4>
        <router-link id="add-image" :to="{name : 'AddImage'}">
          <button class="btn">Add a new Image</button>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div v-for="image of images" :key="image.name" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <ImageBox :image="image"></ImageBox>
      </div>
    </div>
  </div>
</template>

<script>
import ImageBox from '../../components/Image/ImageBox.vue'
export default {
  name: 'Gallery',
  components : {ImageBox},
  data() {
      return {
          images : null,
      }
  },
  props : ["baseURL"],
  methods : {
    async fetchImages(){
      // fetch products
      await axios.get(this.baseURL + "fileUpload/")
        .then(res => this.images = res.data)
        .catch(err => console.log(err));
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'Signin'});
      return;
    }
    this.fetchImages();
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>
