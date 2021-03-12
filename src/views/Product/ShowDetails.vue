<template>

    <div class="container">

      <div class="row">

        <div class="col-sm">
          <img :src="product.imageURL" :alt="product.name" class="img-fluid">
        </div>

        <div class="col-sm">

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

        <div class="col-sm">

            <div class="invisible">
            <button type="button" class="btn btn-success btn-lg .d-none">
              Buy Now 
              <ion-icon name="card-outline" v-pre></ion-icon>
            </button>
            </div>

            <div class="row mt-2">
              <button type="button" class="btn btn-primary btn-lg" @click="addToCart(this.id)">
                Add to Cart   
                <ion-icon name="cart-outline" v-pre></ion-icon>
              </button>
            </div>

            <div class="row mt-2">
              <button class="btn btn-primary btn-lg" :class="{product_added_wishlist: isAddedToWishlist}" @click="addToWishList(this.id)">
                {{wishlistString}}
              </button>
            </div>

            <div class="row mt-2">
              <button type="button" class="btn btn-primary btn-lg" @click="listCartItems()">
                Show Cart
                <ion-icon name="cart-outline" v-pre></ion-icon>
              </button>
            </div>
          
        </div>

      </div>

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
  props : ["baseURL","products", "categories"],
  methods:{
    addToWishList(productId){
            axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
                id:productId
            }).then((response) => {
                if(response.status==201) {
                    this.isAddedToWishlist = true;
                    this.wishlistString = "Added to WishList"
                }
            },(error) =>{
                console.log(error)
            });
        },
    addToCart(productId){
      axios.post(`${this.baseURL}cart/add?token=${this.token}`,{
          productId : productId,
          quantity : this.quantity
      }).then((response) => {
        if(response.status==201){
          swal({
            text: "Product Added to the cart!",
            icon: "success",
            closeOnClickOutside: false,
          });
        }
      },(error) =>{
        console.log(error)
      });
    },

    listCartItems(){
      axios.get(`${this.baseURL}cart/?token=${this.token}`).then((response) => {
        if(response.status===200){
          this.$router.push('/cart')
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
