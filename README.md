# Exerstats Yeoman Generator

[![Version][version-image]][github-release]
[![License][license-image]][github-license]

A set of [Yeoman][yeoman] generators that build common skeletons for Exerstats projects. The following generators
and sub-generators are available:

| Generator         | Description                                                                          |
|:-----------------:|:-------------------------------------------------------------------------------------|

## Installation

### Dependencies

This project is a [Yeoman Generator][yeoman] built in [Node.js][node]. All dependencies are managed via [NPM][npm].
As such, at minimum, the following must be installed:

* [Node.js][node] v10.12+ (will also install [NPM][npm])
* [Yeoman][yeoman] v3.2.0+ should be installed globally

All other dependencies will be installed via NPM during generator installation.

### Quick Start

*This assumes that both Node.js and Yeoman have been installed globally on your platform.*

As the Exerstats generator is not published on the Yeoman repository, the repository must be cloned from GitHub via
NPM.  The `master` branch always contains the latest, stable release, while the `develop` branch contains all
features staged for the next upcoming release.  The following will install the `master`, stable branch globally with
Yeoman:

```bash
npm i -g git+https://git@github.com/exerstats/generator-exerstats.git#master
```

This will install the latest, stable release of the generator globally for your use.  This can be confirmed by
using the `yo --generators` command, where various `exerstats` generators should be listed.

### Developer Installation

> In order to develop on this application, please first consult the [Contributing Guidelines][github-contribute].

If you intend to contribute, first [fork the repository][github-fork] into your personal GitHub account. You can
change all of the following instructions to your personal repository.

First, checkout the repository:

```bash
git checkout https://git@github.com/exerstats/generator-exerstats.git
```

By default, you should checkout the `develop` branch, which contains the most up-to-date staged, but not yet released,
features for the next update.

In order for Yeoman to recognize your new repository as a generator source, you need to link the project with NPM.
Make certain that you do not have the Exerstats Generators installed anywhere else on your system before linking:

```bash
cd generator-exerstats
npm link
```

At this point, you should be able to type `yo --generators` and see your local generators in the list. Any changes you
make to the project repository will be instantly updated when the generator is called.

## Usage

This package is built in standard Yeoman Generator fashion. That means, once installed, you should see a list of all
Exerstats generators by using the following command:

```bash
yo --generators
```

Each generator, including the `exerstats` main generator, has a help function describing all options available for
that generator. This can be accessed by using the following examples:

```bash
yo exerstats -h
yo exerstats:license -h
```

### Running the Generator

Once installed, either globally (recommended) or via a local repository (if developing), simply create a new
directory to contain your project and call the appropriate generator.  Generators can be listed by using the
`yo --generators` command in a terminal.  The root generator, `exerstats`, will run an interactive wizard to configure
the project, and is the recommended generator to use.

To start the main generator, simply use the following and answer any prompts that appear:

```bash
$ yo exerstats
```

More details can be found by using the `-h` flag after any generator call.

## Contributing

There are many ways to contribute to this project!  If you have an idea, or have discovered a bug, please
[open an issue][github-issue] so it can be addressed.

If you are interested in contributing to the project through design or development, please read our
[Contribution Guidelines][github-contribute].

### Testing

An extensive test suite is provided with this project. In order to run the full suite, which includes best-practice
linting, code style linting, unit tests, and a simple code-coverage report, simply run the following command:

```bash
npm test
```

There are additional scripts available that allow for different functionality. To simply lint the code with
[JSHint][jshint] and [ESLint][eslint], run the following:

```bash
npm run test:lint
```

In the same spirit, if you wish to run unit tests without linting, you can run the following:

```bash
npm run test:unit
```

Finally, any Gulp task can be run by putting Gulp parameters after a double-dash (`--`) on the `gulp` NPM script.
For example, to list all tasks:

```bash
npm run gulp -- --tasks
```

Or to run Gulp's lint task directly:

```bash
npm run gulp -- lint
```

Finally, a markdown-friendly changelog between the prior and next tags can be automatically generated by using the
`changelog` script:

```bash
npm run changelog
```

## Release Policy

Releases of this project follow [Semantic Versioning][semver] standards in a `MAJOR.MINOR.PATCH` versioning scheme of
the following format:

* `MAJOR` - modified when major, incompatible changes are made to the application,
* `MINOR` - modified when functionality is added in a backwards-compatible manner, and
* `PATCH` - patches to existing functionality, such as documentation and bug fixes.

## License

This project is licensed for use under the MIT License, as stated in the [Project License](LICENSE):

```
MIT License

Copyright (c) 2019 Andrew Vaughan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

All contributions, regardless of contributor, become part of this license unless otherwise, explicitly stated.



[version-image]:     http://img.shields.io/badge/release-0.1.0-blue.svg?style=flat
[license-image]:     http://img.shields.io/badge/license-MIT-blue.svg?style=flat

[github-contribute]: https://github.com/exerstats/generator-exerstats/blob/master/CONTRIBUTING.md
[github-issue]:      https://github.com/exerstats/generator-exerstats/issues
[github-license]:    https://github.com/exerstats/generator-exerstats/blob/master/LICENSE
[github-release]:    https://github.com/exerstats/generator-exerstats/releases
[github-fork]:       https://github.com/exerstats/generator-exerstats/fork

[semver]:            http://semver.org/

[jshint]:            https://jshint.com/
[eslint]:            https://eslint.org/
[yeoman]:            https://yeoman.io/
[node]:              https://nodejs.org/
[npm]:               https://www.npmjs.com/
