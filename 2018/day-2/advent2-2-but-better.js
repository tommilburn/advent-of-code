const reader = require('../reader.js');
const Trie= require('./trie.js');

const pathToFile = __dirname+'/input.txt';
const input = reader.parseTextFileAsArray(pathToFile);

var t = new Trie();

var partTwo = function(){
  for(let i in input){
    if(checkAndBuildTrie(input[i])){
      break;
    }
  }
}();

function checkAndBuildTrie(s){
  let permutations = [];
  for(let i = 0; i < s.length; i++){
    permutations.push(s.slice(0, i) + s.slice(i + 1, s.length));
  }
  for(var a in permutations){
    if(t.search(permutations[a]) > 0){
      console.log("found it: " + permutations[a]);
      return true;
    }
  }
  for(var a in permutations){
    t.add(permutations[a]);
  }
  return false;
}
