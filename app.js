var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attemps = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

