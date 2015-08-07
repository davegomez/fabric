# fabric | ES6 Development Facility

**fabric** is a set of tools especially integrated for **ES6** (ECMAScript 2015) module and library development using the most recent additions and features implemented on latest version of the [ECMAScript specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm) with build-in module compilation, CSS preprocessing, unit testing framework, and code coverage with a minimum configuration time and little work by the developer.

## Features
#### Webpack
**fabric** introduces the sexiest module bundler in the JavaScript world at this moment. [Webpack](http://webpack.github.io/) provides code splitting using sync and async dependencies for different module styles, like **CommonJS** and **AMD**, and a powerful loader and plugin system that allows you to build complicated project architectures.

#### Babel
[Babel](https://babeljs.io/) allows **fabric** users to build modern and beautifully written JavaScript 6 applications using the latest rules introduced in the ECMAScript specification for the _ECMAScript 2015_ and _ECMAScript 2016_ versions of the language. Thanks to Babel, you can use the hottest new features in JavaScript, like arrow functions, destructuring, class syntax, etc, with confidence.

#### SASS
Not everything in this world is JavaScript code. From time to time you need a nice and beautiful HTML background to test your work. But what's HTML without CSS? That's why **fabric** uses [SASS](http://sass-lang.com/) as a CSS preprocessor, so you don't have to worry too much about working with all those messy style sheets.

#### Browsersync
Sometimes you just want to hit save and see the magic happen. That's why **fabric** includes [Browsersync](http://www.browsersync.io/) as a build-in browser reloading tool, so you never again have to worry about hitting your browser's refresh button.

#### Istanbul
As part of **fabric**'s strong commitment to TDD, **fabric** includes the powerful code coverage tool [Istanbul](https://github.com/gotwarlost/istanbul) tool, which lets you perform a complete code coverage of your project and inspect this coverage through detailed reports.

## File Structure

    fabric
    ├── bin
    │   ├── css
    │   └── js
    └── src
        ├── js
        ├── scss
        └── test

You can start coding your JavaScript and SASS inside the ```src``` directory. Then **fabric** will automatically compile and minify all your ```js``` and ```scss``` files into a ```main.js``` and ```main.scss``` inside the ```bin``` directory with its corresponding source map files. All of **fabric**'s output files can be safely used in your projects, even if only older versions of JavaScript are supported.

## Usage
To start using **fabric** for your next JavaScript 6 project, you need to clone this repository in your local environment or fork it to your account.

    git clone https://github.com/davegomez/fabric.git your-project-name

**fabric** uses [Nodejs](https://nodejs.org/)/[iojs](https://iojs.org/en/index.html) as JavaScript runtime, so you need to install dependencies in your system before you start using **fabric**.

    npm install -g webpack babel-core

It's also recommended that you globally install the linter tools so you can use them with your favorite editor.

    npm install -g eslint jscs

When everything is in place in your global environment, you have to install **fabric**'s dependencies in order to use all of its amazing features.

Run this command inside your project's root directory to install **fabric**'s dependencies:

    npm install --save-dev

You can happily start coding after running this command:

    npm run serve

Have fun!

## Testing
**fabric** uses [Tape](https://github.com/substack/tape) ([blue-tape](https://github.com/spion/blue-tape) for promise support) as a unit testing library and Karma as a test runner, so you can also test your UI using Tape and PhantomJS. Tape is a simple unit testing library that lets you focus on your code instead of setting up the testing environment and choosing between tons of assertion options. On the other hand, fabric includes [Karma](http://karma-runner.github.io/0.13/index.html) and [PhantomJS](http://phantomjs.org/) so you can easily test your UI using Tape, as **Rebecca Murphey** points out in her post, [Browser Testing and Code Coverage With Karma, Tape, and Webpack](http://rmurphey.com/blog/2015/07/20/karma-webpack-tape-code-coverage/).

To start writing your tests, you need to create a ```*.spec.js``` file inside the ```test``` directory with the same name of the JavaScript file/module you want to test.

## Linting
By default **fabric** comes with several linting options for **JavaScript** and **SASS** (scss) using [ESLint](http://eslint.org/) and [JSCS](http://jscs.info/) in the form of Webpack loaders. **fabric** also provides sample and very strict configuration files for these linters inside the root directory that you can freely update to suit your needs.

## TODO
- YEOMAN Generator
- LESS and Stylus Support
- Traceur Support
- More linting options

## Authoring
- [David Gómez](https://github.com/davegomez)
- [Camilo Orrego](https://github.com/baldore)

## License
    The MIT License (MIT)

    Copyright (c) 2015 David Gómez and Camilo Orrego

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
