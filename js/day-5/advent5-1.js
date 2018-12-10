var reader = require('../reader.js');
const pathToFile = __dirname+'/input.txt';

var partOne = function(input){
  console.log(parseChemical(input[0]).length);
}(reader.parseTextFileAsArray(pathToFile));

function parseChemical(chemical){
  let i = 0;
  while(i < chemical.length - 1){
    if(canBeDestroyed(chemical.charAt(i), chemical.charAt(i + 1))){
      chemical = chemical.slice(0, i) + chemical.slice(i + 2, chemical.length); 
      i -= 2;
    }
    i++;
  }
  return chemical;
}

function canBeDestroyed(a, b){
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) == 32;
}
