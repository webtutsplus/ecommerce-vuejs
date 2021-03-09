<template>

    <div>

        <h2>Products ordered</h2>

        <div v-for="itr in this.lengthofOrderItems" :key="itr">

            <div class="product-box">

                <div class="col-4">
                    <img class="img-fluid" v-bind:src="this.orderProducts[itr-1].imgUrl" alt="product-image">
                </div>

                <div class="col-8">

                    <h3 class="product_name">{{this.orderProducts[itr-1].pName}}</h3>
                    <h3 class="product_description">{{this.orderProducts[itr-1].pDescription}}</h3>
                    <h3 class="product_price"><span>$</span>{{this.orderProducts[itr-1].pPrice}} per unit</h3>
                    <h3 class="product_description">Quantity : {{this.orderProducts[itr-1].pQuantity}}</h3>
                    <h3 class="product_description">Total Price : $ {{this.orderProducts[itr-1].pPrice*this.orderProducts[itr-1].pQuantity}}</h3>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {
    
    name:'OrderItems',
    props:["orderID","baseURL"],

    data() {
        return {
            lengthofOrderItems:0,
            orderProducts:[],
            products:[],
            token:null
        }
    },

    methods:{

        getThePrducts(){
            axios.get(`${this.baseURL}order/?token=${this.token}`).then((response) => {
                if(response.status === 200) { 
                    this.products = response.data
                    let len = Object.keys(this.products).length
                    let i,j
                    let paramId=parseInt(this.orderID)
                    for(i=0;i<len;i++){
                        let id=this.products[i].id 
                        if(id === paramId){ 
                            break
                        }
                    }
                    this.lengthofOrderItems = Object.keys(this.products[i].orderItems).length
                    for(j=0;j<this.lengthofOrderItems;j++){
                        this.orderProducts.push({
                            imgUrl:this.products[i].orderItems[j].product.imageURL,
                            pName:this.products[i].orderItems[j].product.name,
                            pDescription:this.products[i].orderItems[j].product.description,
                            pPrice:this.products[i].orderItems[j].product.price,
                            pQuantity:this.products[i].orderItems[j].quantity
                        })
                    }
                }
            },
            (err)=>{
                console.log(err)
            })
        }

    },

    beforeMount(){
        this.token=localStorage.getItem("token")
        this.getThePrducts()
    }

}

</script>

<style>

h2{
    margin-left: 40%;
    font-family: "Courgette", cursive;
}

.product-box{
    background-color: rgb(253, 240, 250);
    border-radius: 10px;
    margin: 20px 0;
    padding: 15px 15px;
    min-height: 250px;
}
.product-box img{
    border-radius : 10px;
}   
.product-box img:hover{
    cursor: pointer;
}
.product_name{
    font-size: 35px;
    margin-right : 120px;
}
.product_name:hover{
    color:rgb(243, 126, 31);
    cursor: pointer;
}
.product_description{
    font-size: 20px;
}
.product_price{
    font-size: 20px;
    color:red;
}
.product_price span{
    font-size:15px;
}

</style>