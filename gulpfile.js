'use strict';
var gulp      = require('gulp');
var gulp_util = require('gulp-util');
var gulp_util = require('gulp-util');
var less      = require('gulp-less');
var coffee    = require('gulp-coffee');


gulp.task('html', function() {
  return gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('dest/'));
});


gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dest/js/'));
});


gulp.task('coffee', function() {
  return gulp.src('src/coffee/**/*.coffee')
    .pipe(coffee({ bare: true }).on('error', gulp_util.log))
    .pipe(gulp.dest('dest/js/'));
});


gulp.task('less', function() {
  return gulp.src('src/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/css/'));
});



gulp.task('watch', function()
{
  var watches = [
    { glob: './src/html/**/*.html',     task: [ 'html'   ]},
    { glob: './src/css/**/*.less',      task: [ 'less'   ]},
    { glob: './src/coffee/**/*.coffee', task: [ 'coffee' ]},
    { glob: './src/js/**/*.js',         task: [ 'js'     ]},
  ];
  watches.forEach(
    function (value, index, array) {
      gulp.watch(
        value.glob,
        value.task
      );
    }
  );
});




gulp.task('default', ['html', 'coffee', 'js', 'less']);
