var jspm = require('jspm');
var builder = jspm.Builder();

/* Ignore dependencies */
var ignoreDependencies = [
  'traceur',
  'traceur-runtime',
  'babel',
  'babel-runtime'
];

// Iterate all keys in config.js (map: {}) to get dependency names
// This will form a dependency string that looks like:
// 'aurelia-framework + aurelia-metadata + aurelia-metadata' and so on...
var packages = Object.keys(builder.loader.map).filter(function(pkg) {
    return ignoreDependencies.indexOf(pkg) === -1;
}).join(' + ');

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
