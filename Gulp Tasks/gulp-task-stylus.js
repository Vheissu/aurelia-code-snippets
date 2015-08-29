/*
 * Dependencies
 *
 * npm install gulp-stylus --save-dev
 * npm install gulp-autoprefixer --save-dev
 */

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build-stylus', function() {
    return gulp.src('src/stylus')
    .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(stylus({
              compress: true
            }))
            .pipe(autoprefixer({
                browsers: ['> 5%', 'Explorer >= 10']
            }))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});
