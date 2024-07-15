// todo Program One FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) console.log("FizzBuzz");
      console.log("Fizz");
    } else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

//todo Program Two : Palindrome

function isPalindrome(str) {
  let first = 0;
  let last = parseInt(str.length - 1);
  let flag = 0;

  while (first < last) {
    if (str.charAt(first) !== str.charAt(last)) {
      console.log("Not Palindrome");
      flag = 1;
    }
    first++;
    last--;
  }
  if (flag === 0) {
    console.log("Palindrome");
  }
}

//todo Program Three: Largest Number;

function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  console.log(largest);
}

//todo Program Four: String accurence save to Object Literal

function stringAccurence(str) {
  let stringObject = {};
  for (let i = 0; i < str.length; i++) {
    var c = str.charAt[i];
    var count = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt[j] == c) count++;
    }
    stringObject[str.charAt[i]] = count;
  }
  console.log(stringObject);
}
stringAccurence("anand");
//todo Program 5 : Longest Word

function longestWord(str) {
  let words = str.split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  console.log(longest);
}

//todo Program 6 : Factorial

function factorial(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  console.log(fact);
}

//todo  Program 7 : Celcius To Fahrenhit

function CelciusToFahrenhit(deg) {
  let fahrenhit = (deg * 9) / 5 + 32;
  console.log(fahrenhit);
}

//todo Program 8 : Missing Number From Array

function missingNumber(arr) {
  var count = 0;
  var j = 0;
  for (let i = 0; i < arr.length; i++) {
    j = i - count;
    if (arr[j] !== i) {
      console.log(i);
      count++;
    }
  }
}
