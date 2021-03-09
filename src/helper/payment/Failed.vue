<template>
    <h3>Payment Failed</h3>
</template>

<script>
export default {
    name:'FailedPayment',
    mounted(){
        localStorage.removeItem("sessionId")
        window.location.href = '/order'
    }
}
</script>