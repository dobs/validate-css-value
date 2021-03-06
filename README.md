# validate-css-value

[![NPM](https://img.shields.io/npm/v/validate-css-value.svg)](https://www.npmjs.com/package/validate-css-value) [![CI](https://github.com/dobs/validate-css-value-dev/actions/workflows/main.yml/badge.svg)](https://github.com/dobs/validate-css-value-dev/actions/workflows/main.yml)

Validate whether a CSS value is valid for a given property using real browser checks.

Given that it depends on browser-side checks it can be assumed to not work as expected outside of a browser (e.g. Node).

## Installation

With `npm`:

```
npm install validate-css-value
```

With `yarn`:

```
yarn add validate-css-value
```

## Compatibility

I haven't tested comprehensively, but the following pass the project's test suite:

- Chrome 89
- Edge 89
- Firefox 86
- Electron 87

## Examples

```javascript
import { validate } from 'validate-css-value';

// With kebab-case.
validate('background-color', 'red'); // => true
validate('background-color', 'rud'); // => false

// With camelCase.
validate('backgroundColor', 'red'); // => true
validate('backgroundColor', 'rud'); // => false

// Supports more than just colors, including shorthand values.
validate('border', '1px solid red'); // => true
validate('border', '-1px occasional rud'); // => false
```

## Testing

`cypress` is used for testing. `yarn test` will likely work in a development environment, but may require some additional configuration in CI.

## Usage Without Bundling

I recommend using your own bundler, such as `webpack` or `browserify`.

That said, running `yarn build-browser` will create a browser-ready JS file, `dist/validate-css-value.js` that doesn't require any additional bundling.

Example usage might then look like:

```html
<script src="validate-css-value.js"></script>
<script>
  console.log('Is red a valid color?: ' + validateCSSValue.validate('color', 'red'));
  console.log('Is rud a valid color?: ' + validateCSSValue.validate('color', 'rud'));
</script>
```

## Credit

Inspired by [this StackOverflow question and its answers](https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color).

