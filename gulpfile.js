var del       = require('del');
var gulp      = require('gulp');
var rename    = require('gulp-rename')
var postcss   = require('gulp-postcss');
var reporter  = require('postcss-reporter');
var stylelint = require('stylelint');

gulp.task("clean", function() {
  return del('dist');
});

gulp.task("css-lint", function() {
  return (
    gulp.src('src/tippy.css')
    .pipe(postcss([
      require('stylelint')
    ]))
  );
});

gulp.task('css', ['clean'], function() {
  return (
    gulp.src('./src/tippy.css')
    .pipe(postcss([
      require("postcss-cssnext")()
    ]))
    .pipe(gulp.dest('./dist'))
  );
});

gulp.task('cssnano', ['css'], function() {
  return (
    gulp.src([
      './dist/*.css',
      '!./dist/*.min.css'
    ])
    .pipe(postcss([
      require('cssnano')()
    ]))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist'))
  );
});

gulp.task('default', ['cssnano']);
