fs = require('fs');

const pathToFile = 'input.txt';
fs.readFile(pathToFile, (err, data) => {
  if (err) { console.error(err) };
  const array = data.toString().split('\n');
  array.pop(); //last item is newline and not valid input

  handleInput(array);

})

const reducer = (accumulator, currentValue) => accumulator + currentValue;

var handleInput = function(input){
  const integers = input.map(x => parseInt(x));
  const answer = integers.reduce(reducer);
  console.log(answer);
}