var alert = alert("Hey my script is running");
var name = prompt("What is your name?");
var greeting = prompt("How are you doing?");
var today = new Date();
var date = today.getFullYear() + '-'+ (today.getMonth()+1)+'-'+today.getDate();
var currentTime = new Date();
var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + today.getSeconds();
	document.write("Today is " + date + ", and the time is: " + time + ".");
	document.write(" ITIS 3135 welcomes you, " + name + "! ");
	document.write("We're glad you are doing " + greeting + "!");

function userGreetAndTime() 
{
	var greet = "Hello ";
	var user = name;
	var userGreeting = greet + user;
	var currentTimeFunc = new Date();
	var time = currentTimeFunc.getHours() + ":" + currentTimeFunc.getMinutes() + ":" + today.getSeconds();
	
	document.getElementById("greetAndTime").innerHTML = userGreeting + ". The time is: " + time + ". The date is: " + date + ".";
}

function calculateMPG() 
{
	var miles = prompt("Enter miles driven");
	miles = parseFloat(miles);
	var gallons = prompt("Enter gallons of gas used");
	gallons = parseFloat(gallons);
	
	var mpgEquals = miles/gallons;
	mpgEquals = parseInt(mpgEquals);
	//alert("You can drive this many miles per gallon: " + mpgEquals);
	
	document.getElementById("calculateMPG").innerHTML = "You can drive this many miles per gallon: " + mpgEquals;
}

function calculateAverageScore() 
{
	var entry;
	var average;
	var total = 0;
	
	//get 4 scores and add together
	entry = prompt("Enter test score");
	entry = parseInt(entry);
	
	var score1 = entry;
	total = total + score1;
	
	entry = prompt("Enter test score");
	entry = parseInt(entry);
	
	var score2 = entry;
	total = total + score2;
	
	entry = prompt("Enter test score");
	entry = parseInt(entry);
	
	var score3 = entry;
	total = total + score3;
	
	entry = prompt("Enter test score");
	entry = parseInt(entry);
	
	var score4 = entry;
	total = total + score4;
	
	average = parseInt(total/4);
	
	document.getElementById("calculateAverageScore").innerHTML = "Your average score between the four scores is: " + average;
}

function convertFtoC(entry) 
{
	
	entry = prompt("Enter preferred fahrenheit to convert to celsius: ");
	entry = parseInt(entry);
	var converterFtoC = (entry - 32) * 5 / 9;
	
	document.getElementById("convertFtoC").innerHTML = "The conversion for Fahrenheit to Celsius for your entered value is: " + converterFtoC;	
}

function madLib() 
{	
	var noun = prompt("Please enter a noun: ");
	var verb = prompt("Please enter a verb that does not end in -ing: ");
	
	alert("Finished. Thank you for your answers. Are you ready to see the story?");
	
	var story1 = "The big ninja is "
	var story2 = " and the ninja also acts like a "
	var story3 = " at the crack of dawn.";
	
	document.getElementById("madLib").innerHTML = story1 + verb + story2 + noun + story3;
}

