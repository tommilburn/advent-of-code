fs = require('fs');

const pathToFile = 'input.txt';
fs.readFile(pathToFile, (err, data) => {
  if (err) { console.error(err) };
  const array = data.toString().split('\n');
  array.pop(); //last item is empty line and not valid input

  handleInput(array);

})

const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);

var handleInput = function(input){
  const answer = input.reduce(reducer, 0);
  console.log(answer);
}