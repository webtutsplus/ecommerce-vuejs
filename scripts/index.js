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
});

// Handle page changes to add-product.html
$("#add-product").on("click", function() {
    window.location.href = "add-product.html";
    console.log("Page should have changed");
});

// Handle form submit for add-product.html
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

// Fill update-form with values from original product
$("#update-form").ready(async function() {
    const id = window.location.href.split("?id=").pop();
    var product = await getProduct(id);

    $("#productNameInput").val(product.name);
    $("#productImageURLInput").val(product.imageURL);
    $("#productPriceInput").val(product.price);
    $("#productDescriptionInput").val(product.description);
});

// Handle form submit for update-product.html
$("#update-form").submit(async function(form) {
    form.preventDefault();

    const id = window.location.href.split("?id=").pop();
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

    var result = await updateProduct(id, product);

    if (result) {
        alert("Product has been update!");
        window.location.href = "index.html";
    } else {
        alert("Failed to update product, sorry");
    }
});

// Handle the creation of update-product url
$("#card-container").on("click", "#edit-btn", function() {
    // Get the id of the product
    var productID = $(this).parent().parent().parent().attr("id");
    var url = "update-product.html" + "?id=" + productID;
    window.location.href = url;
});