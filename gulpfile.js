var gulp = require('gulp');
var inject = require('gulp-inject');
var to5 = require('gulp-6to5');
var annotate = require('gulp-ng-annotate');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var es = require('event-stream');

gulp.task('scripts', function () {
    var javascripts = gulp.src('./src/**/*.js')
        .pipe(to5());

    var typescripts = gulp.src('./src/**/*.ts')
        .pipe(ts({
            target: 'ES5'
        }));

    es.merge(typescripts.js, javascripts)
        .pipe(annotate())
        .pipe(gulp.dest('./build'));
});

gulp.task('styles', function() {
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build'));
});

gulp.task('templates', function() {
    return gulp.src('./src/**/*.tpl.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('index', ['scripts', 'styles', 'templates'], function() {

    var target = gulp.src('./src/index.html');

    var js = gulp.src([
        '../bower_components/jquery/dist/jquery.js',
        '../bower_components/angular/angular.js',
        '../bower_components/angular-ui-router/release/angular-ui-router.js',
        '../bower_components/bootstrap/dist/js/bootstrap.js',
        '../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        '../bower_components/angular-translate/angular-translate.js',
        '../bower_components/angular-translate-handler-log/angular-translate-handler-log.js',
        'app/utils/register.js',
        'app/app.js',
        '**/!(app.js)'
        ], {read: false, cwd: './build/'});

    var css = gulp.src([
        '../bower_components/bootstrap/dist/css/bootstrap.css',
        '../bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'styles/main.css'
        ], {read: false, cwd: './build/'});

    target
        .pipe(inject(js, { addRootSlash: false }))
        .pipe(inject(css, { addRootSlash: false }))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['index'], function () {

    gulp.watch(['./src/**/*.js', './src/**/*.ts'], ['scripts']);
    gulp.watch('./src/**/*.less', ['styles']);
    gulp.watch('./src/**/*.tpl.html', ['templates']);
    gulp.watch('./src/index.html', ['index']);

});


gulp.task('default', ['index']);
