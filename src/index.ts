import { isBrowser } from 'browser-or-node';

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
export const validate = (property: string, value: string): boolean => {
  /* Note: `property` isn't of type `CSSStyleDeclaration` for  a few reasons:
   *
   * - To allow for properties not covered by `CSSStyleDeclaration`, such as
   *   vendor-specific ones.
   * - To allow for use of either camelCase or kebab-case values.
   */

  if (!isBrowser) {
    console.warn('`validate-css-value` only works properly when using a real browser.')
    return false;
  }

  const o = new Option();
  const prop = toCamelCase(property);
  o.style[prop] = value;
  return o.style[prop] !== '';
};

const toCamelCase = (value: string): string =>
  value.replace(/-./g, x => x[1].toUpperCase());
