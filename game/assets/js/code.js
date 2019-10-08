function showCard() {
    var i = 0;
    var newCard = Object.keys(card);
    document.getElementById("card").innerHTML = newCard.text;
    var i = i++;
}

$(function(){
    document.getElementById("nextCard").addEventListener("click", showCard);
})