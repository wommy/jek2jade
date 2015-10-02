var gulp = require('gulp');
var jade = require('gulp-jade');

// rune this task by typing in  gulp jade  in CLI
gulp.task('jade', function() {
  return gulp.src('in/current/**/**/*.jade')
    .pipe(jade({
       pretty: true
    })) // pipe to jade plugin
    .pipe(gulp.dest('out')); // tells gulp our output folder
});