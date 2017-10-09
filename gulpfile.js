/* Variáveis Globais */
var gulp = require('gulp');
var sass = require('gulp-sass');

/* Variáveis Sass */
var scssFiles = './source/scss/*.scss';
var cssDest = './dist/css/';
var sassDevOptions = {
  outputStyle: 'expanded'
}
var sassProdOptions = {
  outputStyle: 'compressed'
}

/* Funções */
gulp.task('sass-develop', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sass-production', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));

});

gulp.task('move-html', function() {
	return gulp.src('./source/index.html')
	.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sass-develop', 'sass-production']);
  gulp.watch('./source/index.html', ['move-html']);
});

gulp.task('default', ['sass-develop', 'sass-production', 'watch']);
