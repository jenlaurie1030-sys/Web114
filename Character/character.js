// --Jennifer Kneebone 10.18.2026

"use strict";

	//1. Welcome Message
	alert("Welcome to Jennifer's floating sky city");

	//2. Character Name
	//Ask the visitor for the character's name.
	const charName = prompt("What is your character's name?", "Wanderer");

	//3. Pet/Companion
	//Ask the visitor what type of pet or companion their character has.
	const companion = prompt(`What kind of companion pet do you have?`, "Cloud Kitty");

	//4. Superpower
	//Write a welcome message that includes your name and your chosen setting from 
	const superPower = prompt("What is your Superpower?", "Fast Track");

	//5. Years of training
	//Ask the visitor how many years their character has been training (a number).
	//Store the raw result in a const variable
	const yearsTrain = prompt("How many years have you been training?", "10");
	//Conversion practice
	const yearsTraining = Number(yearsTrain);

	const powerLevel = yearsTrain *10;

	//6. Likes fighting monsters
	const likesFighting = confirm(`Does ${charName} like fighting monsters? Click OK for Yes, Click CANCEL for No.`);
	console.log(likesFighting, typeof likesFighting);
	const fightingAnswer = likesFighting? "yes" : "no";

	//7. Loading / preparing message
	alert(`Gathering magic for ${charName}...almost ready!`);


	//8. Final character story
	alert(`Character Details
		=================================
		Name: ${charName}
		Companion: ${companion}
		Superpower: ${superPower}
		Powerlevel: ${yearsTrain}
		Likes Fighting Monsters: ${likesFighting}`);

	let finalChar = `${charName}, soared into the floating city with their ${companion}.
	Using their superpower of ${superPower} aided their training from ${yearsTrain} years
	to only months of fighting monster and ${fightingAnswer} they do like fighting monsters.`;

	alert(finalChar)



// Console testing
console.log(charName, typeof charName);
console.log(companion, typeof companion);
console.log(superPower, typeof superPower);
console.log(yearsTrain, typeof yearsTrain);
console.log(yearsTraining, typeof yearsTraining);
console.log(powerLevel, typeof powerLevel);
console.log(finalChar, typeof finalChar);