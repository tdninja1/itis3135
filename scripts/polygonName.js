function validateEntry() 
{//start validate entry
    //Convert numbers to words
    var notValid = true;
    while (notValid) 
    {//start while
        // /* Number Validator */
        document.getElementById("validateEntry").innerHTML;
        var numberInputValid = prompt("The Jarring Magical Majungasaurus would like your number.");
        numberInputValid = parseInt(numberInputValid);

        if (isNaN(numberInputValid)) 
        {
            alert("Error! The provided number is not valid." + "\n" + "The Jarring Magical Majungasaurus would like your number.");
        } 
        else if (!isNaN(numberInputValid)) 
        {
            alert("Number is valid. Here is your input: " + numberInputValid);
            notValid = false;
        }

    }//end while
    
}//end validate entry

function getShape() 
{

    var wLoopCont = true;
//check wLoopCont == true (conditions = polygon types checking numbers 0-10)
while (wLoopCont) 
{
    document.getElementById("getShape").innerHTML;
    var numberInput = prompt("The Jarring Magical Majungasaurus would like your number.");
    //take numberInput and make sure it is a number
    numberInput = parseInt(numberInput);
    
    
    if (numberInput > 10) 
    {
        var numberInput = prompt("The Jarring Magical Majungasaurus would like your number." + "\n" + "Error.");
    }
    //1 = henagon
    else if (numberInput <= 10 || numberInput <= 0) 
    {
        //run conditions
    //1 = henagon
    if (numberInput == 1 || numberInput == -1)
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is henagon.");
        wLoopCont = false; //stop loop
    }
    
    //2 = digon
    else if (numberInput == 2 || numberInput == -2 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is digon.");
        wLoopCont = false; //stop loop
    }
    //3 = trigon
    else if (numberInput == 3 || numberInput == -3 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is trigon.");
        wLoopCont = false; //stop loop
    }
    //4 = tetragon
    else if (numberInput == 4 || numberInput == -4 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is tetragon.");
        wLoopCont = false; //stop loop
    }
    //5 = pentagon
    else if (numberInput == 5 || numberInput == -5 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is pentagon.");
        wLoopCont = false; //stop loop
    }
    //6 = hexagon
    else if (numberInput == 6 || numberInput == -6 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is hexagon.");
        wLoopCont = false; //stop loop
    }
    //7 = heptagon
    else if (numberInput == 7 || numberInput == -7 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is hexagon.");
        wLoopCont = false; //stop loop
    }
    //8 = octagon
    else if (numberInput == 8 || numberInput == -8)
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is octagon.");
        wLoopCont = false; //stop loop
    }
    //9 = enneagon
    else if (numberInput == 9 || numberInput == -9)
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is enneagon.");
        wLoopCont = false; //stop loop
    }
    //10 = decagon
    else if (numberInput == 10 || numberInput == -10 )
    {
        alert("The Jarring Magical Majungasaurus mentioned that the number of sides are: " + numberInput + "\n" + "The name of the polygon is decagon.");
        wLoopCont = false; //stop loop
    }
    }//end if 0-10 or -1 through -10
    else
    {
        continue;
    }

}//end while

}//end getShape
