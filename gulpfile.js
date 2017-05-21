var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync',['sass'],function(){
  browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['browserSync']);
