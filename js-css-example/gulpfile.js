const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

let index = 0;

gulp.task('scripts', () => {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', () => {
  return gulp.src('css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.parallel('scripts', 'styles'));