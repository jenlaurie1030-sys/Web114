"use strict"
// Created by Jennifer Kneebone - October 24, 2026

/* Planning/Pseudocode
	//Initialize score = 0

	//2Question 1: 5+3
		-Variable: answerAddition
		-Correct answer: 8
		-Validate: Number(), compare with ===

	//Question 2: 10-6
		-Variable: answerSubtraction
		-Correct answer: 4
		-Validate: Number(), compare with ===

	//Question 3: 4x3
		-Variable: answerMultiply
		-Correct answer: 12
		-Validate: Number(), compare with ===

	//Question 4: 20/5
		-Variable: answerDivison
		-Correct answer: 4
		-Validate: Number(), compare with ===

	//Question: personalQuestion
		-Variable: answerPersonal
		-Validate: .trim(), .tolowerCase(), check for empty/Canal

	//Calculate percentage: (score/5) 100
 
	//Final feedback using if/else if/else based on score
		 -Special message if score === 3

	//Final summary alert
*/

let score = 0

//Question 1
const answerAddition = Number(prompt("What is 5+3?"));
if (answerAddition === 8){
	score ++;
	alert("Correct!");
}else{
	alert("Incorrect. The answer is 8.");	
}

//Question 2
const answerSubtraction = Number(prompt("What is 10-6?"));
if (answerSubtraction === 4){
	score ++;
	alert("Correct!");
}else{
	alert("Incorrect. The answer is 4.");
}

//Question 3
const answerMultiply = Number(prompt("What is 4x3?"));
if (answerMultiply === 12){
	score ++;
	alert("Correct!");
}else{
	alert("Incorrect. The answer is 12.");
}

//Question 4
const answerDivision = Number(prompt("What is 20/5?"));
if (answerDivision === 4){
	score ++;
	alert("Correct!");
}else{
	alert("Incorrect. The answer is 4.");
}

//Question 5
let answerQuestion = prompt("What is your favorite food?");
	  //Cancel
if (answerQuestion === null || answerQuestion.trim() === ""){
	alert("You clicked cancel. This is incorrect.");
}else{
	answerQuestion = answerQuestion.trim().toLowerCase();
}
if(answerQuestion === ""){
	alert("This is left blank. This will be incorrect.");
}else if(answerQuestion === "sushi"){
	score ++;
	alert("This is correct!");
}

//Calculations
const percentage = (score / 5)*100;


//Special Message
if (score === 3){
	console.log("You're score is 3 out of 5!");
}

//Final Feedback using if/else if/else
if(score === 5){
	alert(`Perfect score! You scored ${score} out of 5(${percentage}%).`);
}else if(score>=3){
	alert(`You have a score ${score} out of 5(${percentage}%).`);
}else{
 alert(`You got ${score} out of 5(${percentage}%).`);
}

//Final Summary
alert(`Final Score: ${score}/5. ${percentage}% correct.`);

