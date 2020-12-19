// Functions used to interface with the front-end

// Add the cards to the card container
$("#card-container").ready(async function() {
    var cards = await getAllProducts();

    for (const index in cards) {
        var card = cards[index];
        $("#card-container").append(card);
    }
});

// Alert the user when they "bought" a product
$("#card-container").on("click", "#buy-btn", function() {
    alert("Thank you for supporting https://www.webtutsplus.com");
    // window.location.href = "index.html";
});

// Handle page changes to add-product.html
$("#add-product").on("click", function() {
    window.location.href = "add-product.html";
    console.log("Page should have changed");
});

// Handle form submit
$("#product-form").submit(async function(form) {
    form.preventDefault();

    const name = $("#productNameInput").val();
    const url = $("#productImageURLInput").val();
    const price = $("#productPriceInput").val();
    const description = $("#productDescriptionInput").val();

    const product = {
        "name": name,
        "imageURL": url,
        "price": price,
        "description": description
    };

    var result = await createNewProduct(product);

    if (result) {
        alert("Product has been added!");
        window.location.href = "index.html";
    } else {
        alert("Failed to add product, sorry");
    }
});