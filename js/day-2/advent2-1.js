const reader = require('../reader.js');
const util = require('util');

const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);


var partOne = function(){
  let characterCounts = [];
  for(let i = 0; i < input.length; i++){
    characterCounts[i] = findCharacterCounts(input[i]);
  }
  let twos = characterCounts.filter((x) => x[2]);
  let threes = characterCounts.filter((x) => x[3]);
  console.log(twos.length * threes.length);
}();

function findCharacterCounts(input){
  let charfreq = [];

  input.split('').forEach(element => {
    if(typeof charfreq[element] === 'number'){
      charfreq[element]++;
    } else {
      charfreq[element] = 1;
    }
  });
  let found = [];
  for(var a in charfreq){
      found[charfreq[a]] = true;
  }
  return found;
} 