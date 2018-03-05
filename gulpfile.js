const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const karma = require('karma').Server;
const uglify = require('gulp-uglifyjs');

// Test task
gulp.task('test', function (done) {
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, function (exitCode) {
    done();
    process.exit(exitCode);
  }).start();
});

// Build task
gulp.task('build', function() {
  gulp.src(['./src/smoothie.js'])
    .pipe(babel({
      presets: ['env'],
      plugins: ['add-module-exports', 'transform-object-rest-spread',
        'transform-es2015-modules-umd'
      ]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename('smoothie.min.js'))
    .pipe(gulp.dest('./dist'))
});

// Set the defaukt task as server
gulp.task('default', ['build']);
