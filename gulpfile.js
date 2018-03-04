
'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const $ = require('gulp-load-plugins')();
const browserify = require("browserify");

const sassPath = [
	'node_modules/foundation-sites/scss'
]

const ENVORIMENT  = {
	assets:'/assets',
	nodemodules: './node_modules/',
	dev:{
		root: './dev',
		img:'img/*.*',
		js:'js/**/*.js',
		css: 'scss/*.scss',
		html:'*.html',
		fonts:'fonts/*',
	},
	dist:{
		root:'./dist',
		img:'img/',
		js:'js/',
		css: 'css/',
		html:'*.html',
		fonts:'fonts/',
	},
};

gulp.task('js', function () {
	gulp
    .src(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.js}`)
    .pipe(babel({ presets: ["env"] }))

    .pipe(uglify())
    .pipe(concat("scripts.js"))
    // .pipe(browserify(`${ENVORIMENT.dist.root}/${ENVORIMENT.assets}/${ENVORIMENT.dist.js}`))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .on("error", function(err) {
      gutil.log(gutil.colors.red("[Error]"), err.toString());
    })
    .pipe(gulp.dest(`${ENVORIMENT.dist.root}/${ENVORIMENT.assets}/${ENVORIMENT.dist.js}`));
});
gulp.task("fonts", () => {
  return gulp
    .src(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.fonts}`)
    .pipe(gulp.dest(`${ENVORIMENT.dist.root}/${ENVORIMENT.assets}/${ENVORIMENT.dist.fonts}`));
});

gulp.task('css',function () {
	var plugins = [

		cssnano({ zindex: false }),
	];

	return gulp
    .src(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.css}`)
    .on("error", sass.logError)
    .pipe($.sass({
        includePaths: sassPath,
        outputStyle: "expanded"
      }).on("error", $.sass.logError))
    .pipe($.autoprefixer({
        browsers: ["last 3 versions", "> 1%", "ie 9", "Firefox ESR", "iOS 7"]
      }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
	.pipe(gulp.dest(`${ENVORIMENT.dist.root}/${ENVORIMENT.assets}/${ENVORIMENT.dist.css}`))
	.pipe(browserSync.stream());
});

gulp.task('image', () =>
	gulp.src(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.img}`)
		.pipe(imagemin())
		.pipe(gulp.dest(`${ENVORIMENT.dist.root}/${ENVORIMENT.assets}/${ENVORIMENT.dist.img}`))
);

gulp.task('watch', function () {
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.css}`, ['css'])
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.js}`, ['js'])
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.img}`, ['image'])
});

gulp.task('serve',['css','image','js', 'fonts','watch'], function() {

			browserSync.init({
			server: `${ENVORIMENT.dist.root}`,
		}
	);
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.js}`).on('change', browserSync.reload);
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.css}`).on('change', browserSync.reload);
	gulp.watch(`${ENVORIMENT.dev.root}/${ENVORIMENT.assets}/${ENVORIMENT.dev.img}`).on('change', browserSync.reload);
    gulp.watch(`${ENVORIMENT.dist.root}/${ENVORIMENT.dist.html}`).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
