var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('css/main.css')
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('css/main.css', ['styles']);
});

gulp.task('default', ['watch'], function() {

});