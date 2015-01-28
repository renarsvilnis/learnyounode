var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

  var params = url.parse(req.url, true);

  // check if valid method
  if (req.method != 'GET') {
    res.writeHead(404, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({
      'error': 'Wrong method'
    }) + '\n');
  }

  // check if valid url
  if(/^\/api\/parsetime/.test(params.pathname)) {
    if(typeof params.query.iso == 'undefined')
      return errMissingParameters(res);

    res.writeHead(200, {'Content-Type': 'application/json'});

    var inTime = new Date(params.query.iso);

    return res.end(JSON.stringify({
      'hour': inTime.getHours(),
      'minute': inTime.getMinutes(),
      'second': inTime.getSeconds()
    }) + '\n');

  } else if(/^\/api\/unixtime/.test(params.pathname)) {
    if(typeof params.query.iso == 'undefined')
      return throwMissingParameters(res);

    res.writeHead(200, {'Content-Type': 'application/json'});

    return res.end(JSON.stringify({
      'unixtime': new Date(params.query.iso).getTime()
    }) + '\n');
  }

  // if all else fails 404
  res.writeHead(404);
  return res.end();
});

server.listen(process.argv[2]);

var errMissingParameters = function(res) {
  res.writeHead(404, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify({
    'error': 'misssing necessaray parameters'
  }) + '\n');
};
