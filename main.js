// All buttons
var btn1 = document.querySelectorAll("button")[0];
var btn2 = document.querySelectorAll("button")[1];
var rst = document.querySelectorAll("button")[2];
var gameOver = false;


// h1 and other DISPLAYS
var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");



// internal JS numbers and GAME OVER
var p1Score = 0;
var p2Score = 0;
var rstScore = 0;
var winningScore = 5;




// playerOne side

btn1.addEventListener("click", function() { //if i click btn1
		if(!gameOver) {
			p1Score++;
			playerOne.innerHTML = p1Score;
		}
			if(p1Score === winningScore) {
				playerOne.classList.add("winner");
				winnerIs.innerHTML = "Player One!";
				gameOver = true;
			} 
});


// playerTwo side

btn2.addEventListener("click", function() { //if i click btn1
		if(!gameOver) {
			p2Score++;
			playerTwo.innerHTML = p2Score;
		}
			if(p2Score === winningScore) {
				playerTwo.classList.add("winner");
				winnerIs.innerHTML = "Player Two!";
				gameOver = true;
			} 
});


// Reset

rst.addEventListener("click", function() { //if i click reset button
	p1Score = 0;
	p2Score = 0;
	playerOne.innerHTML = 0;
	playerTwo.innerHTML = 0;
	playerOne.classList.remove("winner");
	playerTwo.classList.remove("winner");
	winnerIs.innerHTML = "No one yet..";
});



// change background


var winnerIs = document.querySelector("#winnerIs");
var isPurple = false;

winnerIs.addEventListener("click", function() {
	if(!isPurple) {
		document.body.style.background = "white";
	} else {
		document.body.style.background = "purple";
	}
	
});

