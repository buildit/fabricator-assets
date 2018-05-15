const gulp = require("gulp");
const config = require('./config').data;
const runSequence = require("run-sequence");
const gulpStylelint = require("gulp-stylelint");

class GulpStylelint {
  get taskName () {
    return 'stylelint';
  }

  constructor () {
    gulp.task(this.taskName, () => {
      return gulp
        .src(config.styles.toolkit.watch)
        .pipe(gulpStylelint({
          reporters: [
            {
              formatter: "string",
              console: true,
              fix: true,
            }
          ],
          debug: true
        }))
        .pipe(gulp.dest("src/assets/toolkit/styles"));
    });

    gulp.task('lint', (callback) => {
      return runSequence('json', 'jsonsass', 'stylelint', callback);
    });
  }
}

module.exports.GulpStylelint = GulpStylelint;
