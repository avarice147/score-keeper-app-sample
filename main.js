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
		if(!gameOver) {						//if not 5 or gameOver, add 1 internal / innerHTML
			p1Score++;
			playerOne.innerHTML = p1Score;
		}
			if(p1Score === winningScore) {	//if playerOne score equal 5, turn playerOne score green, 
				playerOne.classList.add("winner");	//change innerHTML,
				winnerIs.innerHTML = "Player One!";
				gameOver = true;	//gameOver back to true!
			} 
});


// playerTwo side

btn2.addEventListener("click", function() { //if i click btn2
		if(!gameOver) {						//if not 5 or gameOver, add 1 internal / innerHTML
			p2Score++;
			playerTwo.innerHTML = p2Score;
		}
			if(p2Score === winningScore) {	//if playerTwo score equal 5, turn playerOne score green,
				playerTwo.classList.add("winner");	//change innerHTML,
				winnerIs.innerHTML = "Player Two!";
				gameOver = true;	//gameOver back to true!
			} 
});


// Reset

rst.addEventListener("click", function() { //if i click reset button
	p1Score = 0;	//internal score playerOne is 0
	p2Score = 0;	//internal score playerTwo is 0
	playerOne.innerHTML = 0;	//innerHTML score playerOne is 0
	playerTwo.innerHTML = 0;	//innerHTML score playerTwo is 0
	playerOne.classList.remove("winner");	//remove green playerOne	
	playerTwo.classList.remove("winner");	//remove green playerTwo
	winnerIs.innerHTML = "No one yet..";	//change winneris to NO ONE YET...
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

