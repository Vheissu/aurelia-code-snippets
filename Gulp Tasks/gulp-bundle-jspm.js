var jspm = require('jspm/api');

// TODO: Parse config.js file for JSPM dependencies and then
// iterate over them to bundle the application.

gulp.task('bundle-js', function(done) {
  jspm.bundle(
    [
      '*',
      'aurelia-bootstrapper',
      'aurelia-dependency-injection',
      'aurelia-framework',
      'aurelia-loader-default',
      'aurelia-router',
      'npm:core-js',

      'aurelia-metadata',
      'aurelia-task-queue',
      'aurelia-event-aggregator',
      'aurelia-templating',
      'aurelia-templating-binding',
      'aurelia-templating-router',
      'aurelia-templating-resources',
      'aurelia-history',
      'aurelia-history-browser',
    ].join(' + '),
    'bundle/app-bundle.js',
    {inject: true, minify: true}
  ).then(function () {
    gulp.src('./bundle/app-bundle.js')
      .pipe(gulp.dest(paths.output + 'bundle/'));
    done();
  });
});
