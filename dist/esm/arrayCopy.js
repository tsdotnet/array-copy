/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import arrayInit from '@tsdotnet/array-init';
import { ArgumentNullException, ArgumentOutOfRangeException } from '@tsdotnet/exceptions';
const CBN = 'Cannot be null.', CBL0 = 'Cannot be less than zero.';
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The destination array.
 */
export function arrayCopyTo(source, destination, sourceIndex = 0, destinationIndex = 0, count = Infinity) {
    if (!source)
        throw new ArgumentNullException('source', CBN);
    if (!destination)
        throw new ArgumentNullException('destination', CBN);
    if (sourceIndex < 0)
        throw new ArgumentOutOfRangeException('sourceIndex', sourceIndex, CBL0);
    if (destinationIndex < 0)
        throw new ArgumentOutOfRangeException('destinationIndex', destinationIndex, CBL0);
    const sourceLength = source.length;
    if (!sourceLength || count < 1)
        return destination;
    if (sourceIndex >= sourceLength)
        throw new ArgumentOutOfRangeException('sourceIndex', sourceIndex, 'Must be less than the length of the source array.');
    // deal with ArrayLike issues.
    if (destination.length < 0)
        throw new ArgumentOutOfRangeException('destination.length', destination.length, CBL0);
    const max = source.length - sourceIndex;
    if (isFinite(count) && count > max)
        throw new ArgumentOutOfRangeException('sourceIndex', sourceIndex, 'Source index + length cannot exceed the length of the source array.');
    count = Math.min(count, max);
    const newLength = destinationIndex + count;
    if (newLength > destination.length)
        destination.length = newLength;
    for (let i = 0; i < count; i++) {
        destination[destinationIndex + i] = source[sourceIndex + i];
    }
    return destination;
}
/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The copy of the source array.
 */
function arrayCopy(source, sourceIndex = 0, count = Infinity) {
    if (!source)
        return source; // may have passed zero? undefined? or null?
    return arrayCopyTo(source, arrayInit(Math.min(count, Math.max(source.length - sourceIndex, 0))), sourceIndex, 0, count);
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
export default arrayCopy;
//# sourceMappingURL=arrayCopy.js.map