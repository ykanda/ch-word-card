'use strict'
var gulp      = require('gulp')
var gulp_util = require('gulp-util');
var gulp_coffee    = require('gulp-coffee');

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dest/js/'))
})



gulp.task('coffee', function() {
  return gulp.src('src/coffee/**/*.coffee')
    .pipe(gulp_coffee({ bare: true }).on('error', gulp_util.log))
    .pipe(gulp.dest('dest/js/'))
})
