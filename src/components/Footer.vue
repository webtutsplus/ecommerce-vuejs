<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <ul class="footer-nav">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Android App</a></li>
            <li><a href="#">iOS App</a></li>
          </ul>
        </div>
        <div class="col-6">
          <ul class="social-links">
            <li><a href="#"><ion-icon name="logo-facebook" v-pre></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter" v-pre></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram" v-pre></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-google" v-pre></ion-icon></a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>Webtutsplus Market</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name : "Footer"
}
</script>

<style>
footer {
  margin-top : 100px;
  background-color:rgb(51, 51, 51);
  font-size:16px;
}

footer p{
  margin-bottom : 0;
}

.footer-nav {
  list-style: none;
  padding:50px 0 80px 0; 
  float:left;
}

.social-links {
  list-style : none;
  padding:50px 0 80px 0px;
  float:right;
}

.footer-nav li,
.social-links li {
  display:inline-block;
  margin-right:20px;
}

.footer-nav li:last-child,
.social-links li:last-child {
  margin-right:0;
}

.footer-nav li a:link,
.footer-nav li a:visited {
    text-decoration:none;
    border:0;
    color:#888;
    transition : color 0.2s;
}

.footer-nav li a:hover,
.footer-nav li a:active{
  color:#ddd;
}

.social-links li a:link,
.social-links li a:visited {
  text-decoration:none;
  border:0;
  color:#888;
  transition : color 0.2s;
  font-size : 24px;
}

ion-icon[name=logo-facebook],
ion-icon[name=logo-twitter],
ion-icon[name=logo-google],
ion-icon[name=logo-instagram] {
  transition : color 0.2s;
}

ion-icon[name=logo-facebook]:hover,
ion-icon[name=logo-facebook]:active {
  color :#1877f2;
}

ion-icon[name=logo-twitter]:hover,
ion-icon[name=logo-twitter]:active {
  color : #1da1f2;
}

ion-icon[name=logo-google]:hover,
ion-icon[name=logo-google]:active {
  color : #ea4335;
}

ion-icon[name=logo-instagram]:hover,
ion-icon[name=logo-instagram]:active {
  color : #c32aa3;
}

footer p {
  color:#888;
  margin-top:30px;
  padding-bottom:5px;
  text-align:center;
}
</style>