var http = require('http');
var fs = require('fs')
var url = require('url');
var server = http.createServer((request, response) => {
    var config = require('./server.config');
    // console.log(request.url);
    // console.log(url.parse(request.url).pathname, '路径');
    // console.log(url.parse(request.url, true).query, '参数');
    response.writeHead(200);
    response.write("<html><body>hello wrold</body></html>");
    response.end();
})
server.listen(12307, "127.0.0.1");
server.on("listening", () => {
    console.log("服务器已经开启")
})
server.on("connection", () => {
    console.log("有新的连接")
})