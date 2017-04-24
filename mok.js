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
        global.isDev?  this.devServer() : this.build();
    },
    devServer : function(){
        devServer.init();
        console.log(pathCommon.allFile(config.paths.base,"hbs"))
        var watcher = chokidar.watch(pathCommon.allFile(config.paths.base,"hbs"));
        watcher.on('all',function(evt,path){
            console.log(`====${evt}: ${path}====`.green);
            gulpFile.setTaskConfig({file:path});
            gulpFile.run('compileTpl');
        })
    },
    build : function(){
        gulpFile.run('script');
    }
};

module.exports = mok;