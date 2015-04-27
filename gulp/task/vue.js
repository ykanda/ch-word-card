var config = {
  dest : "./dest/js",
  webpack : {
    entry : "./src/vue/main.js",
    output : {
      filename : "bundle.js",
    },
    resolve : {
      extentions : ['', 'js', 'vue']    
    },
    module: {
      loaders: [
        { test: /\.vue$/, loader: "vue" },
      ]
    }
  }
}


var gulp         = require('gulp')
var gulp_webpack = require('gulp-webpack')


gulp.task('vue', function() {
  gulp.src(config.webpack.entry)
  .pipe(gulp_webpack(config.webpack))
  .pipe(gulp.dest(config.dest))
})
