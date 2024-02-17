/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2; 
}
function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;    

const multiplyNumbers = () =>{
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend/ divisor;    

const divideNumbers = () =>{
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */
const discount = (x) => {
    if (document.getElementById('member').checked)
        return x - (x * 0.2);
    else
        return x;
}

const getTotal = () =>{
    let subtotal = Number(document.querySelector('#subtotal').value);
    document.getElementById('total').innerHTML = `$${discount(isNumber(subtotal)).toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numArr;
/* Output Odds Only Array */
let oddArr = numArr.filter(x => x % 2 === 1 )
document.getElementById('odds').innerHTML = oddArr;

/* Output Evens Only Array */
let evenArr = numArr.filter(x => x % 2 === 0 )
document.getElementById('evens').innerHTML = evenArr;

/* Output Sum of Org. Array */
let sum = numArr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
document.getElementById('sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
let sum2 = numArr.map(x => x * 2);
document.getElementById('multiplied').innerHTML = sum2;

/* Output Sum of Multiplied by 2 Array */
let sum2x = numArr.reduce((accumulator,currentvalue)=>accumulator+(currentvalue*2),0);
document.getElementById('sumOfMultiplied').innerHTML = sum2x;

// Stretch Challenge
const isNumber = (value) => {return typeof value =='number';}