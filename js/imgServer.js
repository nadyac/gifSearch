fs = require('fs');
http = require('http');
url = require('url');

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var imgPath = request.pathname;

    /* Check that the requested gif path is valid
    *  if valid then resturn the gif as base64 string
    *  else return an error message
    */
  if (imgPath !== null && imgPath !== "" && imgPath !== "/") {
     console.log(imgPath);
     try{
        var base64str = readFileSync('../' +imgPath);
        /* Set headers */
        res.writeHead(200, {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
        });
        res.end(base64str, 'binary');
     } catch (err){ /* catch errors */
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end('Gif not found');
     }
  }
}).listen(8080, '127.0.0.1');