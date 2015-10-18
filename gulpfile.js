var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

var paths = {
	js: ['./src/**/*.js']
};

gulp.task('js', function() {
	return gulp.src(paths.js)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['js']);
