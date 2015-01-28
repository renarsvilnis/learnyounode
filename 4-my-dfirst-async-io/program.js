var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf-8', function(err, data) {
  var splitFile = data.split('\n');
  var newlineCount = splitFile.length - 1; // ends with new line

  console.log(newlineCount);

});
