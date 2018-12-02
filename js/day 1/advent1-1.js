var reader = require('../reader.js');
const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);

const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);

var partOne = function(pathToFile){
  console.log(input);
  const answer = input.reduce(reducer, 0);
  console.log(answer);
}();