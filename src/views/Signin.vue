<template>
  <div class="signin container">
    <h2>Signin</h2>
    <form @submit="signin">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Signin</button>
  </form>
  <br/>
  Don't have an account?&nbsp;&nbsp;<router-link :to="{name: 'Signup'}">Signup Here</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  props : [ "baseURL"],
  data() {
      return {
          email: null,
          password: null
      }
  },
  methods : {
    signin : async function(e) {
        e.preventDefault();
        const user = {
            email: this.email,
            password: this.password
        }
        await fetch(this.baseURL + "user/signIn", {
            method : "POST",
            body : JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
          if (res.ok) {
            this.$router.replace("/");
            alert("User signin successful.");
          } else{
            alert("Error occurred while signing in");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
}
</script>

<style scoped>
.signin h2{
    text-align : center;
    font-size : 60px;
    margin : 30px 0;
}
</style>