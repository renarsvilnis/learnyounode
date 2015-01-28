var fs = require('fs');
var path = require('path');

var getFilteredFiles = function(foldername, extension, callback) {

  extension = '.' + extension;



  fs.readdir(foldername, function(err, files) {

    if(err)
      return callback(err);

    var filtered = [];

    files.forEach(function(file) {
      if(path.extname(file) === extension)
        filtered.push(file);
    });

    return callback(null, filtered);

  });
};


module.exports = getFilteredFiles;
