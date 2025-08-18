import arrayInit from '@tsdotnet/array-init';
import { ArgumentNullException, ArgumentOutOfRangeException } from '@tsdotnet/exceptions';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
const CBN = 'Cannot be null.', CBL0 = 'Cannot be less than zero.';
function arrayCopyTo(source, destination, sourceIndex = 0, destinationIndex = 0, count = Infinity) {
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
function arrayCopy(source, sourceIndex = 0, count = Infinity) {
    if (!source)
        return source;
    return arrayCopyTo(source, arrayInit(Math.min(count, Math.max(source.length - sourceIndex, 0))), sourceIndex, 0, count);
}
(function (arrayCopy) {
    function to(source, destination, sourceIndex = 0, destinationIndex = 0, length = Infinity) {
        return arrayCopyTo(source, destination, sourceIndex, destinationIndex, length);
    }
    arrayCopy.to = to;
})(arrayCopy || (arrayCopy = {}));
var arrayCopy$1 = arrayCopy;

export { arrayCopyTo, arrayCopy$1 as default };
//# sourceMappingURL=arrayCopy.js.map
