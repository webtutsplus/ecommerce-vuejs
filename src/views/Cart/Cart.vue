<template>
  <div class="cart-box container">
    <h2>Cart</h2>
    <div v-if="carts">
        <div v-for="cart of carts" :key="cart.id">
        <CartItemBox :cart="cart">
        </CartItemBox>
        </div>
    </div>
  </div>
</template>

<script>
import CartItemBox from "../../components/Product/CartItemBox";
export default {
  data() {
    return {
      carts: null,
      token: null,
    }
  },
  name: 'Cart',
  props: ["baseURL"],
  components : {CartItemBox}, 
  methods: {
     listCartItems(){
      alert("List cart items");
      axios.get("http://localhost:8080/api/cart/?token="+this.token).then((response) => {
        console.log(response)
        if(response.status==200){
          console.log("Success")
          this.carts= response.data;
          console.log("cart ::::: " + this.carts)
        }
      },(error)=>{
        console.log(error)
      });

    }

  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>
<style>
.cart-box h2 {
  font-family: "Courgette", cursive;
  font-size: 60px;
  text-align: center;
  margin: 70px 0;
}
.add-btn {
  margin: 20px 0;
}
</style>