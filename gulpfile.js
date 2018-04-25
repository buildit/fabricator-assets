const assembler = require('fabricator-assemble');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const reload = browserSync.reload;
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const merge = require('gulp-merge-json');
const jsonToSass = require('gulp-json-to-sass');
const svgSymbols = require('gulp-svg-symbols');
const svgmin = require('gulp-svgmin');
const path = require(`path`);

// configuration
const config = {
  dev: gutil.env.dev,
  styles: {
    browsers: 'last 1 version',
    fabricator: {
      src: 'src/assets/fabricator/styles/fabricator.scss',
      dest: 'dist/assets/fabricator/styles',
      watch: 'src/assets/fabricator/styles/**/*.scss'
    },
    toolkit: {
      src: 'src/assets/toolkit/styles/toolkit.scss',
      dest: 'dist/assets/toolkit/styles',
      watch: 'src/assets/toolkit/styles/**/*.scss'
    }
  },
  scripts: {
    fabricator: {
      src: './src/assets/fabricator/scripts/fabricator.js',
      dest: 'dist/assets/fabricator/scripts',
      watch: 'src/assets/fabricator/scripts/**/*'
    },
    toolkit: {
      src: './src/assets/toolkit/scripts/toolkit.js',
      dest: 'dist/assets/toolkit/scripts',
      watch: 'src/assets/toolkit/scripts/**/*'
    }
  },
  images: {
    toolkit: {
      src: ['src/assets/toolkit/images/**/*'],
      dest: 'dist/assets/toolkit/images',
      watch: 'src/assets/toolkit/images/**/*'
    }
  },
  icons: {
    toolkit: {
      src: ['src/assets/toolkit/icons/**/*.svg'],
      dest: 'dist/assets/toolkit/images',
      partial: 'src/materials/atoms/icons',
      watch: 'src/assets/toolkit/icons/**/*',
      templates: {
        symbolsLibrary: 'src/views/layouts/includes/f-icons-symbol-library.html',
        iconLibrary: 'src/views/layouts/includes/f-icons-library.html'
      }
    }
  },
  fonts: {
    toolkit: {
      src: ['src/assets/toolkit/fonts/**/*'],
      dest: 'dist/assets/toolkit/fonts',
      watch: 'src/assets/toolkit/fonts/**/*'
    }
  },
  images: {
    toolkit: {
      src: ['src/assets/toolkit/images/**/*'],
      dest: 'dist/assets/toolkit/images',
      watch: 'src/assets/toolkit/images/**/*'
    }
  },
  templates: {
    watch: 'src/**/*.{html,md,json,yml}'
  },
  dest: 'dist',
  variables: {
    jsonVariables: 'src/data/build/variables.json',
    sassVariables: 'src/assets/toolkit/styles/partials/build/_import-variables.scss',
    partials: 'src/assets/toolkit/styles/partials/build',
    dataBuild: 'src/data/build/',
  }
};

// clean
gulp.task('clean', del.bind(null, [config.dest]));

// scripts
const webpackConfig = require('./webpack.config')(config);

