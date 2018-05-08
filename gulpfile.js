const assembler = require("fabricator-assemble");
const browserSync = require("browser-sync");
const del = require("del");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const runSequence = require("run-sequence");
const svgSymbols = require("gulp-svg-symbols");
const svgmin = require("gulp-svgmin");
const path = require(`path`);

// Load and inject configurations
const config = require('./gulp/config').data;
const webpackConfig = require("./webpack.config")(config);

// Load classes for initialization
const GulpStyles = require('./gulp/styles').GulpStyles;
const GulpScripts = require('./gulp/scripts').GulpScripts;

// Initialize objects with dependencies
const styles = new GulpStyles(config);
const scripts = new GulpScripts(webpackConfig);

// clean
gulp.task("clean", del.bind(null, [config.dest]));

// images
gulp.task("images", ["favicon"], () => {
  let task = gulp.src(config.images.toolkit.src);

  if (!config.dev) {
    task = task.pipe(imagemin());
  }

  task = task.pipe(gulp.dest(config.images.toolkit.dest));

  return task;
});

// icons
gulp.task("icons", function() {
  return gulp
    .src(config.icons.toolkit.src)
    .pipe(svgmin())
    .pipe(
      svgSymbols({
        slug: function(name) {
          return `icon-${name}`;
        },
        title: "icon-%f",
        svgAttrs: {
          class: "svg-icon-lib",
          "aria-hidden": "true",
          style: "position: absolute;",
          "data-enabled": true
        },
        templates: [
          "default-svg",
          path.join(__dirname, config.icons.toolkit.templates.symbolsLibrary),
          path.join(__dirname, config.icons.toolkit.templates.iconLibrary)
        ]
      })
    )
    .pipe(
      rename(function(path) {
        path.basename = path.basename.replace("f-", "");
        return path;
      })
    )
    .pipe(gulpif(/[.]svg$/, gulp.dest(config.icons.toolkit.dest)))
    .pipe(gulpif(/[.]html$/, gulp.dest(config.icons.toolkit.partial)));
});

// fonts
gulp.task("fonts", () => {
  return gulp
    .src(config.fonts.toolkit.src)
    .pipe(gulp.dest(config.fonts.toolkit.dest));
});

gulp.task("favicon", () => {
  return gulp.src("src/favicon.ico").pipe(gulp.dest(config.dest));
});

// assembler
gulp.task("assembler", done => {
  assembler({
    logErrors: config.dev,
    dest: config.dest
  });
  done();
});

// server
gulp.task("serve", () => {
  browserSync({
    server: {
      baseDir: config.dest
    },
    notify: false,
    logPrefix: "FABRICATOR"
  });

  gulp.task(
    "assembler:watch",
    ["assembler"],
    browserSync.reload
  );
  gulp.watch(config.templates.watch, ["assembler:watch"]);

  gulp.task("styles:watch", [styles.taskName]);
  gulp.watch(
    [config.styles.fabricator.watch, config.styles.toolkit.watch],
    ["styles:watch"]
  );

  gulp.task("scripts:watch", [scripts.taskName], browserSync.reload);
  gulp.watch(
    [config.scripts.fabricator.watch, config.scripts.toolkit.watch],
    ["scripts:watch"]
  );

  gulp.task("images:watch", ["images"], browserSync.reload);
  gulp.watch(config.images.toolkit.watch, ["images:watch"]);

  gulp.task("icons:watch", ["icons"], browserSync.reload);
  gulp.watch(config.icons.toolkit.watch, ["icons:watch"]);

  gulp.task("fonts:watch", ["fonts"], browserSync.reload);
  gulp.watch(config.fonts.toolkit.watch, ["fonts:watch"]);
});

// default build task
gulp.task("default", ["clean"], () => {
  // define build tasks
  const tasks = [
    "icons",
    scripts.taskName,
    "images",
    "fonts",
    styles.taskName,
    "assembler"
  ];

  // run build
  runSequence(...tasks, () => {
    if (config.dev) {
      gulp.start("serve");
    }
  });
});
