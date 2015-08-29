var jspm = require('jspm/api');

gulp.task('bundle-js', function(done) {
  jspm.bundle(
    [
      '*',
      'aurelia-bootstrapper',
      'aurelia-dependency-injection',
      'aurelia-router',
      'aurelia-templating',
      'aurelia-templating-binding'
    ].join(' + '),
    'bundle/app-bundle.js',
    {inject: true, minify: true}
  ).then(function () {
    gulp.src('./bundle/app-bundle.js')
      .pipe(gulp.dest(paths.output + 'bundle/'));
    done();
  });
});
