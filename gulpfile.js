var uglify = require('gulp-uglify');
 
gulp.task('compress', function() {
  return gulp.src('scss/*.scss')
    .pipe(uglify())
    .pipe(gulp.dest('css'));
});