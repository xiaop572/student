var net = require('net');
var scoket = net.connect(12306, "127.0.0.1");
scoket.on("connect", () => {
    console.log("连接到服务器了..")
})
scoket.write("客户端发送了一个请求...")
scoket.on("data", (data) => {
    console.log(data.toString());
})
scoket.setTimeout(5000)
scoket.on("timeout", () => {
    scoket.end();
    console.log("连接超时断开...")
})