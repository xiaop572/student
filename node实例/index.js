var http = require('http');
var url = require('url');
var loader = require('./loader');

function server(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (loader.get(pathname)) {
        loader.get(pathname)(request, response);
    } else {
        response.writeHead(500);
        response.write('<html><body>500 not found</body></html>');
        response.end();
    }
}
http.createServer(server).listen(12306);

function isStaic(pathName) {
    var staicArr = ["html", "js", "css", "jpg", "png", "gif", "ico", "josn"]
}