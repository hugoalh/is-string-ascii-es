//deno-lint-ignore no-control-regex -- Intentional.
const regexpASCIIControl = /^[\x00-\x1F\x7F]*$/;
/**
 * Determine whether the string is ASCII control characters.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringASCIIControl(item: string): boolean {
	return regexpASCIIControl.test(item);
}
export default isStringASCIIControl;
