var reader = require('../reader.js');
const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);

var partTwo = function(){
  let seen = {};
  let accumulator = 0;
  while(true){
    for(let i = 0; i < input.length; i++){
      accumulator += parseInt(input[i]);
      if(seen[accumulator]){
        console.log(accumulator);
        return;
      }
      seen[accumulator] = true;
    }
  }
}();