var http = require('http');
var fs = require('fs');

//404
function send404(response){
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error, wrong ends.");
  response.end();
}

//Handle user request
function onRequest(request, response){
  //If user request is for index.html
  if(request.method == 'GET' && request.url == '/'){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  }else{
    send404(response);
  }
};

//Create server
http.createServer(onRequest).listen(9001);
console.log("Server is up @ localhost:9001");
