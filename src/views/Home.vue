<template>
  <section>
    <div class="welcome">
      <h1>Webtutsplus Market</h1>
      <p>Shop from a wide range of categories</p>
      <button class="myBtn"><router-link :to="{name : 'Product'}">Start Shopping</router-link></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  props : ["baseURL"],
}
</script>

<style>
section{
  padding : 100px;
  background-image: url("../assets/6.jpg");
  height : 85.5vh;
  background-size: cover;
  text-align: center;
}
.welcome{
  padding : 50px;
  max-width : 600px;
  max-height : 600px;
  background: rgba(255,255,255,.2);
  border-radius : 20px;
  box-shadow : 0 5px 15px rgba(0,0,0,0.5);
}
.welcome h1{
  font-size: 80px;
  color : rgb(255, 255, 255);
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.welcome p{
  font-size : 30px;
  color: white;
}
.myBtn{
  font-size: 20px;
  background: rgb(73, 76, 224);
  border : none;
  border-radius: 50px;
  padding:10px 20px;
}
.myBtn:focus{
  outline: none;
  box-shadow: none;
}
.myBtn a,
.myBtn a:hover{
  color : white;
  text-decoration: none;
}
</style>