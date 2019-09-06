var http = require("http");
var server = http.createServer((req, res) => {
    throw new Error("报错");
})
process.on('uncaughtWException', (err) => {
    console.log(err);
    process.exit(1)
})
server.listen(8888)