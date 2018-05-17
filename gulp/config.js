const gutil = require("gulp-util");
const glob = require("glob");

const jsFiles = glob.sync('src/assets/toolkit/scripts/**/*.js')
  .map((path) => `./${path}`);

const config = {
  dev: gutil.env.dev,
  styles: {
    autoprefixBrowsers: [
      'ie >= 11',
      'Firefox ESR',
      'Edge >= 14',
      'last 2 Chrome versions',
      'Safari >= 9',
      'iOS >= 9',
      'Android >= 5',
      'ChromeAndroid >= 5'
    ],
    fabricator: {
      src: "src/assets/fabricator/styles/fabricator.scss",
      dest: "dist/assets/fabricator/styles",
      watch: "src/assets/fabricator/styles/**/*.scss"
    },
    toolkit: {
      src: "src/assets/toolkit/styles/toolkit.scss",
      dest: "dist/assets/toolkit/styles",
      watch: "src/assets/toolkit/styles/**/*.scss"
    }
  },
  scripts: {
    fabricator: {
      src: "./src/assets/fabricator/scripts/fabricator.js",
      dest: "dist/assets/fabricator/scripts",
      watch: "src/assets/fabricator/scripts/**/*"
    },
    toolkit: {
      src: jsFiles,
      dest: "dist/assets/toolkit/scripts/toolkit.js",
      watch: "src/assets/toolkit/scripts/**/*.js"
    }
  },
  icons: {
    toolkit: {
      src: ["src/assets/toolkit/icons/**/*.svg"],
      dest: "dist/assets/toolkit/images",
      partial: "src/materials/atoms/icons",
      watch: "src/assets/toolkit/icons/**/*",
      templates: {
        symbolsLibrary:
          "src/views/layouts/includes/f-icons-symbol-library.html",
        iconLibrary: "src/views/layouts/includes/f-icons-library.html"
      }
    }
  },
  fonts: {
    toolkit: {
      src: ["src/assets/toolkit/fonts/**/*"],
      dest: "dist/assets/toolkit/fonts",
      watch: "src/assets/toolkit/fonts/**/*"
    }
  },
  images: {
    toolkit: {
      src: ["src/assets/toolkit/images/**/*"],
      dest: "dist/assets/toolkit/images",
      watch: "src/assets/toolkit/images/**/*"
    }
  },
  templates: {
    watch: "src/**/*.{html,md,json,yml}"
  },
  dest: "dist",
  cache: 'cache',
  variables: {
    jsonVariables: "cache/variables.json",
  }
};

exports.data = config;
