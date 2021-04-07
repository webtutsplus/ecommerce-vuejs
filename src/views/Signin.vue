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
        <div id="signin-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Sign-In</h2>
          <form @submit="signin" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <small class="form-text text-muted">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
            <button type="submit" class="btn btn-primary mt-2">
              Signin
              <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <small class="form-text text-muted pt-2 pl-4 text-center">New to Amazon?</small>
          <p class="text-center"><router-link :to="{name: 'Signup'}" class="btn btn-dark text-center mx-auto px-5 py-1">Create Your Amazon Account</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  props : [ "baseURL"],
  data() {
    return {
      email: null,
      password: null,
      loading: null
    }
  },
  methods : {
    async signin(e) {
      e.preventDefault();
      this.loading = true;

      const user = {
        email: this.email,
        password: this.password
      }

      await axios({
        method: 'post',
        url: this.baseURL + "user/signIn",
        data : JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.$emit("refreshNav");
        this.$router.back();
      })
      .catch(err => {
        swal({
          text: "Unable to Log you in!",
          icon: "error",
          closeOnClickOutside: false,
        });
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      })
    }
  },
  mounted() {
    this.loading = false;
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
  #signin-div {
    width: 40%;
  }
}


</style>
