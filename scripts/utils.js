// Useful functions to have

// Function to talk to the server and return a bunch of products
async function talkToServer() {
    var products = [];
    var cards = [];
    
    await fetch('http://remotedevs.org:8080/api/product/', {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => products = data);

    /*
    {
        "id": 1,
        "name": "Adidas Final UCL Ball",
        "imageURL": "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": 3500,
        "description": "This is a football"
    }
    */
    for (const index in products) {
        var product = products[index];
    
        var productID = product.id;
        var productName = product.name;
        var productImageURL = product.imageURL;
        var productPrice = product.price;
        var productDescription = product.description;

        var card = `
            <div class="col" id=${productID}>
                <div class="card bg-dark" style="width: 18rem;">
                    <img class="card-img-top" src=${productImageURL} alt="Product Image">
                    <div class="card-body text-white">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">${productDescription}</p>
                        <br />
                        <p><strong>Price: $</strong> ${productPrice}</p>
                    </div>
                    <div class="card-footer bg-transparent text-center">
                        <button type="button" class="btn btn-warning btn-lg btn-block">Buy Product</button>
                    </div>
                </div>
            </div>
        `;

        cards.push(card);
    }

    return cards;
}