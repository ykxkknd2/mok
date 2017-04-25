    var gulp = require('gulp'),
        gulpif = require('gulp-if'),
        glob = require('glob'),
        cssimport = require('gulp-cssimport'),
        cleanCss = require('gulp-clean-css'),
        rename = require('gulp-rename'),
        rev = require('gulp-rev'),
        revCollector = require('gulp-rev-collector');
        path = require('path'),
        config = require('../config'),
        pathCommon = require('../common/pathCommon');

var fs =require('fs')
    module.exports.buildCss = function(){
        console.time('====buildCss===='.yellow);

        return gulp.src(pathCommon.allFile(config.paths.srcMainCss,'css'),{base:config.paths.srcMainCss})
            .pipe(cssimport())
            .pipe(gulpif(!global.isDev,cleanCss({ compatibility: 'ie7'})))
            .pipe(gulpif(!global.isDev, rev()))
            .pipe(gulp.dest(config.paths.distCss))
            .pipe(gulpif(!global.isDev,rev.manifest(config.paths.assetsCss,{
                merge: true
            })))
            .pipe(gulpif(!global.isDev,gulp.dest(config.paths.cur)))
    };

    module.exports.revCss = function(){
        console.log('====revCss===='.yellow);
        gulp.src([config.paths.assetsImg,pathCommon.allFile(config.paths.distCss,'css')])
            .pipe(revCollector({replaceReved: true}))
            .pipe(gulp.dest(config.paths.distCss))
    };
