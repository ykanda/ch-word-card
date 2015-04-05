'use strict'
var gulp      = require('gulp');
var gulp_shell     = require('gulp-shell');


gulp.task('csv2dat', function() {
  return gulp.src('src/csv/dict.csv', { read: false })
    .pipe(gulp_shell([
      './bin/csv2dat <%= file.path %>'
    ]));
});
