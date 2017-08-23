var gulp = require('gulp');
var inject = require('gulp-inject');

var paths = {
	src: 'src/**/*',
	srcHTML: 'src/**/*.html',
	srcCSS: 'src/**/*.css',
	srcJS: 'src/**/*.js',

	tmp: 'tmp',
	tmpHTML: 'tmp/index.html',
	tmpCSS: 'tmp/**/*.css',
	tmpJS: 'tmp/**/*.js',

	dist: 'dist',
	distHTML: 'dist/index.html',
	distCSS: 'dist/**/*.css',
	distJS: 'dist/**/*.js'
};

gulp.task('default', function() {
	console.log('Hello World!')
});

gulp.task('html', function() {
	return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function() {
	return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function() {
	return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html', 'css', 'js']);