(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsdotnet/array-init'), require('@tsdotnet/exceptions')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsdotnet/array-init', '@tsdotnet/exceptions'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.arrayCopy = global.tsdotnet.arrayCopy || {}), global.tsdotnet.arrayInit, global.tsdotnet.exceptions));
})(this, (function (exports, arrayInit, exceptions) { 'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var arrayInit__default = /*#__PURE__*/_interopDefault(arrayInit);

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    const CBN = 'Cannot be null.', CBL0 = 'Cannot be less than zero.';
    function arrayCopyTo(source, destination, sourceIndex = 0, destinationIndex = 0, count = Infinity) {
        if (!source)
            throw new exceptions.ArgumentNullException('source', CBN);
        if (!destination)
            throw new exceptions.ArgumentNullException('destination', CBN);
        if (sourceIndex < 0)
            throw new exceptions.ArgumentOutOfRangeException('sourceIndex', sourceIndex, CBL0);
        if (destinationIndex < 0)
            throw new exceptions.ArgumentOutOfRangeException('destinationIndex', destinationIndex, CBL0);
        const sourceLength = source.length;
        if (!sourceLength || count < 1)
            return destination;
        if (sourceIndex >= sourceLength)
            throw new exceptions.ArgumentOutOfRangeException('sourceIndex', sourceIndex, 'Must be less than the length of the source array.');
        if (destination.length < 0)
            throw new exceptions.ArgumentOutOfRangeException('destination.length', destination.length, CBL0);
        const max = source.length - sourceIndex;
        if (isFinite(count) && count > max)
            throw new exceptions.ArgumentOutOfRangeException('sourceIndex', sourceIndex, 'Source index + length cannot exceed the length of the source array.');
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
        return arrayCopyTo(source, arrayInit__default.default(Math.min(count, Math.max(source.length - sourceIndex, 0))), sourceIndex, 0, count);
    }
    (function (arrayCopy) {
        function to(source, destination, sourceIndex = 0, destinationIndex = 0, length = Infinity) {
            return arrayCopyTo(source, destination, sourceIndex, destinationIndex, length);
        }
        arrayCopy.to = to;
    })(arrayCopy || (arrayCopy = {}));
    var arrayCopy_default = arrayCopy;

    exports.arrayCopyTo = arrayCopyTo;
    exports.default = arrayCopy_default;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=array-copy.js.map
