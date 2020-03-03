var http = require('http')
var url = require('url')

http.createServer(onRequest).listen(443);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);
  showPage(response,pathName)
  }
function showPage(response,pathName){
    if(contentMap[pathName]){
        response.writeHead(200, {'content-Type': 'text/html'})
        response.write(contentMap[pathName]);
        response.end();    }
        else{

            response.writeHead(200, {'content-Type': 'text/html'})
            response.write('404 page not found');
            response.end();    }
        
}
var contentMap = {
'/' : '<h1>welcome to the site',
'/contct': '<h1>contacts',
'/About' :'<h1>About',
'/Users' : '<h1>Users'

}