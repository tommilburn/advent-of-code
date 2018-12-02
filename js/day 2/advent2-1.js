const reader = require('../reader.js');
const util = require('util');

const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);


var partOne = function(){
  let checksums = [];
  for(let i = 0; i < input.length; i++){
    checksums[i] = generateChecksum(input[i]);
  }
  let twos = checksums.filter((x) => x[2]);
  let threes = checksums.filter((x) => x[3]);
  console.log(twos.length * threes.length);
}();

function generateChecksum(input){
  let charmap = [];
  let checksum = 0;

  input.split('').forEach(element => {
    if(typeof charmap[element] === 'number'){
      charmap[element]++;
    } else {
      charmap[element] = 1;
    }
  });
  let found = [];
  for(var a in charmap){
      found[charmap[a]] = true;
  }
  return found;
}