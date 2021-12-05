const reader = require('../reader.js');
const util = require('util');

const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);


var partTwo = function(){
  for(let i = 0; i < input.length; i++){
    for(let j = i; j < input.length; j++){
      if(compareCharacterDifferences(input[i], input[j]) == 1){
        console.log(showCommonCharacters(input[i], input[j]));
        return;
      }
    }
  }
}();

function compareCharacterDifferences(a, b){
  let diff = a.length;
  for(var i = 0; i < a.length; i++){
    if(a[i] == b[i]){
      diff--;
    }
  }
  return diff;
}

function showCommonCharacters(a, b){
  let answer = "";
  for(var i = 0; i < a.length; i++){
    if(a[i] == b[i]){
      answer += a[i];
    }
  }
  return answer;
}