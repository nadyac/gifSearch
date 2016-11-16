fs = require('fs');
http = require('http');
url = require('url');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;


  if (action !== null && action !== "" && action !== "/") {
     console.log(action);
     try{
        var base64str = base64_encode('../' +action);
        //var img = fs.readFileSync('../' +base64str);
        // Set CORS headers
        res.writeHead(200, {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
        });
        //console.log(base64str);
        res.end(base64str, 'String');
     } catch (err){
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end('Gif not found');
     }
  }
}).listen(8080, '127.0.0.1');