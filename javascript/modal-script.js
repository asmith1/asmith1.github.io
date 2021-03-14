// Get the modal
var modal = document.getElementById("card");

// Get the button that opens the modal
var drawCardButton = document.getElementById("draw-card-button");

var showAnswerButton = document.getElementById("show-answer-button");
var cardText = document.getElementById("card-text");
var cardAnswer = document.getElementById("card-answer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var card = {};
var deck2 = [];

// When the user clicks on the button, open the modal
drawCardButton.onclick = function() {
  cardAnswer.innerHTML = null;
  showAnswerButton.innerHTML = "Show answer";
  card = drawCard();
  if (card.answer == null) {
    showAnswerButton.innerHTML = "Close";

  } else {
    showAnswerButton.innerHTML = "Show answer";
  }
  cardText.innerHTML = card.question;
  modal.style.display = "block";
}

showAnswerButton.onclick = function() {
  if (cardAnswer.innerHTML == "" && card.answer != null) {
    cardAnswer.innerHTML = card.answer;
    showAnswerButton.innerHTML = "Close";
  } else {
    cardAnswer.innerHTML = null;
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function drawCard() {
  var card =  deck1[Math.floor(Math.random() * deck1.length)];
  // remove card from the deck1
  const index = deck1.indexOf(card);
  if (index > -1) {
    deck1.splice(index, 1);
  }
  // add card to deck2
  deck2.push(card)

  if (deck1.length == 0) {
    console.log("went through entire deck")
    deck1 = deck2;
  }
  return card;
}
