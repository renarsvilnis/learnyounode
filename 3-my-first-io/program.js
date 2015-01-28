var fs = require('fs');

var filename = process.argv[2];
var file = fs.readFileSync(filename, 'utf-8');

var splitFile = file.split('\n');
var newlineCount = splitFile.length - 1; // ends with new line

console.log(newlineCount);


