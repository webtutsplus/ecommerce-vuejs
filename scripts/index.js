// Functions used to interface with the front-end

// Add the cards to the card container
$("#card-container").ready(async function() {
    var cards = await talkToServer();

    for (const index in cards) {
        var card = cards[index];
        $("#card-container").append(card);
    }
});