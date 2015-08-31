var gulp = require('gulp'),
	concat = require('gulp-concat'),
	mainBowerFiles = require('main-bower-files'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('app/index.html')
	.pipe(connect.reload())
});

gulp.task('bower_components', function(){
	gulp.src(mainBowerFiles(), {base: 'app/bower_components'})
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('./app'))
});

gulp.task('css', function () {
	gulp.src('app/css/*.css')
	.pipe(concat('app.css'))
	.pipe(gulp.dest('./app'))
	.pipe(connect.reload())
});

gulp.task('js', function () {
	gulp.src('app/js/*.js')
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./app'))
	.pipe(connect.reload())
});

gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower_components'])
	gulp.watch('app/index.html', ['html'])
	gulp.watch('app/css/*.css', ['css'])
	gulp.watch('app/js/*.js', ['js'])
});

gulp.task('default', ['connect', 'html', 'bower_components', 'css', 'js', 'watch']);