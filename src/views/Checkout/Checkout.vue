<template>
  <div class="div_class">
  <h3>This is the checkout page. Product details are hardcoded.Change it when integrated with Products</h3>

    <button class="btn btn-primary mt-3" id="proceed-to-checkout" v-on:click="goToCheckout()">
            Go to Checkout
    </button>

  </div>
</template>
<script>
export default {
        data(){
            return {
                stripeAPIToken: 'pk_test_51Hr18ILR0wfBoBqmrZFhIWWOk0CA8PFS3cEMwh4S1S6jRUzVucZ26dbGIYRk5ezdYlMgUkQmYHGJOsKR35uEHgvV00IXALUhYx',
    
                stripe: '',
                price : 20,
                quantity : 7,
                productName : "Writometer",
                productId : 2,
            }
        },

        name:'Checkout',
        props:["products","totalPrice","baseURL"],
    
        mounted(){
            this.includeStripe('js.stripe.com/v3/', function(){
                this.configureStripe();
            }.bind(this) );
        },
    
        methods: {
            /*
                Includes Stripe.js dynamically
            */
            includeStripe( URL, callback ){
                let documentTag = document, tag = 'script',
                    object = documentTag.createElement(tag),
                    scriptTag = documentTag.getElementsByTagName(tag)[0];
                object.src = '//' + URL;
                if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
                scriptTag.parentNode.insertBefore(object, scriptTag);
            },
    
            /*
                Configures Stripe by setting up the elements and 
                creating the card element.
            */
            configureStripe(){
                this.stripe = Stripe( this.stripeAPIToken );
    
                this.elements = this.stripe.elements();
            
            },

            goToCheckout(){
                axios.post(this.baseURL+"order/create-checkout-session",{
                     /*price : this.price,
                     quantity : this.quantity ,
                     productName : this.productName,
                     productId : this.productId*/
                     products:this.products
                }).then((response)=>{
                  console.log("Session id : " + JSON.stringify(response))
                  return response.data;
                }).then((session)=>{
                   return this.stripe.redirectToCheckout({ sessionId: session.sessionId });
                }).then((result)=>{
                  console.log(result)
                  
                  axios.post(this.baseURL+"order/add/?token="+this.token,{
                      productId: this.productId,
                      quantity: this.quantity 
                  }).then((response)=>{
                     console.log(response.data)
                  },(error)=>{
                    console.log(error);
                  })

                })
            }
        }
    
    }
    
</script>
 <style >
.div_class{
    margin-top: 5%;
    margin-left: 40%;
}
</style>