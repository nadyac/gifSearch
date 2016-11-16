fs = require('fs');
http = require('http');
url = require('url');


http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action !== null && action !== "" && action !== "/") {
     console.log(action);
     try{
        var img = fs.readFileSync('../' +action)
        res.writeHead(200, {'Content-Type': 'image/gif' });
        res.end(img, 'binary');
     } catch (err){
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end('Gif not found');
     }
  }
}).listen(8080, '127.0.0.1');