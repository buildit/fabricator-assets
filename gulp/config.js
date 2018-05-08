const gutil = require("gulp-util");

const config = {
  dev: gutil.env.dev,
  styles: {
    browsers: "last 1 version",
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
      src: "./src/assets/toolkit/scripts/toolkit.js",
      srcScripts: "./src/assets/toolkit/scripts/**/*",
      dest: "dist/assets/toolkit/scripts",
      watch: "src/assets/toolkit/scripts/**/*"
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
  variables: {
    jsonVariables: "src/data/build/variables.json",
    sassVariables:
      "src/assets/toolkit/styles/partials/build/_import-variables.scss",
    partials: "src/assets/toolkit/styles/partials/build",
    dataBuild: "src/data/build/"
  }
};

exports.data = config;
