/*
 * Dependencies
 *
 * npm install gulp-sass --save-dev
 * npm install gulp-autoprefixer --save-dev
 */

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build-sass', function() {
    return gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['> 5%', 'Explorer >= 10']
            }))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});
