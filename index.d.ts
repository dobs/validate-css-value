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
export declare const validate: (property: string, value: string) => boolean;
