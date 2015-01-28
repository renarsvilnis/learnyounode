var http = require('http');
var BufferList = require('bl');

var req = http.get(process.argv[2], function(res) {

  // version 1
  // var bl = new BufferList();
  // res.on('error', console.error);
  // // res.on('data', bl.append);
  // res.on('data', function(chunk) {
  //   bl.append(chunk);
  // });

  // res.on('end', function() {
  //   console.log(bl.length);
  //   console.log(bl.toString('utf-8'));
  // });

  // version 2
  res.pipe(BufferList(function (err, data) {
    if(err)
      return console.error(err);

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
