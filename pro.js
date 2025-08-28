function comparingNumbers(num1, num2) {
    if (num1 === num2) {
        return `${num1} is equal to ${num2}`;
    } else if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else {
        return `${num1} is less than ${num2}`;
    }
}


let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

let result = comparingNumbers(number1, number2);
alert(result);

    