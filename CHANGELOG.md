# Release notes

## v0.4.0
- Update dependencies
- Include standard and simplified ESLint config file
- update JSCS rules configuration
- Update demo files to comply linters requirements

## v0.3.1
- Update fabric's documentation

#### Bug Fixes
- Add `babel-plugin-add-module-exports` for `export default` Babel support (thanks to [Fernando Montoya](https://github.com/montogeek) for suggestion the plugin)
- Fix Webpack configuration bug related with the `export default` lack of support from Babel

## v0.3.0
Now fabric offer support for the new and shiny Babel 6
- Update Webpack configuration file JavaScript code to ECMAScript 2015 syntax
- Update Babel configuration options to comply new Babel 6 configuration style including .babelrc configuration file
- Update to ESLint v1.9.0and add new rules
- Change ESLint parser for babel-eslint
- Update main fabric's dependencies
  - Babel 6
  - ESLint v1.9.0
  - JSCS v2.5.1
  - BrowserSync v2.10.0
  - Webpack v1.12.6

#### Known Issues (November 15, 2015)
- Webpack doesn't support yet the new Babel way to translate the `export default` expression so `module.exports` must be use instead

## v0.2.0
- Update ESLint JavaScript linting tool to version 1.0.0 with lots of new ECMAScript 2015 linting features (check the [release notes](http://eslint.org/blog/2015/07/eslint-1.0.0-released/))
- Update ```README``` file with punctuation, grammar, formatting, and style improvements
- Add ```CHANGELOG``` file to track **fabric**'s changes across versions

## v0.2.1
This release includes critical bug fixes that makes the Webpack implementation malfunction
- Update Browsersync Webpack Plugin to version 0.2.0
- Update JSCS to version 2.0.0
- Update JSCS Webpack loader to version 0.2.0
- Update Karma test runner to version 0.13.5

## v0.3.0
Camilo did an amazing job creating a reporter filter for Karma test results, removing all the browser name and version crud and adding [faucet TAP Reporter](https://github.com/substack/faucet) to beautify the output.
- Add reporter filter script to beautify the Tape reports
- Modify the package.json file to always install the latest version of the available packages
- Update README package installation section

#### Known Issues (August 8, 2015)
- The webpack loader for ESLint does not support yet ESLint ^1.0.0
- The package node-sass does not support yet iojs-v3.0.0

## v0.4.0
Fabric now supports **Node.js 4.1.0**, the latest Node.js version after taking all the code base from the **iojs** project.
- Update all the **NPM** dependencies to work with Node.js v4.1.0
- Update and simplify the **JSCS** rules adding the **Google** preset to it
- Update the Webpack configuration file to include the **ESlint** and **JSCS** linting capabilities as pre-loaders

## v0.4.1
- Update Webpack configuration file to use ECMAScript 2015 syntax
- Update Karma configuration file to use ECMAScript 2015 syntax
- Change JavaScript main input file to index.js and the output file to app.js
- Update some Node.js dependencies
