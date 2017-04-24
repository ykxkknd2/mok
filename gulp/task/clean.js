    var rimraf = require('rimraf'),
        colors = require('colors'),
        config = require('../config'),
        pathCommon = require('../common/pathCommon');

    module.exports = {
        js : function(next){
            console.log('====clean js===='.yellow);
            rimraf(pathCommon.allFile(config.paths.distJs),next);
        }
    };