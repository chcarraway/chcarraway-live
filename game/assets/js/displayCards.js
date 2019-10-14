card = Object.keys(cards);
area = document.getElementById('gameArea');
cat = "";

function displayCards() {
    for (x = 0; x < cards.length; x++) {
        var newCard = cards[card[x]];
        if (newCard.header === "") { //if card is blank, ignore this card and move on to the next
        } else { //display card
            if (newCard.nac === "nac") {//if card is not a card, make new container for the category
                area.innerHTML += '<div class="row border category" id="' + newCard.category + '"></div>';
                cat = document.getElementById(newCard.category);
                cat.innerHTML += '<div class="card nac shadow ' + newCard.category + '"><h3 class="">' + newCard.header + '</h3><h6 class="">' + newCard.body + '</h6></div>';
            } else {//print card in category
                
                if (typeof newCard.contrib === "undefined") {
                    cat.innerHTML += '<div class="card shadow ' + newCard.category + '"><h3 class="">' + newCard.header + '</h3><h6 class"">' + newCard.body + '</h6></div>';
                } else {
                    cat.innerHTML += '<div class="card shadow ' + newCard.category + '"><h3 class="">' + newCard.header + '</h3><h6 class="">' + newCard.body + '</h6><p class="contrib">' + newCard.contrib + '</p></div>';
                }
            }
        }    
    }
}