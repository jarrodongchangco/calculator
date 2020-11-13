function add (num1, num2) {
	return num1 + num2 
	
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (sumArray) {
	if(sumArray.length == 0){
		return 0;
	}else{
		const sum1 =  sumArray.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);
		 return sum1;
	}
	
}
function divide (num1, num2) {
	if(num2 == 0){
	Alert("You sneaky bastard piece of shit");
	}else{

	return num1 / num2;
	}
	
}

function multiply (num1, num2) {
	return num1 * num2;
	
}

function power(num, exp) {
	if (exp==1 ){
		return num;
	}else{
		return num * power(num, exp-1);
	}
	
}

function factorial(num) {
	if (num==0){
		return 1;
	}
	else if(num==1){
		return num;
		
	}else{
		return num * factorial(num-1);
	}
}

function operate(operator, num1, num2){
    if (operator == "+") {
        return add(num1, num2)
    }
    else if (operator == "-"){
        return subtract(num1, num2)
    }
    else if(operator == "X"){
        return multiply(num1,num2)
    }
    else if (operator == '/') {
        return divide(num1, num2)

    }

}
let displayValue = {
	firstValue: 0,
	operator: 0,
	secondValue: 0, 
	clear: false
};
//Append shit 
// function displayValue() {
// 	// document.querySelector("numberDisplay").innerHTML = 
// 	// let r = document.querySelector(':root');

// }

const buttons = document.querySelectorAll('button.grid-numbers');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
	console.log("number button clicked")
	displayValueText = document.querySelector("span.display-span").innerHTML;
	console.log(displayValue.firstValue, displayValue.operator, displayValue.secondValue);

	//Clear text content 
	if(displayValue.clear == true){
		console.log("clearing is true");
		document.querySelector("span.display-span").textContent = '';
		displayValue.clear = false;
	}
	if(displayValue.operator != 0){
	
		console.log("There is a operator");

		document.querySelector("span.display-span").innerHTML += button.innerHTML ;
		displayValue.secondValue = document.querySelector("span.display-span").textContent;
				
		console.log(displayValue.firstValue);
		console.log(displayValue.operator);
		console.log(displayValue.secondValue);
	} 
	// A first value exist so fill in a 2nd value 
	// else if (displayValue.firstValue != 0){
		
	// 	document.querySelector("span.display-span").innerHTML += button.innerHTML ;
	// 	displayValue.secondValue = document.querySelector("span.display-span").textContent;

	// }
	else{
	// button.style.backgroundColor = 'orange';
	document.querySelector("span.display-span").innerHTML += button.innerHTML;
	displayText = document.querySelector("span.display-span").textContent;
	displayValue.firstValue = displayText;
	console.log(displayValue.firstValue);
	}
});
});

const operators = document.querySelectorAll('button.grid-operators');

	operators.forEach((button) => {
		button.addEventListener('click', () => {

		console.log("operator button clicked")
					// if first and 2nd have values 
			// sum them and sum become first value
		if(displayValue.firstValue != 0 && displayValue.secondValue != 0){
			console.log("String of numbers have occured")

			displayValue.firstValue = operate(displayValue.operator, parseInt(displayValue.firstValue), parseInt(displayValue.secondValue));
			document.querySelector("span.display-span").textContent = displayValue.firstValue;
			displayValue.secondValue = 0;
			displayValue.operator =  button.textContent

		}
		else{
		displayValue.operator =  button.textContent;
		displayValue.clear = true;

		console.log("the object right now is");
		console.log("the operator is" +displayValue.operator);
		console.log(displayValue.firstValue);
		}

	});
	});

const btnEqual = document.querySelector('button.grid-equals');
	btnEqual.addEventListener('click', () => {
		console.log("Equal button click")
		console.log(displayValue.firstValue);
		console.log(displayValue.operator);
		console.log(displayValue.secondValue);
		document.querySelector("span.display-span").textContent = operate(displayValue.operator, parseInt(displayValue.firstValue), parseInt(displayValue.secondValue));
		displayValue.firstValue = document.querySelector("span.display-span").textContent ;
		displayValue.secondValue = 0;
		displayValue.clear = true
});

function RefreshObject(){
	displayValue.firstValue = 0;
	displayValue.operator = 0;
	displayValue.secondValue = 0;
}

const btnClear = document.querySelector('button.btn--clear');
btnClear.addEventListener('click', () => {
	console.log("clear button clicked")

	document.querySelector("span.display-span").textContent = '';
	RefreshObject();


});
// const buttons = document.querySelectorAll('button.grid-numbers');

// buttons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 	console.log("over here")
// 	// button.style.backgroundColor = 'orange';
// 	document.querySelector("span.display-span").innerHTML += button.innerHTML;
// 	// displayValue()
// });
// });


// const buttons = document.querySelectorAll('button.grid-item');

// buttons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 	console.log("over here")
// 	// button.style.backgroundColor = 'orange';
// 	document.querySelector("span.display-span").innerHTML += button.innerHTML;
// 	// displayValue()
// });
// });
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
	let userWidth = GetWidthSize();
	if(userWidth==0){
		return 0;
	}
	SetGridSize(userWidth);

});
	