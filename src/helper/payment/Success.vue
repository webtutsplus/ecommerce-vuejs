<template>
    <h3>Payment is being proccessed!</h3>
</template>

<script>
export default {
    name:'PaymentSuccess',
    props:["baseURL"],
    data() {
    return {
      token: null,
      sessionId:null
    }
  },
  methods:{
      saveOrder() { 
           axios.post(this.baseURL+"order/add/?token="+this.token+"&sessionId="+this.sessionId)
                  .then(()=>{
                     window.location.href = '/order'
                  }).catch((error)=>{
                    console.log(error);
                  })
      }
  },
  mounted(){
      this.token = localStorage.getItem("token");
      this.sessionId = localStorage.getItem("sessionId");
      this.saveOrder()
  }
}
</script>