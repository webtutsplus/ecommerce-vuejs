<template>
  <div class="image-box">
    <img :src="image.url" :alt="image.name" class="img-fluid my-image" ref="rimage">
    <div class="middle">
      <button class="btn btn-info" @click="copyToClipboard">Copy Address</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ImageBox',
  props : ["image"],
  methods : {
    copyToClipboard(){
      const image = this.$refs.rimage;
      
      // new element needs to be created before coping to clipboard
      const el = document.createElement('textarea');
      el.value = image.src;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      swal({
        text: "Image Address copied to Clipboard!",
        icon: "success",
        closeOnClickOutside: false,
      });
    }
  }
}
</script>

<style>
.image-box{
  position : relative;
  width:300px;
  height:300px;
  margin:20px;
}

.image-box img{
  opacity : 1;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  border-radius: 5px;
  padding : 5px;
  border : .5px solid rgb(216, 216, 216);
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.image-box:hover .my-image {
  transform: scale(1.1);
  transition: transform 0.2s ease;
  opacity: 0.3;
}

.image-box:hover .middle {
  opacity: 1;
}
</style>

