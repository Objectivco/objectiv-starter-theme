var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var bourbon = require( 'bourbon' ).includePaths;
var neat = require( 'bourbon-neat' ).includePaths;
var svgmin = require( 'gulp-svgmin' );
var svgstore = require( 'gulp-svgstore' );
var del = require( 'del' );
var cheerio = require( 'gulp-cheerio' );

/**
 * Task to compile Sass styles
 */
gulp.task('sass', function() {
    gulp.src('assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: [bourbon, neat]
        }).on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('./assets/maps'))
        .pipe(gulp.dest('./'));
});

/**
 * Task to concat and compile JS files
 */
gulp.task('js', function() {
    gulp.src('assets/js/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min/'));
});

/**
 * Task to concat and compile svg into a single file
 */
gulp.task('svg', function() {
    gulp.src('assets/icons/svg-icons/*.svg')
        .pipe(svgmin())
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore({inlineSvg: true}))
        .pipe(cheerio({
            run: function($, file) {
                $('svg').attr('style', 'display: none');
                $('[fill]').removeAttr('fill');
                $('path').removeAttr('class');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(gulp.dest('assets/icons'))
})

/**
 * Watch tasks
 */
gulp.task('sass:watch', function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function() {
    gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task( 'icons', [ 'svg' ] );
gulp.task('default', ['sass', 'sass:watch', 'js', 'js:watch']);
