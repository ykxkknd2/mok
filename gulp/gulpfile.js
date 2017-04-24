var gulp = require('gulp'),
    colors = require('colors'),
    runSequence = require('gulp-sequence');

var cleanTask = require('./task/clean'),
    buildJsTask = require('./task/buildjs');

var activeFile;

gulp.task('cleanjs',cleanTask.js);
gulp.task('compileTpl',function(){
    buildJsTask.compileTpl(activeFile);
    gulp.clearTaskConfig();
});
gulp.task('vendor',buildJsTask.vendor);
gulp.task('js',buildJsTask.js);
gulp.task('script',function(next){
    console.log('====script===='.yellow);
    runSequence('cleanjs','vendor','compileTpl','js',next);
});

gulp.setTaskConfig = function(param){
    activeFile = param.file || '';
};

gulp.clearTaskConfig = function(){
    activeFile = '';
};

module.exports = gulp;