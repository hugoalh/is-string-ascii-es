//deno-lint-ignore no-control-regex
const regexpASCII = /^[\x00-\x7F]*$/;
/**
 * Determine whether the string is ASCII.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example
 * ```ts
 * isStringASCII("日本語");
 * //=> false
 * ```
 * @example
 * ```ts
 * isStringASCII("👀");
 * //=> false
 * ```
 * @example
 * ```ts
 * isStringASCII("Hello, world!");
 * //=> true
 * ```
 * @example
 * ```ts
 * isStringASCII("");
 * //=> true
 * ```
 */
export function isStringASCII(item: string): boolean {
	return regexpASCII.test(item);
}
export default isStringASCII;
