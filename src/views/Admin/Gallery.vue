<template>
  <div class="images-box container">
    <h2>Gallery</h2>

    <router-link :to="{name : 'AddImage'}">
      <button type="button" class="btn btn-success add-btn btn-lg">Add a new Image</button>
    </router-link>

    <div v-if="images" class="images-display">
      <div v-for="image of images" :key="image.name">
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
    this.fetchImages();
  }
}
</script>

<style>
.images-box h2{
  font-family: 'Courgette', cursive;
  font-size : 60px;
  text-align : center;
  margin : 70px 0;
}
.images-display{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.images-box .add-btn{
  margin : 20px;
}
</style>