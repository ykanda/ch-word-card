'use strict';
var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('html', function() {
  return gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('dest/'));
});


gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dest/js/'));
});


gulp.task('less', function() {
  return gulp.src('src/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dest/css/'));
});



var watches = [
  { glob: './src/html/**/*.html', task: 'html' },
  { glob: './src/css/**/*.less',  task: 'less' },
  { glob: './src/js/**/*.js',     task: 'js'   },
];
watches.forEach(
  function (value, index, array) {
    console.log(value);
    gulp.task('watch', function() {
      gulp.watch(
        value.glob,
        function (event) { gulp.run(value.task); }
      );
    });
  }
);


gulp.task('default', ['html', 'js', 'less', 'watch']);
