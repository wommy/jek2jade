var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

// rune this task by typing in  gulp jade  in CLI
gulp.task('jade', function() {
  return gulp.src('in/current/**/*.jade')
    .pipe(jade({
       pretty: true
    })) // pipe to jade plugin
    .pipe(gulp.dest('out')) // tells gulp our output folder
});

// create a task that ensures the `js` task is complete before reloading browsers
gulp.task('jade-watch', ['jade'], reload);

gulp.task('sass', function(){
  return gulp.src('./in/current/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('out/assets/css')) // tells gulp our output folder
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['jade', 'sass'], function() {
  browserSync({server: './out'});

  gulp.watch('./in/current/assets/scss/*.scss', ['sass']);
  gulp.watch("./in/current/**/*.jade", ['jade-watch']);
});