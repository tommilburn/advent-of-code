fs = require('fs');

module.exports = {
    parseTextFileAsArray: function (pathToFile){
        const data = fs.readFileSync(pathToFile);
        const array = data.toString().split('\n');
        array.pop(); //last item is empty and not valid input
        return array;
    }
}
