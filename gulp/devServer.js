    var http = require('http'),
        fs = require('fs'),
        path = require('path'),
        config = require('./config');


    function init(){
        http.createServer(function(req,res){
            var match = req.url.match(config.devServer.pathRegexp);
            var filePath;
            if(!match){
                filePath = path.join(config.paths.base,req.url);
                readFile(filePath,res);
            }else if(/vendor/.test(match[0])){
                filePath = path.join(config.paths.srcVendor,match[1]) + '.js';
                readFile(filePath,res);
            }else{
                var mainFilePath = match[1].split('_').join('/')
                filePath = path.join(config.paths.base,'main',mainFilePath) + '.js';
                readFile(filePath,res);
            }
        }).listen(config.devServer.port);

        console.log(`====devServer start at port ${config.devServer.port}====`.yellow)
    }

    function readFile(filePath,res){
        if (fs.existsSync(filePath)) {

            res.writeHead(200, {
                'Content-Type': 'application/x-javascript',
                'Cache-Control': 'max-age=0'
            });

            console.log('找到入口文件：', filePath);
            res.end(fs.readFileSync(filePath));
        }else{
            console.log('找不到文件：',filePath);
            res.statusCode = 404;
            res.end("can't find the file");
        }
    }


    module.exports = {
        init
    };