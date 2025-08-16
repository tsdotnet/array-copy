/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { ArrayLikeWritable } from '@tsdotnet/common-interfaces';
/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The copy of the source array.
 */
declare function arrayCopy<T>(source: ArrayLike<T>, sourceIndex?: number, count?: number): T[];
declare namespace arrayCopy {
    var to: <T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, length?: number) => TDestination;
}
export default arrayCopy;
