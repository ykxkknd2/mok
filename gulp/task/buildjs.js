    var gulp = require('gulp'),
        glob = require('glob'),
        path = require('path'),
        colors = require('colors'),
        handlebars = require('gulp-handlebars'),
        defineModule = require('gulp-define-module'),
        config = require('../config'),
        concat = require('gulp-concat'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        gulpif = require('gulp-if'),
        amdOptimize = require("amd-optimize"),
        rev = require('gulp-rev'),
        pathCommon = require('../common/pathCommon');

    module.exports.compileTpl = function(file){
        console.log('====compileTpl===='.yellow);
        var src_path = file || pathCommon.allFile(config.paths.base,"hbs");
        gulp.src(src_path,{base:'.'})
            .pipe(handlebars())
            .pipe(defineModule('amd'))
            .pipe(gulp.dest('.'));
    };

    module.exports.vendor = function(){
        console.log('====vendor===='.yellow);
        var src_path = pathCommon.childFile(config.paths.srcVendor,"js");
        gulp.src(src_path, {base: config.paths.base})
            .pipe(gulp.dest(config.paths.distJs));
    };

    module.exports.js = function(){
        console.time('====build js===='.yellow);
        var amdConfig = {
            'baseUrl': path.join(config.paths.cur,config.paths.base),
            'configFile': path.join(config.paths.cur,config.paths.srcReqConfig)
        };

        var file,pathObj,name,newName;

        glob(pathCommon.allFile(config.paths.srcMainJs,'js'),function(err,files){
            while(files.length){
                file = files.shift();
                pathObj = path.parse(file);
                name = path.join(pathObj.dir, pathObj.name);
                newName = name.replace(/\/|\\/ig, '_').replace('www_main_', '');
                gulp.src(file)
                    .pipe(amdOptimize(path.join(process.cwd(),name), amdConfig))
                    .pipe(concat(pathObj.base))
                    .pipe(rename({
                        basename: newName,
                        extname: pathObj.ext
                    }))
                    .pipe(gulpif(!global.isDev, uglify()))
                    .pipe(gulpif(!global.isDev, rev()))
                    .pipe(gulp.dest(config.paths.distJs))
                    .pipe(gulpif(!global.isDev,rev.manifest(config.paths.assets,{
                        merge: true
                    })))
                    .pipe(gulpif(!global.isDev,gulp.dest(config.paths.cur)))
            }
            console.timeEnd('====build js===='.yellow);
        });
    };