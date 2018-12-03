const reader = require('../reader.js');
const util = require('util');

const pathToFile = __dirname+'/input.txt';

let fabric = [];
for(let i = 0; i < 1000; i++){
  fabric[i] = [];
}

//#1 @ 2,3: 4x5

var partOne = function(input){

  for(id in input){
    addToFabric(getBounds(input[id]));
  }
  let total = 0;
  for(row in fabric){
    total += fabric[row].reduce((acc, cur) => {if(cur > 1){acc++} return acc}, 0 );
  }
  console.log(total);

}(reader.parseTextFileAsArray(pathToFile));

function addToFabric(rect){
  for(var i = rect.x; i < rect.x + rect.width; i++){
    for(var j = rect.y; j < rect.y + rect.height; j++){
      (fabric[i][j] > 0 ? fabric[i][j]++ : fabric[i][j] = 1);
    }
  }
}

function getBounds(id){
  id = id.split(' ');
  let rect = {
    x: parseInt(id[2].split(',')[0]),
    y: parseInt(id[2].split(',')[1]),
    width: parseInt(id[3].split('x')[0]),
    height: parseInt(id[3].split('x')[1]),
  };
  return rect;
}