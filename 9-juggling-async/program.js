var http = require('http');
var BufferList = require('bl');

var urls = process.argv.splice(2,3);
var urlCount = urls.length;
var results = [];

var getData = function(url, callback) {
  var req = http.get(url, function(res) {

    res.pipe(BufferList(function (err, data) {
      if(err)
        return callback(err);

      return callback(null, data.toString());
    }));
  });
};

var printResults = function() {
  results.forEach(function(string) {
    console.log(string);
  });
};

urls.forEach(function(url, index) {
  getData(url, function(err, data) {
    results[index] = data;

    urlCount--;

    if(urlCount === 0)
      printResults();

  });
});


