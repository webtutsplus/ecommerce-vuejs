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
  <br/>
  Already have an account?&nbsp;&nbsp;<router-link :to="{name: 'Signin'}">Signin Here</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  props : ["baseURL"],
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
    async signup(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password
        }

        await axios({
          method : 'post',
          url : this.baseURL + "user/signup",
          data : JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.$router.replace("/");
          swal({
            text: "User signup successful. Please Login",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        swal({
          text: "Error! Passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    }
  }
}
</script>

<style>
.signup h2{
  text-align : center;
  font-size : 60px;
  margin : 30px 0;
}
</style>