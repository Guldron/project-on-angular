var gulp = require('gulp'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var bowerComponents = ['./app/bower_components/angular/angular.min.js',
    './app/bower_components/angular-ui-router/release/angular-ui-router.js',
    './app/bower_components/jquery/dist/jquery.min.js'];

var jsFiles = ['./app/app.module.js',
    './app/*.js',
    './app/modules/tabs/*.js',
    './app/modules/maintain/*.js',
    './app/modules/drop-down/*.js',
    './app/modules/search-form/*.js',
    './app/modules/search-results/*.js'];

var templates = ['./app/modules/tabs/tabs.directive.html',
    './app/modules/maintain/maintain.html',
    './app/modules/drop-down/drop-down.directive.html',
    './app/modules/search-form/search-form.directive.html',
    './app/modules/search-results/search-results.directive.html',
    './app/partials/upload.html',
    './app/partials/reports.html',
    './app/partials/maintenance.html'];

gulp.task('bower', function () {
    return bower();
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./public/index.html')
        .pipe(connect.reload())
});

gulp.task('templates', function () {
    gulp.src(templates)
        .pipe(gulp.dest('./public/vendor/templates/'))
        .pipe(connect.reload())
});


gulp.task('bower_components', function () {
    gulp.src(bowerComponents)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/vendor'))
        .pipe(connect.reload())
});

gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/vendor'))
        .pipe(connect.reload())
});

gulp.task('js', function () {
    gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/vendor'))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('bower.json', ['bower_components'])
    gulp.watch('./public/index.html', ['html'])
    gulp.watch(templates, ['templates'])
    gulp.watch('./app/css/*.css', ['css'])
    gulp.watch(jsFiles, ['js'])
});

gulp.task('default', ['connect', 'html', 'templates', 'bower', 'bower_components', 'css', 'js', 'watch']);