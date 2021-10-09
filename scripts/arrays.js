//declare 2 empty arrays, one for person and one for salaries
let person = [];
let salaries = [];

let name = document.getElementById('name');
let salary = document.getElementById('salary');

function displayResults(){
    //setting up variables
    var highest = 0;
    var average = 0;
    average = parseInt(average);
    
    average = parseFloat(average);
    highest = parseFloat(highest);
    //loop through rows
    for (var i = 0; i < salaries.length; i++)
    {
        let currentNum = salaries[i];
        average = average + currentNum;
        //to get highest value, check if salaries looped current value is higher than highest
        if (salaries[i] > highest){ highest = salaries[i]; }
    }
    //calculate average by dividing average by salaries length
    if (salaries.length != 0 ) { average = average / salaries.length; }
    let result = document.getElementById("results");
    result.innerHTML += "<h2>Highest Salary</h2>" + "<br>" +"<p>" + highest + "</p>"+ "</br>";
    result.innerHTML += "<h2>Average Salary</h2>" + "<br>" +"<p>" + average + "</p>"+ "</br>";
    getFocus();
}

function displaySalary()
{
    //get name and salary values by looping through table
    let table = document.getElementById('results_table'); //needed for displaySalary
    
    //tr holds the table row
    //th holds the row header / key
    table.innerHTML = "<tr> <th>Name</th> <th>Salary</th> </tr>";

    //loop through rows
    for (var i = 0; i < person.length; i++)
    {
        table.innerHTML += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
    getFocus();
}

function val() 
{ //use this function to receive the select option value
    d = document.getElementById("name").value;
}

function getFocus() 
{//make mouse cursor go back to addSalary button by calling the getFocus() method created above
    document.getElementById("name").focus();
}

function addSalary()
{
    //add a person and salary to the array using 
    //name to add to the correct users salary
    let personSalary = document.getElementById("salary").value;
    personSalary = parseInt(personSalary); //data validation
    let personName = document.getElementById("name").value; 
    var errorName, errorSalary;
    
    if (personName == ""){ errorName = alert("Please Enter Name"); }
    if (isNaN(personSalary)) { alert("Error! The provided number is not valid."); }
    if (personSalary == "" || personSalary == 0){ errorSalary = alert("Please Enter Salary"); }
    if (personName != "" && personSalary != "" && personSalary != 0 && !isNaN(personSalary))
    {
        person.push(personName);
        salaries.push(personSalary);
        alert("Data added.");
        //make mouse cursor go back to addSalary button by calling the getFocus() method created above
        getFocus();
    }     
}