card = Object.keys(cards);
area = document.getElementById('gameArea');
function displayCards() {
    for (x = 0; x < cards.length; x++) {
        var newCard = cards[card[x]];
        if (newCard.header === "") { //if card is blank, ignore this card and move on to the next
        } else { //display card
            area.innerHTML += '<div class="card shadow"><h3>' + newCard.header + '</h3><br/><h6>' + newCard.body + '</h6></div>';
        }
    }
}