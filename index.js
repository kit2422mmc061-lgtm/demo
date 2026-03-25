const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// store input numbers
const num12 = parseInt(prompt('Enter the first number '));
const num24 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum1 = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);


let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 