// task 1

function getName(userName) {
    console.log(`${userName} is active now`);
}

getName("Samuel");
getName("Nikki");
getName("Max");

// task 2

function findMaxNumber(a, b, c) {
    switch(a) {
        case b:
            return a > c ? a : c;
        case c:
            return a > b ? a : b;
        default:
            return a > b && a > c ? a : b > a && b > c ? b : c;     
    }
}

console.log(findMaxNumber(1,2,3));
console.log(findMaxNumber(100,404,87));
console.log(findMaxNumber(-200, 10,10));

// task 3

function getDepositAmount(dollarDeposit, rublDeposit, exchangeRate) {
    let userTotalDeposit = rublDeposit + dollarDeposit * exchangeRate;
    return userTotalDeposit;
}

console.log(`You have this amount of money in your Deposit: ${getDepositAmount(100, 2000, 80)} rubles`);

// task 4

function numberToText(firstNumber, lastNumber) {
    let smallNumberArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let specialNumberArr = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let bigNumberArr = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let userChosenArr = [];

    for(let i = firstNumber; i <= lastNumber; i++) {
        if(i <= 9) {
            userChosenArr.push(smallNumberArr[i-1]);
        } else if(i <= 19) {
            userChosenArr.push(specialNumberArr[i % 10])
        } else if(i % 10 == 0) {
            userChosenArr.push(bigNumberArr[i / 10 - 2]);
        } else {
            userChosenArr.push(bigNumberArr[Math.floor(i / 10) -2] + " " + smallNumberArr[i % 10 -1]);
        }
    }
    return userChosenArr;
}

console.log(numberToText(1,10));

// task 5

function getMinNumber(a, b) {
    return a > b ? a : b;
}

// task 6

let counter = 0;

function getCalcNumbers(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            if(counter > 2) {
                return "That's all";
            }
            counter++;
            let userAnotherChance = prompt("Incorrect operator. Please give another one.");
            return getCalcNumbers(a, b, userAnotherChance);
    }
}


console.log(getCalcNumbers(1,2, "+"));

// task 7

function isLucky(ticketNumber) {
     let arr = String(ticketNumber).split("");
     let sum1 = 0;
     let sum2 = 0;
     for(let i = 0; i <= 2; i++) {
        sum1 += Number(arr[i]);
        sum2 += Number(arr[arr.length - 1 - i]);
     }
     if(sum1 == sum2) {
        return true;
     } else {
        return false;
     }
}

console.log(isLucky(123456));
