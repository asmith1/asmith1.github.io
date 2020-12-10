// Get the modal
var modal = document.getElementById("card");

// Get the button that opens the modal
var btn = document.getElementById("draw-card-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var card =  cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("card-text").innerHTML = card;
  modal.style.display = "block";
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

var cards = [
  "Why are dreidels traditional for Chanukah? <br> a) It's fun to spin them <br>  b) Jews played with tops to make the Greek soldiers <br> think they weren't studying Torah<br>c) They get you chocolate or money!<br>d) Without them, menorahs would be lonely : ( <br> Answer: b",
  "What is a dreidel? <br> a) a UFO <br> b) a kind of dog <br> c) something delicious in my grandma's soup<br>d) it's a top that has four Hebrew letters on it <br> Answer: d"
]

// var cards = ["hello", "hello1", "2", "red bubble gum"]

var card =  cards[Math.floor(Math.random() * cards.length)];
