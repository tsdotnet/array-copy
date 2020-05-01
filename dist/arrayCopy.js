"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const ArgumentOutOfRangeException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentOutOfRangeException"));
const array_init_1 = tslib_1.__importDefault(require("@tsdotnet/array-init"));
/* eslint-disable no-inner-declarations */
const CBN = 'Cannot be null.', CBL0 = 'Cannot be less than zero.';
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param length An optional limit to stop copying.
 * @returns The destination array.
 */
function arrayCopyTo(source, destination, sourceIndex = 0, destinationIndex = 0, length = Infinity) {
    if (!source)
        throw new ArgumentNullException_1.default('source', CBN);
    if (!destination)
        throw new ArgumentNullException_1.default('destination', CBN);
    if (sourceIndex < 0)
        throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, CBL0);
    const sourceLength = source.length;
    if (!sourceLength)
        return destination;
    if (sourceIndex >= sourceLength)
        throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, 'Must be less than the length of the source array.');
    if (destination.length < 0)
        throw new ArgumentOutOfRangeException_1.default('destinationIndex', destinationIndex, CBL0);
    const maxLength = source.length - sourceIndex;
    if (isFinite(length) && length > maxLength)
        throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, 'Source index + length cannot exceed the length of the source array.');
    length = Math.min(length, maxLength);
    const newLength = destinationIndex + length;
    if (newLength > destination.length)
        destination.length = newLength;
    for (let i = 0; i < length; i++) {
        destination[destinationIndex + i] = source[sourceIndex + i];
    }
    return destination;
}
exports.arrayCopyTo = arrayCopyTo;
/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param length
 * @returns {any}
 */
function arrayCopy(source, sourceIndex = 0, length = Infinity) {
    if (!source)
        return source; // may have passed zero? undefined? or null?
    return arrayCopyTo(source, array_init_1.default(Math.min(length, Math.max(source.length - sourceIndex, 0))), sourceIndex, 0, length);
}
// eslint-disable-next-line @typescript-eslint/no-namespace
(function (arrayCopy) {
    /**
     * Copies one array to another.
     * @param source
     * @param destination
     * @param sourceIndex
     * @param destinationIndex
     * @param length An optional limit to stop copying.
     * @returns The destination array.
     */
    function to(source, destination, sourceIndex = 0, destinationIndex = 0, length = Infinity) {
        return arrayCopyTo(source, destination, sourceIndex, destinationIndex, length);
    }
    arrayCopy.to = to;
})(arrayCopy || (arrayCopy = {}));
// @ts-ignore
exports.default = arrayCopy;
//# sourceMappingURL=arrayCopy.js.map