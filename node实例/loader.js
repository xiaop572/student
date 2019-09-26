var fs = require('fs');
var files = fs.readdirSync('web');
var pathMap = new Map();
var controllerArr = [];
for (var i = 0; i < files.length; i++) {
    var temp = require('./web/' + files[i]);
    if (temp.path) {
        for ([key, value] of temp.path) {
            if (!pathMap.get(key)) {
                pathMap.set(key, value);
            } else {
                throw new Error("url path异常，url:" + key);
            }
        }
        controllerArr.push(temp);
    }
}
module.exports = pathMap;