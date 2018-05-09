const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");

class GulpScripts {
  get taskName () {
    return 'scripts';
  }

  constructor (webpackConfig) {
    gulp.task(this.taskName, done => {
      webpack(webpackConfig, (err, stats) => {
        if (err) {
          gutil.log(gutil.colors.red(err()));
        }

        const result = stats.toJson();
        if (result.errors.length) {
          result.errors.forEach(error => {
            gutil.log(gutil.colors.red(error));
          });
        }

        done();
      });
    });
  }
}

module.exports.GulpScripts = GulpScripts;
