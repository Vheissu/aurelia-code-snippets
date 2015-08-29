/* Dependencies to install */
var packages = [
  "*",
  "aurelia-bootstrapper",
  "aurelia-dependency-injection",
  "aurelia-http-client",
  "aurelia-router"
].join(" + ");

gulp.task('bundle-js', function(done) {
  jspm.bundle(packages,
    'bundle/app-bundle.js',
    {inject: true, minify: true}
  ).then(function () {
    gulp.src('./bundle/app-bundle.js')
      .pipe(gulp.dest(paths.output + 'bundle/'));
    done();
  });
});
