//gulpfile;

var gulp = require('gulp');

var fs = require('fs');


// read in all gulp tasks from "/gulp" subdir
fs.readdirSync(__dirname + '/gulp').forEach( function(task){
    require( './gulp/' + task);
});

gulp.task('dev', ['watch:js','watch:css', 'dev:server']);    
