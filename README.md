# Smoothie [![Build Status](https://travis-ci.org/marlospomin/smoothie.svg?branch=master)](https://travis-ci.org/marlospomin/smoothie)

> A vanilla smooth-scrolling JavaScript plugin with no dependencies.

## Features

* Blazing fast. (Using [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView))
* Lightweight.
* No dependencies.

## Demo

Example page on [CodePen](https://codepen.io/marlospomin/pen/jadaQB).

## Install

```bash
# Using npm
npm install @marlospomin/smoothie

# Using yarn
yarn add @marlospomin/smoothie
```

Now include smoothie in your project and you should be good to go.

```js
// es6
import smoothie from '@marlospomin/smoothie'

// commonjs
const smoothie = require('@marlospomin/smoothie')
```

## Usage

Add ```data-smoothie``` to your anchor tags and the target's ```id``` in the *href* value as it follows below.

```html
<a data-smoothie href="#example">...</a>

<!-- Somewhere below -->

<section id="example">
  ...
</section>
```

Call smoothie anywhere in your code:

```js
// Call me
smoothie()
```

## Configuring

To configure the plugin just pass the desired option(s) as an object like the example below:

```js
// Pass options like this
smoothie({
  behavior: 'auto'
})
```

## Running Tasks

You can run tasks with the ```yarn``` command like the example below:

```bash
# Build task
yarn build

# Lint task
yarn lint
```

## Browser Support

You can check the browser support [here](https://caniuse.com/#search=scrollIntoView).

If your desired browser is not in the list consider using this [polyfill](https://github.com/iamdustan/smoothscroll).

## Contributing

Contributing is really easy, just make a pull request or open an issue and we will go from there.

## License

Code released under the [MIT](LICENSE) license.
