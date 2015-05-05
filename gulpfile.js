var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('styles', function() {
  return gulp.src('css/main.css')
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('css/main.css', ['styles']);
  gulp.watch('img/*', ['images']);
});

gulp.task('default', ['watch'], function() {
    gulp.start('styles', 'images', 'watch');
});


