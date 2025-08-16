/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable } from '@tsdotnet/common-interfaces';
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The destination array.
 */
export declare function arrayCopyTo<T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, count?: number): TDestination;
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
    /**
     * Copies one array to another.
     * @param source
     * @param destination
     * @param sourceIndex
     * @param destinationIndex
     * @param length An optional limit to stop copying.
     * @returns The destination array.
     */
    function to<T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, length?: number): TDestination;
}
export default arrayCopy;
