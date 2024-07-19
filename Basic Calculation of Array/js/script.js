// Q-1 Color array//
let myColor = ["Red", "Green", "White", "Black"];
document.getElementById('output1').innerHTML = myColor.join(",");
document.getElementById('output2').innerHTML = myColor.join("+");
document.getElementById('output3').innerHTML = myColor.slice(0, 3).join(",");
document.getElementById('output4').innerHTML = myColor[0];
document.getElementById('output5').innerHTML = myColor.slice(1, 3).join(",");
let newColorArray = [...myColor, "Orange"];
document.getElementById('output6').innerHTML = newColorArray.join(",");

// Q-2 sum of array//
let numbers = [31, 22, 10, 3, 5, 8];
let sumForLoop = 0;
for (let i = 0; i < numbers.length; i++) {
    sumForLoop += numbers[i];
}
let sumForEach = 0;
numbers.forEach(function (number) {
    sumForEach += number;
});
document.getElementById('forLoopResult').innerHTML = 'Sum using for loop: ' + sumForLoop;
document.getElementById('forEachResult').innerHTML = 'Sum using forEach: ' + sumForEach;

// Q-3 max-min value//
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let n = [5, 31, 10, 23, 9, 5, 8];
let maxValue = findMax(n);
let minValue = findMin(n);
document.getElementById('maxResult').innerHTML = 'Maximum value: ' + maxValue;
document.getElementById('minResult').innerHTML = 'Minimum value: ' + minValue;

// Q-4 ASCII value//
function arrayInfo() {
    let array = ['J', 'A', 'N', 'V', 'I'];
    document.getElementById('originalArray').innerText = "Original Array: " + array.join(', ');

    let asciiArray = array.map(char => char.charCodeAt(0));
    document.getElementById('asciiValues').innerText = "ASCII Values: " + asciiArray.join(', ');
}
arrayInfo();

// Q-5 Remove negative values//
function removeNegativeValues() {
    let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
    document.getElementById('Numbers').innerHTML = "Numbers: " + numbers.join(', ');

    let nonNegativeNumbers = numbers.filter(number => number >= 0);
    document.getElementById('nonNegativeNumbers').innerHTML = "Non-negative Numbers: " + nonNegativeNumbers.join(', ');
}
removeNegativeValues();

// Q-6 Square of array//
let arr = [2, 5, 6, 3, 8, 9];
let squaredArr = arr.map(element => element * element);
document.getElementById('squareResult').innerHTML = "Squared Array: " + squaredArr.join(', ');

// Q-7 Ascending and Descending//
let number = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let myColors = ["Red", "Green", "White", "Black"];
let numberAsc = number.slice().sort((a, b) => a - b);
let numberDesc = number.slice().sort((a, b) => b - a);
let colorsSorted = myColors.slice().sort();
document.getElementById('sortResult').innerHTML = "Ascending Order: " + numberAsc.join(', ') + "<br>";
document.getElementById('sortResult').innerHTML += "Descending Order: " + numberDesc.join(', ') + "<br>";
document.getElementById('sortResult').innerHTML += "Original Colors: " + myColors.join(', ') + "<br>";
document.getElementById('sortResult').innerHTML += "Sorted Colors: " + colorsSorted.join(', ');

// Q-8 Filtered words//
let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filteredWords = words.filter(word => word.length >= 8);
document.getElementById('filteredResult').innerHTML = "Filtered Words: " + filteredWords.join(', ');

//  Q-9 String Manipulation//
function stringManipulation() {
    let x1 = "airplane";
    let x2 = "oxoxoxox";
    let x3 = "A New Java Book";

    let secondChar = x1.charAt(2);
    document.getElementById('stringOutput1').innerText = "Second character of airplane is: " + secondChar;

    let toggledX2 = x2.split('').map(char => char === 'o' ? 'O' : char === 'x' ? 'X' : char).join('');
    document.getElementById('stringOutput2').innerText = "Toggled case for oxoxoxox is: " + toggledX2;

    let lowerX3 = x3.toLowerCase();
    let upperX3 = x3.toUpperCase();
    document.getElementById('stringOutput3').innerText = "Lowercase: " + lowerX3 + ", Uppercase: " + upperX3;

}
stringManipulation();

// Q-10 Array Reverse//
function reverseArray() {
    let arrayToReverse = [31, 23, 10, 3, 9, 5, 8];
    document.getElementById('originalArrayReverse').innerText = "Original Array: " + arrayToReverse.join(', ');

    let reversedArray = arrayToReverse.slice().reverse();
    document.getElementById('reversedArray').innerText = "Reversed Array: " + reversedArray.join(', ');
}
reverseArray();

// Q-11 Check Value//
function checkValue() {
    let array = [31, 23, 10, 3, 9, 5, 8];
    let valueToFind = 11;

    document.getElementById('valueToCheck').innerText = "Array: " + array.join(', ')

    let isFound = array.includes(valueToFind);
    document.getElementById('valueCheckResult').innerText = isFound ? "Value " + valueToFind + " is found in the array." : "Value " + valueToFind + " is not found in the array.";
}
checkValue();

// Q-12  Character Count//
function printNameAndCount() {
    let name = "Janvi";
    let nameLength = name.length;

    document.getElementById('nameOutput').innerText = "Name: " + name;
    document.getElementById('charCountOutput').innerText = "Number of Characters: " + nameLength;
}
printNameAndCount();

// Q-13 String Replacement//
let inputText = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.getElementById('originalText').innerText = "Original : " + inputText;

let replacedText = inputText.replace(/dog/g, 'cat');
document.getElementById('replacedText').innerText = "Replaced : " + replacedText;

//Q-14  convert string to array//
let inputString = "Hire the top 1% freelance developers";
document.getElementById('original').textContent = "Original : " + inputString;

let arrayFromString = inputString.split(' ');

let arrayString = '[' + arrayFromString.map(item => `"${item}"`).join(', ') + ']';
document.getElementById('arrayOutput').textContent = "Array: " + arrayString;

// Q-15  convert for array to string//
let array = ['5', 32, 'Daniel'];
let arrayToString = array.join(',');

document.getElementById('arrayToStringResult').innerText = "Array to String: " + arrayToString;