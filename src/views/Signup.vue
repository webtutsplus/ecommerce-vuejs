<template>
  <div class="signup container">
    <h2>Signup</h2>
    <form @submit="signup">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" required>
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input type="name" class="form-control" v-model="firstName" required>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="name" class="form-control" v-model="lastName" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" v-model="passwordConfirm" required>
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  props : [ "baseURL"],
  data() {
      return {
          email: null,
          firstName: null,
          lastName: null,
          password: null,
          passwordConfirm: null
      }
  },
  methods : {
    signup : async function(e) {
      e.preventDefault();
      if (this.password == this.passwordConfirm) {
        const user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password
        }
        await fetch(this.baseURL + "user/signup", {
            method : "POST",
            body : JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
          if (res.ok) {
            this.$router.replace("/");
            alert("User signup successful. Please Login");
          } else {
            alert("Error occurred while signup");
          }
        })
        .catch((err) => {
          alert(err);
        });
      } else {
        alert("Error! Passwords are not matching.")
      }
    }
  }
}
</script>

<style scoped>
.signup h2{
  text-align : center;
  font-size : 60px;
  margin : 30px 0;
}
.signup-btn{
  margin : 20px 0;
}
</style>