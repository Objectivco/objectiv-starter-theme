var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

/**
 * Task to compile Sass styles
 */
gulp.task('sass', function () {
    gulp.src('assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'nested'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./assets/maps'))
    .pipe(gulp.dest('./'));
});

/**
 * Watch tasks
 */
gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
