const gulp = require('gulp');
const inject = require('gulp-inject');
const to5 = require('gulp-6to5');
const annotate = require('gulp-ng-annotate');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const es = require('event-stream');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('scripts', ['venderBuild'], function () {
    const javascripts = gulp.src('./src/**/*.js')
        .pipe(to5());

    const typescripts = gulp.src('./src/**/*.ts')
        .pipe(ts({
            target: 'ES5'
        }));

    es.merge(typescripts.js, javascripts)
        .pipe(annotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('venderBuild', function() {
	return gulp.src([
		'../bower_components/jquery/dist/jquery.js',
		'../bower_components/angular/angular.js',
		'../bower_components/angular-ui-router/release/angular-ui-router.js',
		'../bower_components/bootstrap/dist/js/bootstrap.js',
		'../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
		'../bower_components/angular-translate/angular-translate.js',
		'../bower_components/angular-translate-handler-log/angular-translate-handler-log.js'
	], { cwd: './build/' })
		.pipe(concat('vendor.js'))
		.pipe(uglify())
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

    const target = gulp.src('./src/index.html');

    const js = gulp.src([
        '../build/vendor.js',
        '../build/app.js'
        ], {read: false, cwd: './build/'});

    const css = gulp.src([
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
