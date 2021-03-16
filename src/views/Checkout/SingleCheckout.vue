<template>
  <div class="div_class">
    <h3>You will be redirected to payment page</h3>

    <div class="alert alert-primary" role="alert">
      While making payment use card number 4242 4242 4242 4242 and enter random cvv(3 digit)
    </div>

    <button class="checkout_button" id="proceed-to-checkout" @click="goToCheckout()">
      Make payment
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stripeAPIToken: process.env.VUE_APP_STRIPETOKEN,
      stripe: '',
      token: null,
      sessionId: null,
      checkoutBody: {},
      userid: '',
      quantity: ''
    }
  },
  name: "SingleCheckout",
  props: ["baseURL","products", "categories"],

  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id)
    this.quantity = this.$route.params.quantity;
    this.product = this.products.find(product => product.id == this.id);
    this.token = localStorage.getItem("token");
    if (typeof (this.$route.params.id) === "undefined") {
      this.$router.push({name: 'Home'})
    }
    this.includeStripe('js.stripe.com/v3/', function () {
      this.configureStripe();
    }.bind(this));
    this.getAllItems()
  },

  methods: {
    /*
        Includes Stripe.js dynamically
    */
    includeStripe(URL, callback) {
      let documentTag = document, tag = 'script',
          object = documentTag.createElement(tag),
          scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = '//' + URL;
      if (callback) {
        object.addEventListener('load', function (e) {
          callback(null, e);
        }, false);
      }
      scriptTag.parentNode.insertBefore(object, scriptTag);
    },

    /*
        Configures Stripe by setting up the elements and
        creating the card element.
    */
    configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken);
    },
    async getuserid() {
      let id = -2
      await axios.get(`${this.baseURL}user/getuserid?token=${this.token}`).then(resp => {
        if (resp.status === 200) {
          id = resp.data
        }
      });
      return id
    },
    getAllItems() {
      this.userid = this.getuserid();
      console.log(this.userid)
      this.quantity = this.$route.params.quantity;
      console.log(this.quantity)
      // axios.get(`${this.baseURL}cart/?token=${this.token}`).then((response) => {
      //   if (response.status == 200) {
      //     let products = response.data
      //     let len = Object.keys(products.cartItems).length
      //     for (let i = 0; i < len; i++)
      this.checkoutBody = {
        imageUrl: this.product.imageURL,
        productName: this.product.name,
        quantity: this.quantity,
        price: this.product.price,
        productId: this.product.id,
        userId: parseInt(this.userid)
      }
      //   }
      // }, err => {
      //   console.log(err)
      // })
    },

    goToCheckout() {
      axios.post(this.baseURL + "order/single-checkout?token="+this.token,
          this.checkoutBody
      ).then((response) => {
        localStorage.setItem("sessionId", response.data.sessionId)
        return response.data
      }).then((session) => {
        return this.stripe.redirectToCheckout({sessionId: session.sessionId})
      })
    }

  }
}
</script>

<style scoped>
.alert {
  width: 50%;
}

.div_class {
  margin-top: 5%;
  margin-left: 30%;
}

.checkout_button {
  background-color: #5d3dec;
  border: none;
  color: white;
  margin-left: 15%;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
}

.checkout_button:focus {
  outline: none;
  box-shadow: none;
}

.checkout_button:disabled {
  background-color: #9b86f7;
  border: none;
  color: white;
  margin-left: 15%;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
  cursor: not-allowed;
}

</style>

