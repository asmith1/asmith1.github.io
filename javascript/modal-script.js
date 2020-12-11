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


// When the user clicks on the button, open the modal
drawCardButton.onclick = function() {
  // console.log(cards)
  cardAnswer.innerHTML = null;
  showAnswerButton.innerHTML = "Show answer";
  card =  cards[Math.floor(Math.random() * cards.length)];
  if (card.answer == null) {
    showAnswerButton.style.display = "none";
  } else {
    showAnswerButton.style.display = "block";
  }
  cardText.innerHTML = card.question;
  modal.style.display = "block";
}

showAnswerButton.onclick = function() {
  if (cardAnswer.innerHTML == "") {
    cardAnswer.innerHTML = card.answer;
    showAnswerButton.innerHTML = "Close";
  } else {
    cardAnswer.innerHTML = null;
    modal.style.display = "none";
    // showAnswerButton.innerHTML = "Show answer";
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

var cards = [
    {
			"question": "Why are dreidels traditional for Chanukah? <br> <br> a) It's fun to spin them  <br> b) Jews played with tops to make the Greek soldiers <br> think they weren't studying Torah<br <br> c) They get you chocolate or money! <br> d) Without them, menorahs would be lonely : (",
			"answer": "Answer: b"
		},
		{
			"question": "What is a dreidel? <br> <br> a) a UFO <br> b) a kind of dog <br> c) something delicious in my grandma's soup <br> d) it's a top that has four Hebrew letters on it",
			"answer": "Answer: d"
		},
		{
			"question": "What was the miracle of Chanukah? <br> <br> a) the oil lasted for 8 days instead of 1 <br> b) the sea parted in time for us to cross <br> c) the well followed Miriam everywhere she went <br> d) the bush was burning but was not consumed",
			"answer": "Answer: a"
		},
		{
			"question": "Why do we eat fried foods during Chanukah? <br> <br> a) they taste good <br> b) we like foods that are crispy <br> c) fried oreos are the new gelt <br> d) we remember the miracle of the oil lasting for 8 days",
			"answer": "Answer: d"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> Besides latkes, what fried food you would like to make traditional for at least one night of Chanukah? Why?",
			"answer": null
		},
		{
			"question": "Who was Mattathias? <br> <br> a) the inventor of the first dreidel <br> b) the guy in the Temple who lit the menorah <br> c) the father of Judah the Maccabee <br> d) the person who thought we should light all 8 candles on the first night of Chanukah",
			"answer": "Answer: c"
		},
		{
			"question": "How many sons did Mattathias have? <br> <br> a) one <br> b) ten <br> c) none - he only had daughters <br> d) five",
			"answer": "Answer: d - 5: Yochanan, Shimon, Judah, Eliezer, and Yonatan"
		},
		{
			"question": "Who was the Syrian Greek king who oppressed the Jewish people and tried to put an end to Judaism? <br> <br> a) King Kong <br> b) Antiochus <br> c) King Tut <br> d) Achashveirosh",
			"answer": "Answer: b"
		},
		{
			"question": "What is something Jewish you could do during Chanukah to make the holiday extra fun or special? <br> <br> a) watch a movie about a Jewish person or holiday <br> b) read a Jewish book or comic book <br> c) listen to Jewish music <br> d) all of the above and so much more",
			"answer": "Answer: d"
		},
		{
			"question": "What do we call the candle that we use to light the other Chanukah candles? <br> <br> a) we don't call it anything because it has no ears to hear us <br> b) the lighter <br> c) the Shamash <br> d) the hottie",
			"answer": "Answer: c"
		},
		{
			"question": "What rabbi first decided that we should light 1 candle on the first night of Chanukah adding a candle each night until we light 8 on the last night of Chanukah? <br> <br> a) Shammai <br> b) Abraham <br> c) Hillel <br> d) Moses",
			"answer": "Answer: c"
		},
		{
			"question": "What rabbi thought we should light 8 candles on the first night of Chanukah and light 1 less candle each night until we light only 1 candle on the last night? <br> <br> a) Hillel <br> b) Moses <br> c) Abraham <br> d) Shammai",
			"answer": "Answer: d"
		},
		{
			"question": "What blessings do we say over the candles? <br> <br> a) l'hadlik ner shel yom tov <br> b) hamotzi lechem min ha'aretz and borei pri hagafen <br> c) la'asok b'divrei Torah <br> d) l'hadlik ner shel Chanukah, sheasah nisim, and on the first night, shechechiyanu",
			"answer": "Answer: d"
		},
		{
			"question": "On Friday night during Chanukah, which candles do we light first, Shabbat or Chanukah?",
			"answer": "Answer: We light Chanukah candles first because it is traditional to only light candles to start Shabbat and not to light any others during Shabbat."
		},
		{
			"question": "On Saturday night during Chanukah, which do we do first: light candles for Chanukah or do havdalah?",
			"answer": "Answer: We do havdalah first because that marks the end of Shabbat and therefore marks the time we can then light our next set of Chanukah candles."
		},
		{
			"question": "Who was Judith? <br> <br> a) the inventor of the first latke <br> b) designer of the Maccabees' uniforms <br> c) the composer of the song: Dreidel, Dreidel, Dreidel <br> d) a brave woman who defeated the Syrian Greek general Holofernes, which ultimately led to Jewish victory and freedom from the Syrian Greeks ",
			"answer": "Answer: d"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> The Maccabees were very brave. What was the bravest thing you have ever done or ever seen someone do?"
		}, {
			"question": "How many branches does a Chanukah menorah have? <br> <br> a) 7 <br> b) 8 <br> c) 9 <br> d) 2",
			"answer": "Answer: c"
		},
		{
			"question": "What are the letters on dreidels made outside of Israel? <br> <br> a) Nun (&#1504), Gimel (&#1490), Hey (&#1492), Shin (&#1513) <br> b) Aleph (&#1488), Bet (&#1489), Gimel (&#1490), Daled (&#1491) <br> c) Shin (&#1513), Lamed (&#1500), Vav (&#1493), Mem sofit (&#1501) <br> d) Nun (&#1504), Gimel (&#1490), Hey (&#1492), Pey (&#1508)",
			"answer": "Answer: a - for a great miracle happened there - Nes Gadol Hayah Sham - Shin stands for Sham, which means there."
		},
		{
			"question": "What are the letters on dreidels made in Israel? <br> <br> a) Aleph (&#1488), Bet (&#1489), Gimel (&#1490) , Daled (&#1491) <br> b) Nun (&#1504), Gimel (&#1490), Hey (&#1492), Shin (&#1513) <br> c) Shin (&#1513), Lamed (&#1500), Vav (&#1493), Mem sofit (&#1501) <br> d) Nun (&#1504), Gimel (&#1490), Hey (&#1492), Pey (&#1508)",
			"answer": "Answer: d - for a great miracle happened here - Nes Gadol Hayah Po - Pey stands for Po, which means here."
		}, {
			"question": "What gifts are traditional for Chanukah? <br> <br> a) socks and underwear <br> b) Israel bonds <br> c) lottery tickets <br> d) dreidels and gelt",
			"answer": "Answer: d"
		},
		{
			"question": "In the US, what food is traditional for Chanukah? <br> <br> a) candy corn <br> b) latkes (potato pancakes) <br> c) pizza <br> d) matzo balls",
			"answer": "Answer: b"
		},
		{
			"question": "In Israel, what food is traditional for Chanukah? <br> <br> a) sunflower seeds <br> b) oranges <br> c) jelly donuts <br> d) pita bread",
			"answer": "Answer: c"
		},
		{
			"question": "What toppings are traditional for latkes? <br> <br> a) sour cream and applesauce <br> b) peanut butter and jelly <br> c) mustard and sauerkraut <br> d) hot fudge and sprinkles",
			"answer": "Answer: a"
		},
		{
			"question": "In the song, \"I Have a Little Dreidel\", what is the dreidel made of? <br> <br> a) cheese <br> b) legos <br> c) clay <br> d) chocolate",
			"answer": "Answer: c"
		}, {
			"question": "When playing dreidel, what is the best letter to land on? <br> <br> a) Nun (&#1504) <br> b) Gimel (&#1490) <br> c) Hey (&#1492) <br> d) Shin (&#1513) ",
			"answer": "Answer: b - Gimel (&#1490) - Take All"
		},
		{
			"question": "When playing dreidel, what is the worst letter to land on? <br> <br> a) Nun (&#1504) <br> b) Gimel (&#1490) <br> c) Hey (&#1492) <br> d) Shin (&#1513) ",
			"answer": "Answer: d - Shin (&#1513) - put one in"
		},
		{
			"question": "What is a mitzvah (commandment) we are supposed to do on Chanukah? <br> <br> a) light the menorah <br> b) place the lighted menorah in the window to publicize the miracle of Chanukah <br> c) give extra tzedakah at candle lighting <br> d) all of the above ",
			"answer": "Answer: d"
		},
		{
			"question": "What does Chanukah mean? <br> <br> a) present <br> b) holiday <br> c) dedication <br> d) light ",
			"answer": "Answer: c - Chanukah literally means dedication — This stands for our re-dedication of our Holy Temple."
		},
		{
			"question": "What does the word Maccabee mean? <br> <br> a) coconut cookie <br> b) soldier <br> c) sport <br> d) hammer ",
			"answer": "Answer: d - There are different explanations, but Maccabee is Greek for the word Hammer."
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> If you could have any guest you wanted come to your house for Chanukah, who would you invite, and why?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> What is something you could do to make the world a brighter place?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> Rabbi Hillel taught us that we should do hiddur mitzvah, beautify our mitzvoth. What is a mitzvah you can do, and how you can make it even more beautiful?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> On Chanukah, we eat special foods. What is your favorite food that you expect to eat during a Jewish holiday?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> Since Chanukah lasts for eight nights, what are eight things you could do to make each night special? (You can ask other players for ideas, too!)"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> What is your favorite Chanukah song? (You can have an extra turn if you sing it, too.)"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> Chanukah celebrates the miracle of the oil lasting for 8 days instead of 1. Have you ever seen or heard about a miracle in our lifetimes? If so, what was it?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> The Maccabees fought for freedom to be Jewish. What is your favorite thing about being Jewish?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> If you could travel anywhere in the world to celebrate Chanukah, where would you go, and why?"
		},
		{
			"question": "Thought question (All answers are correct) <br> <br> Giving extra tzedakah is a tradition of Chanukah. To which organization would you like to give extra tzedakah, and why?"
		}
];



var card =  cards[Math.floor(Math.random() * cards.length)];
