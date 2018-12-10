var reader = require('../reader.js');
const pathToFile = __dirname+'/input.txt';

var partOne = function(input){
  let guardMap = [];

  const timeLog = input.sort();
  let shiftEvents = []
  for(const line in input){
    if(input[line].indexOf('begins shift') != -1){
      if(shiftEvents.length > 0){
        let currentGuard = shiftEvents.shift().split(' ')[3].substring(1);
        (guardMap[currentGuard] = guardMap[currentGuard] || []).push(parseShift(shiftEvents));
        guardMap[currentGuard].push(parseShift(shiftEvents));
      }
      shiftEvents = [input[line]];
    } else {
      shiftEvents.push(input[line]);
    }
  }
  parseGuardMap(guardMap);

}(reader.parseTextFileAsArray(pathToFile));

function parseShift(shiftEvents){
  shiftEvents = shiftEvents.map((x) => {return x.substring(15).split('] ')})
  let guardShiftDescription = [];
  for(let e of shiftEvents){
    guardShiftDescription[parseInt(e[0])] = (e[1].indexOf('falls asleep') > -1 ? 1 : 0);
  }
  let state =  0// guard is not sleeping at beginning of shift
  for(let i = 0; i < 60; i++){
    if(guardShiftDescription[i] > -1){
      state = guardShiftDescription[i];
    }
    guardShiftDescription[i] = state;
  }
  return guardShiftDescription;
}

function parseGuardMap(guardMap){
  let stats = [];
  for(let guard in guardMap){
    let sum = guardMap[guard].shift();
    for(let shift of guardMap[guard]){
      for(var i = 0; i < sum.length; i++){
        sum[i] += shift[i]
      }
    }
    const sumall = (accumulator, currentValue) => accumulator + currentValue;
    const largest = (largest, current) => {if(current > largest){return current} return largest};

    console.log(sum.indexOf(sum.reduce(largest, 0)), guard, sum.join(','));
  }
}
