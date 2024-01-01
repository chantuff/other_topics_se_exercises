// 1. Write a JavaScript program to calculate the factorial of a number.  

function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const number = 5;
const factorialResult = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${factorialResult}`);

//================================================================================================================================
// 2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.
function gcdRecursive(a, b) {
    // Base case: if one of the numbers is zero, the other number is the GCD
    if (b === 0) {
        return a;
    } else {
        // Recursive case: call the function with the remainder of a divided by b
        return gcdRecursive(b, a % b);
    }
}

const number1 = 48;
const number2 = 18;
const result = gcdRecursive(number1, number2);

console.log(`The GCD of ${number1} and ${number2} is: ${result}`);

//================================================================================================================================
// 3. Write a JavaScript program to get integers in the range (x, y) using recursion. 
function integersInRange(x, y) {
    // Base case: if x is greater than or equal to y, return an empty array
    if (x >= y) {
        return [];
    } else {
        // Recursive case: concatenate x with the result of the recursive call
        return [x, ...integersInRange(x + 1, y)];
    }
}

const startRange = 5;
const endRange = 12;
const resultArray = integersInRange(startRange, endRange);

console.log(`Integers in the range (${startRange}, ${endRange}):`, resultArray);

//===================================================================================================================================
// 4. Write a JavaScript program to compute the sum of an array of integers. 
function sumArray(arr) {
    // Base case: if the array is empty, the sum is 0
    if (arr.length === 0) {
        return 0;
    } else {
        // Recursive case: add the first element to the sum of the rest of the array
        return arr[0] + sumArray(arr.slice(1));
    }
}

const numbers = [2, 4, 6, 8, 10];
const result = sumArray(numbers);

console.log(`The sum of the array [${numbers}] is: ${result}`);

// ===================================================================================================================================
// 5. Write a JavaScript program to compute the exponent of a number.
function power(base, exponent) {
    // Base case: if the exponent is 0, the result is 1
    if (exponent === 0) {
        return 1;
    } else {
        // Recursive case: multiply the base by the result of the recursive call
        // with a decremented exponent
        return base * power(base, exponent - 1);
    }
}

const baseNumber = 2;
const exponentValue = 3;
const result = power(baseNumber, exponentValue);

console.log(`${baseNumber} raised to the power of ${exponentValue} is: ${result}`);

//=======================================================================================================================================
// 6. Write a JavaScript program to get the first n Fibonacci numbers. 
function generateFibonacci(n) {
    const fibonacciArray = [];

    // Base case: if n is 0, return an empty array
    if (n === 0) {
        return fibonacciArray;
    }

    // Second base case: if n is 1, return [0]
    if (n === 1) {
        return [0];
    }

    // Initialize the array with the first two Fibonacci numbers
    fibonacciArray.push(0, 1);

    // Generate the rest of the Fibonacci numbers using a loop
    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray;
}

const n = 8;
const fibonacciNumbers = generateFibonacci(n);

console.log(`The first ${n} Fibonacci numbers are:`, fibonacciNumbers);

//===============================================================================================================================================
// 7. Write a JavaScript program to check whether a number is even or not.  
function isEven(number) {
    return number % 2 === 0;
}

const numToCheck = 8;

if (isEven(numToCheck)) {
    console.log(`${numToCheck} is an even number.`);
} else {
    console.log(`${numToCheck} is an odd number.`);
}

//=================================================================================================================================================
// 8. Write a JavaScript program for binary search.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            // If the target is greater, ignore the left half
            left = mid + 1;
        } else {
            // If the target is smaller, ignore the right half
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;
const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`${targetValue} found at index ${resultIndex}.`);
} else {
    console.log(`${targetValue} not found in the array.`);
}

//====================================================================================================================================================
// 9. Write a merge sort program in JavaScript.  
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            // If the target is greater, ignore the left half
            left = mid + 1;
        } else {
            // If the target is smaller, ignore the right half
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;
const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`${targetValue} found at index ${resultIndex}.`);
} else {
    console.log(`${targetValue} not found in the array.`);
}

//===============================================================================================================================
// 10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.
// // Test Data:
// ("madam") -> true
// ("abdb") -> false
// ("ab") -> false
// (test("a") -> true
function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] === str[str.length - 1]) {
        // Recursive case: check if the substring excluding the first and last characters is a palindrome
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

const testString1 = "madam";
const testString2 = "abdb";
const testString3 = "ab";
const testString4 = "a";

console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`);
console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`);
console.log(`${testString3} is a palindrome: ${isPalindrome(testString3)}`);
console.log(`${testString4} is a palindrome: ${isPalindrome(testString4)}`);


//=================================================================================================================================
// 11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion.
function binaryToDecimal(binaryString) {
    // Base case: if the binary string is empty, the decimal value is 0
    if (binaryString === "") {
        return 0;
    }

    // Extract the last digit from the binary string
    const lastDigit = parseInt(binaryString[binaryString.length - 1], 2);

    // Recursive case: convert the remaining binary digits and add the last digit
    const remainingDigits = binaryString.slice(0, -1);
    return binaryToDecimal(remainingDigits) * 2 + lastDigit;
}

const binaryNumber = "1101";
const decimalValue = binaryToDecimal(binaryNumber);

console.log(`Binary: ${binaryNumber}`);
console.log(`Decimal: ${decimalValue}`);

//======================================================================================================================================
// Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Element not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found, return the index
    } else if (arr[mid] < target) {
        // If the target is greater, search in the right half
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // If the target is smaller, search in the left half
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

const sortedArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const targetValue1 = 6;
const targetValue2 = 16;

const resultIndex1 = binarySearchRecursive(sortedArray, targetValue1);
const resultIndex2 = binarySearchRecursive(sortedArray, targetValue2);

console.log(`Index of ${targetValue1} in the array: ${resultIndex1}`);
console.log(`Index of ${targetValue2} in the array: ${resultIndex2}`);

//=======================================================================================================================================
// 13. A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  
// Test Data:
// ("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// ("9") -> ["y", "z"]
function letterCombinations(digits) {
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // Base case: if the input string is empty, return an empty array
    if (digits.length === 0) {
        return [];
    }

    // Recursive case: get letter combinations for the rest of the string
    const restCombinations = letterCombinations(digits.slice(1));

    // Get the letters corresponding to the current digit
    const currentDigit = digits[0];
    const currentLetters = digitMap[currentDigit];

    // Combine the current letters with the rest of the combinations
    const result = [];
    for (const letter of currentLetters) {
        if (restCombinations.length === 0) {
            result.push(letter);
        } else {
            for (const combination of restCombinations) {
                result.push(letter + combination);
            }
        }
    }

    return result;
}

const testInput1 = "12";
const testInput2 = "9";

const result1 = letterCombinations(testInput1);
const result2 = letterCombinations(testInput2);

console.log(`Letter combinations for "${testInput1}":`, result1);
console.log(`Letter combinations for "${testInput2}":`, result2);


