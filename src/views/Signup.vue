<template>
  <div class="container">
<!--    Logo Div-->
    <div class="row">
      <div class="col-12 text-center pt-3">
        <img id="logo" src="../assets/logo_black.png" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Create Account</h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="name" class="form-control" v-model="firstName" required>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="name" class="form-control" v-model="lastName" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" class="form-control" v-model="passwordConfirm" required>
            </div>
            <button type="submit" class="btn btn-primary mt-2">Signup</button>
          </form>
          <small class="form-text text-muted pt-2 pl-4 text-center">Already Have an Account?</small>
          <p class="text-center"><router-link class="btn btn-dark text-center mx-auto px-5 py-1" :to="{name: 'Signin'}">Signin Here</router-link></p>
        </div>
      </div>
    </div>
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

<style scoped>

.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 0;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}

@media only screen and (min-width: 992px) {
  #signup-div {
    width: 40%;
  }
}
</style>
