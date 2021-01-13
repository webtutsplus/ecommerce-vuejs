<template>
  <div class="image-box">
    <img :src="image.url" :alt="image.name" class="img-fluid">
  </div>
</template>

<script>
export default {
    name : 'ImageBox',
    props : ["image"]
}
</script>

<style>
.image-box{
  width:300px;
  height:300px;
  margin : 20px;
}

.image-box img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding : 5px;
  border : .5px solid rgb(216, 216, 216);
}

.images-box img:hover{
  transform: scale(1.1);
  transition: transform 0.2s;
}
</style>