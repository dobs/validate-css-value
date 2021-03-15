'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var browserOrNode = require('browser-or-node');

/**
 * Validates whether a given CSS value is valid for a corresponding CSS
 * property.
 *
 * Validation leverages a real DOM element, testing validity by attempting to
 * assign to a real property. This has some implications:
 *
 * - It only works when using a real browser.
 * - Results may vary from browser to browser.
 *
 * Examples:
 *
 * ```
 * // Using kebab-case.
 * validate('background-color', 'red'); // => true
 * validate('background-color', 'rud'); // => false
 *
 * // Using camelCase.
 * validate('borderWidth', '1px'); // => true
 * validate('borderWidth', 'red'); // => false
 * ```
 *
 * @param {string} property - The CSS property to validate the value against.
 * Can be either camelCase or kebab-case.
 * @param {string} value - The value for property to check the validity of.
 * @returns {boolean} Whether the value is valid for the property in question.
 */

var validate = function validate(property, value) {
  /* Note: `property` isn't of type `CSSStyleDeclaration` for  a few reasons:
   *
   * - To allow for properties not covered by `CSSStyleDeclaration`, such as
   *   vendor-specific ones.
   * - To allow for use of either camelCase or kebab-case values.
   */
  if (!browserOrNode.isBrowser) {
    console.warn('`validate-css-value` only works properly when using a real browser.');
    return false;
  }

  var o = new Option();
  var prop = toCamelCase(property);
  o.style[prop] = value;
  return o.style[prop] !== '';
};

var toCamelCase = function toCamelCase(value) {
  return value.replace(/-./g, function (x) {
    return x[1].toUpperCase();
  });
};

exports.validate = validate;
//# sourceMappingURL=validate-css-value.cjs.development.js.map
