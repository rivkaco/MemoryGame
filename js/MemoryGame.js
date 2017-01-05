var memoryGame = {};
//initialise board
// create an array of the 6 images and double them  
//board should have one of these 12 images on it but it will be hidden by the image of the back of the card
memoryGame.init = function() {
memoryGame.faceDownBoard();
}

var NUM_OF_COLS = 3;
var NUM_OF_ROWS = 4;
selectedCard= 0;
memoryGame.totalArray = [1,4,3,6,5,1,6,3,5,4,2,2];
memoryGame.NUM_CLICKS = 0;
memoryGame.firstOne = "";
memoryGame.secondOne ="";
memoryGame.OVERALL_CLICKS = 0;
memoryGame.WRONG_GUESSES = 0;
memoryGame.matches = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

memoryGame.totalArray = shuffle(memoryGame.totalArray);
console.log(memoryGame.totalArray);

//create an array with double values.
//shuffled array

//onclick, call images s1. give it a letter. 




memoryGame.flipCard = function(e){
	var clickedCard = e.target;
	console.log("./images/s" + clickedCard.getAttribute("data-card") + ".jpg");
		 if (memoryGame.NUM_CLICKS===0) {
			clickedCard.src = "./images/s" + clickedCard.getAttribute("data-card") + ".jpg";
			clickedCard.id= "firstOne";
			memoryGame.NUM_CLICKS++;
			memoryGame.OVERALL_CLICKS++;
			console.log(memoryGame.OVERALL_CLICKS);

		}

		else if (memoryGame.NUM_CLICKS===1) {
			clickedCard.src = "./images/s" + clickedCard.getAttribute("data-card") + ".jpg";
			clickedCard.id = "secondOne";
			memoryGame.NUM_CLICKS++;
			memoryGame.OVERALL_CLICKS++;
			console.log(memoryGame.OVERALL_CLICKS);

		} 

	 	if (document.getElementById("firstOne").src != document.getElementById("secondOne").src) {
	 		setTimeout(memoryGame.turnBack, 1000);
	 			 		memoryGame.WRONG_GUESSES++;

	 	} else if  (document.getElementById("firstOne").src === document.getElementById("secondOne").src) {
	 		memoryGame.NUM_CLICKS=0;
	 		document.getElementById("firstOne").id = "";
	 		document.getElementById("secondOne").id = "";
	 		memoryGame.matches++;		
		}

 	if (memoryGame.matches== 6) {
 		alert("You won in " +memoryGame.OVERALL_CLICKS+ " clicks.");
 		//creare div
 	}

    
};



memoryGame.turnBack= function() {
	document.getElementById("secondOne").src = "./images/texture.jpg";
	document.getElementById("firstOne").src= "./images/texture.jpg";
		memoryGame.NUM_CLICKS=0;
	 	document.getElementById("firstOne").id = "";
		document.getElementById("secondOne").id = "";
}




memoryGame.refresh = function() {
location.reload();
}

memoryGame.faceDownBoard = function() {

	var board= document.createElement("div");
	board.id= "container";

	var button = document.createElement("button");
	var NewGame = document.createTextNode("New Game");
	button.appendChild(NewGame)
	board.appendChild(button);
	button.addEventListener("click", memoryGame.refresh);
	//send to a function that reloads the page


	var counter = 0;
		for(var i =1; i<=NUM_OF_ROWS; i++) {
			var row= document.createElement("div");
			row.className = "row";
			row.className = "horizontal"
				
			for (var j = 1; j<= NUM_OF_COLS; j++) {
				var faceDownCard= document.createElement("img");				
				faceDownCard.src = "./images/texture.jpg";
				faceDownCard.classList.add("clickable");
				faceDownCard.classList.add("col-lg-3");
				faceDownCard.classList.add("col-sm-3");
				faceDownCard.classList.add("col-xs-3");
				faceDownCard.classList.add("faceDownCard");
				faceDownCard.setAttribute("data-card",memoryGame.totalArray[counter]);
				faceDownCard.addEventListener("click", memoryGame.flipCard);
				row.appendChild(faceDownCard);
				counter++;
			}		
		board.appendChild(row);
		}
	document.body.appendChild(board);

};

	

// define numebr of clicks 0
// define first card depending on click, when click show card, check never clicked before, 
// 	num of clicks ++,
// 	save clickedCard.src in a variable caleld firstcard
// 	save "" caleld second card 
// 	compare, if equal, always show.
// 	not equal, change source back.
// 	either way, put number of clicks back to zero.    

// }
// shuffle function online will create random array each time, give id to images, give them all images 
// loop grabs div that has the
