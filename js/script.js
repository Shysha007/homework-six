//Task 1
let numOne = Boolean(Number("10")) + 1;
console.log(numOne, typeof(numOne)); // 2 Number

let numTwo = 'sub' + Number(false);
console.log(numTwo, typeof(numTwo)); // sub0 String

let numThree = 16  *  "      91      ";
console.log(numThree, typeof(numThree)); // 1456 Number

let numFour = true-70;
console.log(numFour, typeof(numFour)); // -69 Number

let numFive = Number(1 + String(1)) + 1;
console.log(numFive, typeof(numFive)); // 12 Number

//Task 2 
let time = 60 * 60;
let questionTime = +prompt(`Введите количество часов:`);
let answerTime = questionTime * time;
alert(answerTime);

//Task 3
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
alert(num);