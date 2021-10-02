//display simply equals calculator_display since it needs text to be displayed through innerText provided function
let calcDisplay = document.getElementById('calculator_display');
//calcButtons is an array that holds the data for the calculator_buttons described in calculator
let calcButtons = Array.from(document.getElementsByClassName('calculator_buttons'));

//buttons is a container for the button entities
calcButtons.map( button => 
{	//need event listener for button since they need to function on click
    button.addEventListener('click', (buttonClick) => 
	{	//switch statement is used to check the buttons clicked and display them
		//on the calculator screen
        switch(buttonClick.target.innerText) 
		{
            //check if "=" button is clicked and if so evaluate the equation.
			//if symbols are clicked then the user attempts to click "=" throw an invalid input message to user
            case '=':
				//try catch to catch any potential invalid inputs from user
                try 
				{	//evaluate the equation if valid equations are added
                    calcDisplay.innerText = eval(calcDisplay.innerText);
                } catch 
				{
                    calcDisplay.innerText = "Invalid Input!"
					
                }
                break;
			//if user clicks "CLEAR" button or "_" button, clear the display. This is done by swapping the
			//previous input to an empty string to signify that the input was removed.
			case 'CLEAR':
				calcDisplay.innerText = '';
				break;
			case '_':
				calcDisplay.innerText = '';
				break;
				//lastly, the display text correlates directly with the button input
				//this means that buttons clicked are added to the display
                default:
                    calcDisplay.innerText = calcDisplay.innerText + buttonClick.target.innerText;
        }
    });
});
