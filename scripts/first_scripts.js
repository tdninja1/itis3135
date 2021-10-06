var userName = prompt("What is your name");
var greeting = prompt("How are you doing?");
var company = "Jacob's Wonderful ITIS 3135 Web Development Work"

var todaysDate = new Date();
var today = todaysDate.getFullYear() + '-' + todaysDate.getMonth() + '-' + todaysDate.getDate();
var time = todaysDate.getHours() + ":" + todaysDate.getMinutes() + ":" + todaysDate.getSeconds();

let greetAndTime = document.getElementById('greetAndTime');

document.write("Good day to you, " + userName + ". " + "Today is " + today + " and the time is: " + 
                time + ". " + company + " welcomes you, " + userName + 
                "! We are glad you are doing " + greeting + "!");

function userGreetAndTime() {
    document.getElementById('greetAndTime').innerHTML = "Greetings, " + userName + " Welcome to " + company + 
    ". Here is the requested time: " + time + ". The date is: " + today
    + " You also mentioned that you are doing " + greeting + ".";
}

function calculateMPG() {
    var miles = prompt("Enter miles here:");
    miles = parseFloat(miles);

    var gallons = prompt("Enter gallons used here:");
    gallons = parseFloat(gallons);

    //mpg is calculated by dividing miles and gallons
    var mpg = miles / gallons;
    document.getElementById('calculateMPG').innerHTML = "The miles per gallon calculated for your vehicle are " + mpg + ".";
}

function calculateAverageScore() {

    var scoreEntry;
    var total = 0;
    var average;

    //get scores from user and add together
    scoreEntry = prompt("Enter score here:");
    scoreEntry = parseInt(scoreEntry);

    var test1 = scoreEntry;
    total = total + test1;

    scoreEntry = prompt("Enter score here:");
    scoreEntry = parseInt(scoreEntry);

    var test2 = scoreEntry;
    total = total + test2;

    scoreEntry = prompt("Enter score here:");
    scoreEntry = parseInt(scoreEntry);

    var test3 = scoreEntry;
    total = total + test3;

    scoreEntry = prompt("Enter score here:");
    scoreEntry = parseInt(scoreEntry);

    var test4 = scoreEntry;
    total = total + test4;
    //average is calculated by adding each of the 4 scores up, then divide by the amount of scores entered
    average = parseInt(total / 4);

    document.getElementById('calculateAverageScore').innerHTML = "Your average score is " + average + "%. Thank you.";
}

function convertFtoC() {
    var enteredValue = prompt("Enter fahrenheit temperature to convert to celsius here:");
    enteredValue = parseInt(enteredValue);
    
    //need to return fahrenheit, so fahrenheitTemperature = celsius
    
    var fahrenheitToCelsius = (enteredValue - 32) * 5 / 9;

    document.getElementById('convertFtoC').innerHTML = "The conversion of fahrenheit to temperature is " + fahrenheitToCelsius + ".";
}

function madLib() {
    var noun = prompt("Enter a noun for a person or thing. - Example: Person, or Thing");
    var nounItem = prompt("Enter a noun for an item. - Example: Thing");
    var nounPlace = prompt("Enter a noun for a place. - Example: Place");
    var verbIng = prompt("Enter a verb that describes what the noun is doing and ends in 'ing'. - Example: Something the noun is doing / an action.");
    var verbS = prompt("Enter a verb that describes what the noun is doing and ends in 's'. - Example: Something the noun is doing / an action.");
    var newNoun = prompt("Enter another noun for a person or thing. - Example: Person, or Thing");
    var newPlaceNoun = prompt("Enter another noun for a place. - Example: Place");
    var adjective = prompt("Enter an adjective that describes the noun. - Example: Describes the noun.");
    var newVerbIng = prompt("Enter another verb describing what the noun is doing and ends in 'ing'. - Example: Something the noun is doing / an action.");
    
    // The NOUN enjoys eating NOUNITEM under the PLACE - NOUN. The NOUN also likes to VERB large craters. The
    // NOUN decided it wants to take a journey with a NEWNOUN to the center of the NEW - PLACE NOUN. The NOUN VERB
    // every day until the NOUN realized this will ADJECTIVE VERB will never be possible.

    document.getElementById('madLib').innerHTML = "The " + noun + " enjoys eating an " + nounItem + " under the " + nounPlace +
    ". The " + noun + " also likes " + verbIng + " large craters. The " + noun + " decided it wants to take a journey with a "
    + newNoun + " to the center of the " + newPlaceNoun + ". The " + noun + " " + verbS + " every day until the " + noun + " and "
    + newNoun + " realized this " + newVerbIng + " will never be " + adjective + ".";
}






