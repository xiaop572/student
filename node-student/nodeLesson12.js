var http = require('http');
var usr = require('url');
var connect = require('mysql');
var sql = connect.createConnection({
    host: '49.234.96.58',
    user: 'root',
    password: 'oneinstack',
    database: 'mysql'
})
sql.connect();
sql.query('select * from user', function(err, res) {
    console.log(err, res)
})
http.createServer(function(req, res) {
    res.writeHead(200);
    res.write('来了老弟');
    res.end()
}).listen('1126');