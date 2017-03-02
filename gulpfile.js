var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var data = require('gulp-data');
// var markdown = require('gulp-markdown');

// rune this task by typing in  gulp jade  in CLI
gulp.task('jade', function() {
  return gulp.src('in/**/*.jade')
    // .pipe(data(function(){
    //   return require('/config.json');
    // }))
    .pipe(jade({
      pretty: true,
      data: {
        "name": "Bob"
      }
    })) // pipe to jade plugin
    .pipe(gulp.dest('out'))// tells gulp our output folder
});

// gulp.task('md', function () {
//     return gulp.src('in/current/**/*.md')
//         .pipe(markdown())
//         .pipe(gulp.dest('out'));
// });

// create a task that ensures the `js` task is complete before reloading browsers
gulp.task('jade-watch', ['jade'], reload);
// gulp.task('md-watch', ['md'], reload);

gulp.task('sass', function(){
  return gulp.src('./in/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('out/assets/css')) // tells gulp our output folder
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['jade', 'sass'], function() {
  browserSync({
    server: './out',
    port:process.env.PORT,
    host:process.env.IP
  });
  // TODO cloud9 ? script

  gulp.watch('./in/assets/scss/*.scss', ['sass']);
  gulp.watch("./in/**/*.jade", ['jade-watch']);
  // gulp.watch("./in/current/**/*.md", ['md-watch']);
});