var chokidar = require('chokidar'),
    colors = require('colors'),
    path = require('path'),
    config = require('./gulp/config'),
    devServer = require('./gulp/devServer'),
    pathCommon = require('./gulp/common/pathCommon');
    gulpFile = require('./gulp/gulpfile');

var mok = {
    run : function(argv){
        global.isDev = argv[2] != 'build';
        global.isDev?  this.devServer() : this.build(argv[3]);
    },
    devServer : function(){
        devServer.init();
        var watcher = chokidar.watch(pathCommon.allFile(config.paths.baseJs,"hbs"));
        watcher.on('all',function(evt,path){
            console.log(`====${evt}: ${path}====`.green);
            gulpFile.setTaskConfig({file:path});
            gulpFile.run('compileTpl');
        })
    },
    build : function(type){
        type == 'css'? gulpFile.run('style') : gulpFile.run('script');
    }
};

module.exports = mok;