const browserSync = require("browser-sync");
const csso = require("gulp-csso");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const prefix = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const reload = browserSync.reload;
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const merge = require("gulp-merge-json");
const jsonToSass = require("gulp-json-sass");
const gulpStylelint = require("gulp-stylelint");

class GulpSyles {
  get taskName () {
    return 'styles';
  }

  constructor (config) {
    // Combine config JSON and Generate Sass Variables
    gulp.task("json", () => {
      return gulp
        .src("src/data/*.json")
        .pipe(
          merge({
            startObj: {},
            fileName: "variables.json"
          })
        )
        .pipe(gulp.dest(config.cache));
    });

    gulp.task("jsonsass", () => {
      return gulp
        .src(config.variables.jsonVariables)
        .pipe(jsonToSass())
        .pipe(
          rename(function (path) {
            path.basename = "_import-variables";
            return path;
          })
        )
        .pipe(gulp.dest(config.cache));
    });

    // styles
    gulp.task("styles:fabricator", () => {
      return gulp
        .src(config.styles.fabricator.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(prefix(config.styles.autoprefixBrowsers))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(rename("f.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.styles.fabricator.dest))
        .pipe(gulpif(config.dev, reload({stream: true})));
    });

    gulp.task("styles:toolkit", () => {
      return gulp
        .src(config.styles.toolkit.src)
        .pipe(gulpStylelint({
          reporters: [
            { formatter: 'string', console: true, fix: true }
          ]
        }))        
        .pipe(gulpif(config.dev, sourcemaps.init()))
        .pipe(
          sass({
            includePaths: "./node_modules"
          }).on("error", sass.logError)
        )
        .pipe(prefix(config.styles.autoprefixBrowsers))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(gulpif(config.dev, sourcemaps.write()))
        .pipe(gulp.dest(config.styles.toolkit.dest))
        .pipe(gulpif(config.dev, reload({stream: true})));
    });

    // Bundled styles into a singular task
    gulp.task(this.taskName, (callback) => {
      return runSequence('json', 'jsonsass', ["styles:fabricator", "styles:toolkit"], callback);
    });
  }
}

module.exports.GulpStyles = GulpSyles;
