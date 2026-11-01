// Jennifer Kneebone 10.31.2026

"use strict";

let favMonth = prompt("What is your favorite month?");
	favMonth = favMonth.toLowerCase();

//March,April,May
switch (favMonth){
	case "march":
	case "april":
	case "may":
		console.log("Spring is nice with everything blooming.");
		break;
		
//June,July,August
	case "june":
	case "july":
	case "august":
		console.log("You enjoy the summer months!");
		break;
		
//September,October,November
	case "september":
	case "october":
	case "november":
		console.log("Fall is fun with all of the pretty colors.");
		break;
		
//December,January,February
	case "december":
	case "january":
	case "february":
		console.log("You love the winter months!");
		break;
		
//Anything else
default:
		console.log("Other months are interesting too!");
}