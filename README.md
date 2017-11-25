# Smoothie.js

> A vanilla smooth-scrolling javascript plugin with no dependencies.

## Features

* Blazing fast. (Using [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView))
* Lightweight.
* No dependencies.

## Install

``` bash
# Using npm
npm install smoothie-js

# Using yarn
yarn add smoothie-js
```

Now include turtle and you should be good to go.

``` js
// es6
import smoothie from 'smoothie'

// commonjs
const smoothie = require('smoothie');
```

Alternatively you can include a minified version of smoothie (or the source code, up to you) via direct file or using our **CDN** link.

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

If your browser is not in the list consider using a polyfill.

## Roadmap

### Todo List

* [ ] Make a better example page.
* [ ] Make tests before refactoring.
* [ ] Refactor to use methods and functions.
* [ ] Add polyfill to non-supported browsers.
* [ ] Add options to the plugin.
* [ ] Refactor to remove bad code practices.

**Legend**: Checked boxes mean *__partial__* completion, checked and ~~crossed~~ items mean they're *__fully__* working.

## Contributing

If you feel like smoothie is missed something please do send a message or, alternatively make a pull request or even open an issue using an appropriate label and we will go from there.

## License

Code released under the [MIT](LICENSE) license.
