var gulp = require('gulp');
var svgmin = require( 'gulp-svgmin' );
var svgstore = require( 'gulp-svgstore' );
var del = require( 'del' );
var cheerio = require( 'gulp-cheerio' );


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

gulp.task( 'icons', [ 'svg' ] );
