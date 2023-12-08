const fs = require("fs");
const input = fs.readFileSync("./day2input.txt", "utf8");
const myInputArray = input.split("\n").map((item) => item.replace(/\r/, ""));

// Part 1

function evaluatePossibleGames(string) {
    const conditionMap = {
      red: 12,
      green: 13,
      blue: 14,
    };
    const regex = new RegExp(`\\b\\d+\\s(${Object.keys(conditionMap).join("|")})\\b`, "g");
    const matches = string.match(regex);    
  
    const results = [];
  
    for (const match of matches) {
      const inputColor = match.split(" ")[1];
      const inputNumber = parseInt(match.match(/\d+/)[0]);
  
      if (inputNumber <= conditionMap[inputColor]) {
        results.push(true);
      } else results.push(false);
    }
    return results;
  }
  
  function countPossibleGames(games) {
    let sumOfGamesID = 0;
  
    for (let i = 0; i < games.length; i++) {
      const results = evaluatePossibleGames(games[i]);     
  
      if (!results.includes(false)) {
        sumOfGamesID += i + 1;
      }      
    }  
    console.log("sum of IDs " + sumOfGamesID);
  }
  
 countPossibleGames(myInputArray);

//Part 2

function countGamePower(string) {
  const conditionMap = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const regex = new RegExp(`\\b\\d+\\s(${Object.keys(conditionMap).join("|")})\\b`, "g");
  const matches = string.match(regex); 

  let red = [];
  let green = [];
  let blue = [];
  let gamePower;

  for (const match of matches) {
    const inputColor = match.split(" ")[1];
    const inputNumber = parseInt(match.match(/\d+/)[0]);    

    if (inputColor === "red") {
      red.push(inputNumber);
    } else if (inputColor === "green") {
      green.push(inputNumber);
    } else if (inputColor === "blue") {
      blue.push(inputNumber);
    }    

    gamePower = Math.max(...red) * Math.max(...green) * Math.max(...blue);    
  }
  return gamePower;
}


function countTotalPower(games) {
  let totalPower = 0;
  for (const game of games) {
    const gamePower = countGamePower(game);
    totalPower += gamePower;
  }
  console.log("totalPower: " + totalPower);
}

countTotalPower(myInputArray);


//Test data
const testInput = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];