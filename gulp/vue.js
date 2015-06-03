var config = {
  dest : "./dest",
  webpack : {
    entry : "./src/vue/main.js",
    output : {
      filename : "bundle.js",
    },
    resolve : {
      extentions : ['', 'js', 'vue', 'css']
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.vue$/, loader: "vue" },

        //    { test: /\.css$/, loader: "style!css" },
        //    // => "style" and "css" loader is used for ".css" files
        //    // Alternative syntax:
        //    { test: /\.css$/, loaders: ["style", "css"] },

        // **IMPORTANT** This is needed so that each bootstrap js file required by
        // bootstrap-webpack has access to the jQuery object
        { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
        
        // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
        // loads bootstrap's css.
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000" },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000" } 
        /*
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/x-font-woff2" },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/x-font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" } 
        //*/
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
