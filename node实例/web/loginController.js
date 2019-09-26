var path = new Map();

function login(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.write('你好啊');
    response.end()
}
path.set('/login', login);

function getData(request, response) {

}
path.set('/getData', getData);
module.exports.path = path;