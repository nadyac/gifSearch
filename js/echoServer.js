var http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });

  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
    
    response.writeHead(200, 
      {'Content-Type': 'image/gif' }
    );
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('<img src="gifs/spiriteAway.gif" width="50%" height="50%" viewBox="0 0 100 100" />');
    response.write('</body>');
    response.write('</html>');

  } else {
    res.writeHead(200, {'Content-Type': 'html/text' });
    response.statusCode = 404;
    response.end(img, 'binary');
  }
}).listen(8080);