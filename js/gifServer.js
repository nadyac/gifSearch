fs = require('fs');
http = require('http');
url = require('url');

/* function to encode file data to base64 encoded string */
function base64_encode(file) {
    /* read binary data */
    var bitmap = fs.readFileSync(file);
    /* convert binary data to base64 encoded string */
    return new Buffer(bitmap).toString('base64');
}

http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var gifPath = request.pathname;

    /* Check that the requested gif path is valid
    *  if valid then resturn the gif as base64 string
    *  else return an error message
    */
  if (gifPath !== null && gifPath !== "" && gifPath !== "/") {
     console.log(gifPath);
     try{
        var base64str = base64_encode('../' +gifPath);
        /* Set headers */
        res.writeHead(200, {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
        });
        res.end(base64str, 'String');
     } catch (err){ /* catch errors */
      console.log("gif not found");
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end('Gif not found');
     }
  }
}).listen(8080, '127.0.0.1');