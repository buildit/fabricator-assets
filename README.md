# Buildit Custom Fabricator for Making Great Living Style Guides

[![Build Status](https://travis-ci.org/buildit/fabricator-assets.svg?branch=master)](https://travis-ci.org/buildit/fabricator-assets)

## Quick Start

Requirements:

1. [Node.js](https://nodejs.org/en/), [NVM](https://github.com/creationix/nvm), or [n](https://github.com/tj/n)
1. [Yarn](https://yarnpkg.com/lang/en/docs/install)

To run the app:

```bash
nvm use
# Or manually change to the node version in `.nvmrc` if not using NVM

yarn install
yarn start
# Should automatically open your browser to http://localhost:3000 when ready
```

### Creating a build

Builds will be dumped in the `dist` folder

```bash
yarn build
```

## Documentation

### Styles and Sass

To customize styles, update JSON in ```src/data```. These will build Sass variables in ```cache_imported-variables``` (through a temp ```cache/variables.json```). Treat ```_imported-variables``` and ```variables.json``` as read-only because can changes will be overwritten. They are not committed to the repo. Do all JSON -> variable work in the JSON files directly in data.

There are two folders within ```src/assets``` (```/fabricator``` and ```/toolkit```) containing ```*.scss``` files and partials. ```/fabricator``` is for the style guide UI (name-spaced with f-), whereas ```/toolikit``` is for custom styles unique to the individual guide. Most work will be completed within ```/toolikit```. For new atoms, create a new ```_*.scss``` file in ```/partials``` and import it into ```toolkit.scss```.

### Data Files

In the JSON file ```colors.json```, you can add additional colors to appear in the color palette specimen and Sass variables. However, adding heading styles or breakpoints (as opposed to changing sizes) will require some work within tookit partials and specimens. The default project is preloaded with Bootstrap defaults.

The direcotry  ```src/data/mockdata``` is for mock data and is not included in the JSON to Sass variable build process. Mock data in this directory is useful for data driven design. For istance, you can iterate over mock data to build out a product list or use the same molecule/organism in different contexts (e.g., breadcrumbs or product lists).

### Atomic Design

Within ```src/materials``` you will find folders for atoms, molecules, and organisms. Adding a new elemnent is as easy adding an *.html file to the respective folder. Molecules and organisms can import lower level elements using handlebars import sytax:

```handlebars
<!-- import button.html template -->
{{> button}}
```

### SVG Icons
Add individual icons to a file.svg in ```src/assets/toolkit/icons```. Icons will get built into symbol library and icon library. The file name will become the id for referencing the icon.

### [For more information on Fabricator, read the official docs →](http://fbrctr.github.io/docs)

## Demo

### [Default Fabricator Instance →](http://fbrctr.github.io/demo)

## Credits

Created by [Luke Askew](http://twitter.com/lukeaskew).

Logo by [Abby Putinski](https://abbyputinski.com/)

## License

[The MIT License (MIT)](http://opensource.org/licenses/mit-license.php)
