'use strict';

var require_dir  = require('require-dir')
var require_task = require_dir('./gulp', { recurse : true })
var gulp         = require('gulp');


gulp.task('watch', function()
{
  var watches = [
    { glob: './src/html/**/*.html', task: [ 'html' ]},
    { glob: './src/vue/**/*.vue',   task: [ 'vue'  ]},
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

gulp.task('default', ['vue', 'html']);
