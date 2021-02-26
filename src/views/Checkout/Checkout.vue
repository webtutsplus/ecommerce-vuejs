<template>
      <div>
        <h3>Manage Your Subscription</h3>

        <label>Card Holder Name</label>
        <input id="card-holder-name" type="text" v-model="name" class="form-control mb-2">

        <label>Card</label>
        <div id="card-element">

        </div>

          <button class="btn btn-primary mt-3" id="add-card-button" v-on:click="submitPaymentMethod()">
            Save Payment Method
        </button>
    </div>
</template>

<script>
export default {
   data(){
        return {
            stripeAPIToken: 'pk_test_51Hr18ILR0wfBoBqmrZFhIWWOk0CA8PFS3cEMwh4S1S6jRUzVucZ26dbGIYRk5ezdYlMgUkQmYHGJOsKR35uEHgvV00IXALUhYx',
            
          stripe: '',
          elements: '',
          card: '',
          intentToken: '',
           name: '',
                addPaymentStatus: 0,
                addPaymentStatusError: ''
        }
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
    configureStripe(){
    this.stripe = Stripe( this.stripeAPIToken );

    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');

    this.card.mount('#card-element');
  },

  loadIntent(){
    axios.get('http://localhost:8080/api/checkout/get-setup-intent')
        .then( function( response ){
          console.log("Load intent : " + response)
            this.intentToken = response.data;
        }.bind(this));
},
submitPaymentMethod(){
  console.log("Triggered this");
}
  
  // submitPaymentMethod(){
  //   this.addPaymentStatus = 1;

  //   this.stripe.confirmCardSetup(
  //       this.intentToken.client_secret, {
  //           payment_method: {
  //               card: this.card,
  //               billing_details: {
  //                   name: this.name
  //               }
  //           }
  //       }
  //   ).then(function(result) {
  //       if (result.error) {
  //           this.addPaymentStatus = 3;
  //           this.addPaymentStatusError = result.error.message;
  //       } else {
  //           this.savePaymentMethod( result.setupIntent.payment_method );
  //           this.addPaymentStatus = 2;
  //           this.card.clear();
  //           this.name = '';
  //       }
  //   }.bind(this));

    

    },
    mounted(){
    this.includeStripe('js.stripe.com/v3/', function(){
        this.configureStripe();
    }.bind(this) );
     this.loadIntent();
  }



}
</script>
