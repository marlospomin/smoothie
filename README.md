# Smoothie.js [![Build Status](https://travis-ci.org/marlospomin/smoothie.svg?branch=master)](https://travis-ci.org/marlospomin/smoothie)

> A vanilla smooth-scrolling javascript plugin with no dependencies.

## Features

* Blazing fast. (Using [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView))
* Lightweight.
* No dependencies.

## Demo

Example page on codepen (temporary), check the pen [here](https://codepen.io/marlospomin/pen/jadaQB).

## Install

``` bash
# Using npm
npm install smoothie-js

# Using yarn
yarn add smoothie-js
```

Now include smoothie and you should be good to go.

``` js
// es6
import smoothie from 'smoothie'

// commonjs
const smoothie = require('smoothie');
```

Alternatively you can include a minified version of smoothie (or the source code, up to you) via direct file or using our **CDN** link. If you are using a polyfill make sure to include it **before** smoothie.

``` html
<body>
  <script src="https://unpkg.com/smoothie-js"></script>
</body>
```

## Usage

Add ```data-smoothie``` to your anchor tags and the target's ```id``` in the *href* value as it follows below.

``` html
<a data-smoothie href="#example">...</a>

<!-- Somewhere below -->

<section id="example">
  ...
</section>
```

Call smoothie's function anywhere in your code:

``` js
// Call me
smoothie();
```

## Configuring

To configure the plugin pass the desired option(s) as an object like the example below:

``` js
// Pass options like this
smoothie({
  behavior: 'auto'
});
```

## Running Tasks

You can run tasks with ```yarn``` or ```npm``` shorthands using the following commands:

``` bash
# Build task
$ yarn build

# etc.
$ ...
```

## Browser Support

You can check the browsers supported [here](https://caniuse.com/#search=scrollIntoView).

If your browser is not in the list consider using this [polyfill](https://github.com/iamdustan/smoothscroll) from Dustan Kasten.

## Roadmap

### Todo List

* [ ] Make a better example page.
* [x] Add polyfill to non-supported browsers.
* [x] Add options to the plugin.
* [x] Refactor to remove bad code practices.

**Legend**: Checked boxes mean *__partial__* completion, checked and ~~crossed~~ items mean they're *__fully__* working.

## Contributing

If you feel like I missed something please do send me a message or, alternatively make a pull request/open an issue and we will go from there.

## License

Code released under the [MIT](LICENSE) license.
