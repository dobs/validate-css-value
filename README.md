# validate-css-value

Validate whether a CSS value is valid for a given property using real browser checks.

Given that it depends on browser-side checks it can be assumed to not work as expected outside of a browser (e.g. Node).

## Testing

`cypress` is used for testing. `yarn test` will likely work in a development environment, but may require some additional configuration in CI.

## Credit

Inspired by [this StackOverflow question and its answers](https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color).
