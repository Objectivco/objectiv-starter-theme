const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const bourbon = require("bourbon").includePaths;
const neat = require("bourbon-neat").includePaths;
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const del = require("del");
const cheerio = require("gulp-cheerio");
const babel = require("gulp-babel");

const paths = {
    sass: "assets/sass/**/*.scss",
    js: "assets/js/src/*.js",
    icons: "assets/icons/svg-icons/*.svg"
};

/**
 * Task to compile Sass styles
 */
gulp.task("sass", () => {
    gulp
        .src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "expanded",
                includePaths: [bourbon, neat]
            }).on("error", sass.logError)
        )
        .pipe(
            postcss([
                autoprefixer({
                    browsers: ["last 2 version"]
                })
            ])
        )
        .pipe(sourcemaps.write("./assets/maps"))
        .pipe(gulp.dest("./"));
});

/**
 * Task to concat and compile svg into a single file
 */
gulp.task("svg", () => {
    gulp
        .src(paths.icons)
        .pipe(svgmin())
        .pipe(rename({ prefix: "icon-" }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(
            cheerio({
                run: function($, file) {
                    $("svg").attr("style", "display: none");
                    $("[fill]").removeAttr("fill");
                    $("path").removeAttr("class");
                },
                parserOptions: { xmlMode: true }
            })
        )
        .pipe(gulp.dest("assets/icons"));
});

/**
 * Concat and compile JS files
 */
gulp.task("concat", () =>
    gulp
        .src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(
            babel({
                presets: ["es2015"]
            })
        )
        .pipe(concat("index.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets/js"))
);

/**
 * Minify JS 
 */
gulp.task("uglify", ["concat"], () =>
    gulp
        .src(["assets/js/*.js", "!assets/js/*.min.js"])
        .pipe(rename({ suffix: ".min" }))
        .pipe(
            uglify({
                mangle: false
            })
        )
        .pipe(gulp.dest("assets/js"))
);

/**
 * Watch tasks
 */
gulp.task("sass:watch", function() {
    gulp.watch("./assets/sass/**/*.scss", ["sass"]);
});

gulp.task("js:watch", function() {
    gulp.watch("./assets/js/**/*.js", ["js"]);
});

gulp.task("icons", ["svg"]);
gulp.task("js", ["uglify"]);
gulp.task("default", ["sass", "sass:watch", "js", "js:watch"]);
