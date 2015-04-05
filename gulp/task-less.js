'use strict'
var gulp      = require('gulp')
var gulp_less = require('gulp-less');


gulp.task('less', function() {
  return gulp.src('src/css/**/*.less')
    .pipe(gulp_less())
    .pipe(gulp.dest('dest/css/'));
});
