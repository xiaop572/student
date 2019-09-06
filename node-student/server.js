var net = require('net');
var fs = require('fs');
var server = net.createServer();
server.listen(12306, "127.0.0.1");
server.on("listening", () => {
    console.log("开启服务器了....")
})
server.on("connection", (scoket) => {
    scoket.on("data", (data) => {
        console.log(data.toString());
    })
    var index = fs.readFileSync('./index.html');
    scoket.write("http1.1\r\n\r\n");
    scoket.write(index);
    scoket.end()
})