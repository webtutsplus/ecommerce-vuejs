// Useful functions to have

// Function to talk to the server and return a bunch of products
async function getAllProducts() {
    var products = [];
    var cards = [];
    const errorMessage = "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";
    
    await fetch('http://remotedevs.org:8080/api/product/', {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => products = data)
    .catch(_ => cards.push(errorMessage));

    if (products.length > 0 && cards.length < 1) {
        for (const index in products) {
            var product = products[index];
        
            var productID = product.id;
            var productName = product.name;
            var productImageURL = product.imageURL;
            var productPrice = product.price;
            var productDescription = product.description;

            var card = `
                <div class="col-sm" id=${productID}>
                    <div class="card bg-dark" style="width: 18rem;">
                        <img class="card-img-top" src=${productImageURL} alt="Product Image">
                        <div class="card-body text-white">
                            <h5 class="card-title">${productName}</h5>
                            <p class="card-text">${productDescription}</p>
                            <br />
                            <p><strong>Price: $</strong> ${productPrice}</p>
                        </div>
                        <div class="card-footer bg-transparent text-center">
                            <button type="button" class="btn btn-outline-warning btn-lg btn-block" id="buy-btn">Buy Product</button>
                        </div>
                    </div>
                </div>
            `;

            cards.push(card);
        }
    } else if (products.length < 1 && cards.length < 1) {
        cards.push(errorMessage);
    }

    return cards;
}

// Create a new product
async function createNewProduct(product) {
    var result = false;

    await fetch('http://remotedevs.org:8080/api/product/add/', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(_ => result = true)
    .catch(_ => result = false);

    return result;
}