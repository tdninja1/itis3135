//need to create const variables for calculator and keys
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

//need to use data-action attribute to determine which key is clicked
const key = e.target
const action = key.dataset.action

keys.addEventListener('click', e => 
{
	if (e.target.matches('button'))
	{
		//Do something
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
		
		//if data-action is present, this is either add, subtract, multiply, or divide

		//set up operators (+,-,/,*)
		if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
		{
	
			//need to store action selected, not sure how
			//log input
			console.log('clickedItem = operator')
			key.classList.add('is-depressed')
			//add custom attribute
			calculator.dataset.previousKeyType = 'operator'
		}

		
		
		Array.from(key.parentNode.children)
		.forEach(k => k.classList.remove('is-depressed'))
	}
})

const previousKeyType = calculator.dataset.previousKeyType
//if key doesn't have data-action, it must be the number key
if (!action)
{
	if (displayedNum === '0' || previousKeyType === 'operator')
	{
		display.textContent = keyContent
	} 
	else
	{
		display.textContent = displayedNum + keyContent
	}
	console.log('number key')
}
	

//set up clear and decimal action values

if (action === 'decimal')
{
	//log input
	console.log('clickedItem = decimal')
	
	display.textContent = displayedNum + '.'
}

if (action === 'clear')
{
	//log input
	console.log('clickedItem = clear')
}

if (action === 'calculate') 
{
	const firstValue = calculator.dataset.firstValue
	const operator = calculator.dataset.operator
	const secondValue = displayedNum
	console.log('clickedItem = calculate')
	
	display.textContent = calculate(firstValue, operator, secondValue)
	
	if (
	action === 'add' ||
	action === 'subtract' ||
	action === 'multiply' ||
	action === 'divide'
	) 
	{
		calculator.dataset.firstValue = displayedNum
		calculator.dataset.operator = action
	}
}

const calculate = (n1, operator, n2 ) => 
{
	//perform calculation and return calculated value
	let result = ''
	
	if (operator === 'add')
	{
		result = parseFloat(n1) + parseFloat(n2)
	} else if (operator === 'subtract')
	{
		result = parseFloat(n1) - parseFloat(n2)
	} else if (operator === 'multiply')
	{
		result = parseFloat(n1) * parseFloat(n2)
	} else if (operator === 'divide')
	{
		result = parseFloat(n1) / parseFloat(n2)
	}
	
	return result
}

//do nothing if string has dot
if (!displayedNum.includes('.')
{
	display.textContent = displayedNum + '.'
}

if (!action)
{
	calculator.dataset.previousKey = 'number'
}

if (action === 'decimal')
{
	if (!displayedNum.includes('.'))
	{
		display.textContent = displayedNum + '.'
	}
	else if (previousKeyType === 'operator')
	{
		display.textContent = '0.'
	}
	
	calculator.dataset.previousKey = 'decimal'
}

if (action === 'clear')
{
	calculator.dataset.previousKeyType = 'clear'
}


if (action === 'calculate')
{
	let firstValue = calculator.dataset.firstValue
	const operator = calculator.dataset.operator
	const secondValue = displayedNum
	
	if (firstValue)
	{
		if (previousKeyType === 'calculate')
		{
			firstValue = displayedNum
			secondValue = calculator.dataset.modValue
		}
		display.textContent = calculate(firstValue, operator, secondValue)
	}
	
	calculator.dataset.modValue = secondValue
	calculator.dataset.previousKeyType = 'calculate'
}

if (
	action === 'add' ||
	action === 'subtract' ||
	action === 'multiply' ||
	action === 'divide'
	) 
{
	const firstValue = calculator.dataset.firstValue
	const operator = calculator.dataset.operator
	const secondValue = displayedNum
	
	if (firstValue && operator) 
	{
		display.textContent = calculate(firstValue, operator, secondValue)
	}
	
	key.classList.add('is-depressed')
		calculator.dataset.previousKeyType = 'operator'
		calculator.dataset.firstValue = displayedNum
		calculator.dataset.operator = action
}

if (firstValue && operator ** previousKeyType !== 'operator')
{
	display.textContent = calculate(firstValue, operator, secondValue)
}

const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

if (firstValue && operator && previousKeyType !== 'operator')
{
	const calcValue = calculate(firstValue, operator, secondValue)
	display.textContent = calcValue
	
	//update calc value as firstValue
	calculator.dataset.firstValue = calcValue
}
else 
{
	calculator.dataset.firstValue = displayedNum
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action
