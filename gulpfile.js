var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var source = require("vinyl-source-stream");
var config = require('./config');


// Watch for JS changes.
gulp.task('browserify', function() {
  var bundler = browserify(config.main, watchify.args);

  function bundle() {
    bundler.bundle()
      // log errors if they happen
      .on('error', function(err) {
        var displayErr = gutil.colors.red(err);
        gutil.log(displayErr);
        gutil.beep();
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist'));
  }

  return bundle();
});


gulp.task('default', ['browserify'], function () {
  return true;
});



