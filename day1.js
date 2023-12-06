const fs = require("fs");
const input = fs.readFileSync("./day1input.txt", "utf8");
const myInputArray = input.split("\n").map((item) => item.replace(/\r/, ""));

//Part 1
function getAndSumNumbers(inputArray) {
  const numbers = inputArray.map((string) => {
    const regexMatches = string.match(/\d{1}/g);   
    const firstAndLastNumbers = []
    regexMatches ? firstAndLastNumbers.push(regexMatches[0], regexMatches[regexMatches.length - 1]): 0;    
    const firstAndLastNumbersCombined = firstAndLastNumbers != 0 ? parseInt(firstAndLastNumbers.join(""), 10) : 0;
    return parseInt(firstAndLastNumbersCombined, 10);
  });
  const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  console.log("Sum of numbers: " + sumOfNumbers);
}

getAndSumNumbers(myInputArray);

//Part 2
function replaceWords(string) {
  const overlaps = {
    oneight: "oneeight",
    twone: "twoone",
    threeight: "threeeight",
    fiveight: "fiveeight",
    sevenine: "sevennine",
    eightwo: "eighttwo",
    eighthree: "eightthree",
    nineight: "nineeight",
  };
  const regexOverlaps = new RegExp(Object.keys(overlaps).join("|"), "g");

  const spelledNums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const regexSpelledNums = new RegExp(Object.keys(spelledNums).join("|"), "g");

  return string
    .replace(regexOverlaps, (match) => overlaps[match])
    .replace(regexSpelledNums, (match) => spelledNums[match]);
}

const modifiedInput = myInputArray.map((item) => replaceWords(item));
getAndSumNumbers(modifiedInput);


//Test data
const testInput1 = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f","treb7uchet", "adsas", "485sdf26"]

const testInput2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
  "one3threethree",
  "abc7xyz",
  "df7eightwo"
];