gulp.task('scripts', done => {
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

// Combine config JSON and Generate Sass Variables
gulp.task('json', () => {
  gulp
    .src('src/data/*.json')
    .pipe(
      merge({
        startObj: {},
        fileName: 'variables.json'
      })
    )
    .pipe(gulp.dest('src/data/build'));
});

gulp.task('jsonsass', () => {
  return gulp
    .src([config.variables.sassVariables])
    .pipe(
      jsonToSass({
        jsonPath: config.variables.jsonVariables,
        scssPath: config.variables.sassVariables,
        ignoreJsonErrors: true
      })
    )
    .pipe(gulpif( /[.]scss$/, gulp.dest(config.variables.partials)))
    .pipe(gulpif( /[.]json$/, gulp.dest(config.variables.dataBuild)));
});

// styles
gulp.task('styles:fabricator', () => {
  gulp
    .src(config.styles.fabricator.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(config.styles.browsers))
    .pipe(gulpif(!config.dev, csso()))
    .pipe(rename('f.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.fabricator.dest))
    .pipe(gulpif(config.dev, reload({ stream: true })));
});

gulp.task('styles:toolkit', () => {
  gulp
    .src(config.styles.toolkit.src)
    .pipe(gulpif(config.dev, sourcemaps.init()))
    .pipe(
      sass({
        includePaths: './node_modules'
      }).on('error', sass.logError)
    )
    .pipe(prefix(config.styles.browsers))
    .pipe(gulpif(!config.dev, csso()))
    .pipe(gulpif(config.dev, sourcemaps.write()))
    .pipe(gulp.dest(config.styles.toolkit.dest))
    .pipe(gulpif(config.dev, reload({ stream: true })));
});

gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);

// images
gulp.task('images', ['favicon'], () => {
  return gulp
    .src(config.images.toolkit.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.toolkit.dest));
});

// icons
gulp.task('icons', function () {
  return gulp.src(config.icons.toolkit.src)
  .pipe(svgmin())  
  .pipe(svgSymbols(
      {        
        slug: function (name) { return `icon-${name}`; },
        title: 'icon-%f',
        svgAttrs: {
          class: 'svg-icon-lib',
          'aria-hidden': 'true',
          style: 'position: absolute;',
          'data-enabled': true,  
        },
        templates: [
          'default-svg',
          path.join(__dirname, config.icons.toolkit.templates.symbolsLibrary),
          path.join(__dirname, config.icons.toolkit.templates.iconLibrary),
        ]
      }
    ))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('f-', '');
      return path;
    }))
    .pipe(gulpif( /[.]svg$/, gulp.dest(config.icons.toolkit.dest)))
    .pipe(gulpif( /[.]html$/, gulp.dest(config.icons.toolkit.partial)));
});

// fonts
gulp.task('fonts', () => {
  return gulp
    .src(config.fonts.toolkit.src)
    .pipe(gulp.dest(config.fonts.toolkit.dest));
 });

gulp.task('favicon', () => {
  return gulp.src('src/favicon.ico').pipe(gulp.dest(config.dest));
});

// assembler
gulp.task('assembler', done => {
  assembler({
    logErrors: config.dev,
    dest: config.dest
  });
  done();
});

// server
gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: config.dest
    },
    notify: false,
    logPrefix: 'FABRICATOR'
  });

  gulp.task('assembler:watch', ['assembler', 'json', 'jsonsass'], browserSync.reload);
  gulp.watch(config.templates.watch, ['assembler:watch']);

  gulp.task('styles:watch', ['styles']);
  gulp.watch(
    [config.styles.fabricator.watch, config.styles.toolkit.watch],
    ['styles:watch']
  );

  gulp.task('scripts:watch', ['scripts'], browserSync.reload);
  gulp.watch(
    [config.scripts.fabricator.watch, config.scripts.toolkit.watch],
    ['scripts:watch']
  );

  gulp.task('images:watch', ['images'], browserSync.reload);
  gulp.watch(config.images.toolkit.watch, ['images:watch']);

  gulp.task('icons:watch', ['icons'], browserSync.reload);
  gulp.watch(config.icons.toolkit.watch, ['icons:watch']);

  gulp.task('fonts:watch', ['fonts'], browserSync.reload);
  gulp.watch(config.fonts.toolkit.watch, ['fonts:watch']);
});

// default build task
gulp.task('default', ['clean'], () => {
  // define build tasks
  const tasks = [
    'jsonsass',
    'icons',
    'styles',
    'scripts',
    'images',
    'fonts',
    'assembler'
  ];

  // run build
  runSequence('json', 'jsonsass', 'icons', tasks, () => {
    if (config.dev) {
      gulp.start('serve');
    }
  });
});