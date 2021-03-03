<template>
  <div class="div_class">
  <h3>You will be redirected to payment page</h3>

    <button class="btn btn-primary mt-3" id="proceed-to-checkout" v-on:click="goToCheckout()">
           Checkout
    </button>

  </div>
</template>
<script>
export default {
        data(){
            return {
                stripeAPIToken: 'pk_test_51Hr18ILR0wfBoBqmrZFhIWWOk0CA8PFS3cEMwh4S1S6jRUzVucZ26dbGIYRk5ezdYlMgUkQmYHGJOsKR35uEHgvV00IXALUhYx',
                stripe: '',
                token:null,
                sessionId:null
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
                let checkoutBodyArray = [];
                let i=0
                for(i=0;i<Object.keys(this.products).length;i++){
                    checkoutBodyArray.push({
                        imageUrl:this.products[i].imgUrl ,
                        productName:this.products[i].pName,
                        quantity:this.products[i].pQuantity,
                        price:this.products[i].pPrice,
                        productId:this.products[i].pId,
                        userId:this.products[i].userId
                    })
                }
                axios.post(this.baseURL+"order/create-checkout-session/?baseURL=",
                   checkoutBodyArray
                ).then((response)=>{
                  localStorage.setItem("sessionId",response.data.sessionId);
                  return response.data;
                }).then((session)=>{
                   return this.stripe.redirectToCheckout({ sessionId: session.sessionId });
                })
            },
            mounted(){
                this.token = localStorage.getItem("token");
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