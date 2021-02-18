<template>
  <div class = "product-display">
    <div class="row">
      <div class="col-6">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid">
      </div>
      <div class="col-4">
        <h1>{{product.name}}</h1>
        <h6 class="category">{{category.categoryName}}</h6>
        <h5>Price: <span>$ {{product.price}}</span></h5>
        <h5>{{product.description}}</h5>
        <div>
        <label>Quantity</label>
        <input type="number" v-model="quantity"/>
        </div>

        <div class="features">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> 
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li> 
          </ul>
        </div>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success btn-lg">
          Buy Now 
          <ion-icon name="card-outline" v-pre></ion-icon>
        </button>
        <button type="button" class="btn btn-primary btn-lg" @click="addToCart(this.id)">
          Add to Cart   
          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button>
        <button :class="{product_added_wishlist: isAddedToWishlist}" @click="addToWishList(this.id)">{{wishlistString}}</button>
        <button type="button" class="btn btn-primary btn-lg" @click="listCartItems()">
          Show Cart
          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      product : {},
      category : {},
      id : null,
      token: null,
      isAddedToWishlist: false,
      wishlistString:"Add to wishlist",
      quantity: 1,
    }
  },
  props : ["products", "categories"],
  methods:{
    addToWishList(productId){
            console.log(this.isAddedToWishlist);
            axios.post("http://localhost:8080/api/wishlist/add?token="+this.token, {
                id:productId
            }).then((response) => {
                console.log(response);
                if(response.status==201) {
                    this.isAddedToWishlist = true;
                    console.log(this.isAddedToWishlist);
                    this.wishlistString = "Added to WishList"
                }
            },(error) =>{
                console.log(error)
            });
        },
    addToCart(productId,quantity){
      alert("Added to cart");
      axios.post("http://localhost:8080/api/cart/add?token="+this.token,{
          productId : productId,
          quantity : this.quantity
      }).then((response) => {
        console.log(response)
        if(response.status==201){
          console.log("Here man");
        }
      },(error) =>{
        console.log(error)
      });
    },

    listCartItems(){
      axios.get("http://localhost:8080/api/cart/?token="+this.token).then((response) => {
        console.log(response)
        if(response.status==200){
          console.log("Success")
        }
      },(error)=>{
        console.log(error)
      });

    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id);
    this.category = this.categories.find(category => category.id == this.product.categoryId);
    this.token = localStorage.getItem('token');
  }
}
</script>

<style>
.product-display{
  margin : 50px;
}

.category{
  background-color: rebeccapurple;
  color : white;
  width : fit-content;
  padding : 5px 10px;
  border-radius : 5px;
}

h5 span{
  font-size: 25px;
  color: red;
}

.product-display img{
  width : 100%;
  height : 100%;
  border-radius : 10px;
}

.features{
  margin-top:50px;
}

.product-display button{
  width : 100%;
  margin-bottom : 10px;
}

.product_added_wishlist{
    background-color: darkolivegreen;
}

</style>