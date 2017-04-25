    var gulp = require('gulp'),
        gulpif = require('gulp-if'),
        rev = require('gulp-rev'),
        config = require('../config'),
        pathCommon = require('../common/pathCommon');

    module.exports.buildImg = function(){
        console.log('====buildImg===='.yellow);
        var src_path = pathCommon.allFile(config.paths.baseImg,config.ext.img);
        gulp.src(src_path,{base:config.paths.baseImg})
            .pipe(gulpif(!global.isDev,rev()))
            .pipe(gulp.dest(config.paths.distImg))
            .pipe(gulpif(!global.isDev,rev.manifest(config.paths.assetsImg,{
                merge: true
            })))
            .pipe(gulpif(!global.isDev,gulp.dest(config.paths.cur)))
    };