/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
interface ArrayLikeWritable<T> {
    length: number;
    [n: number]: T;
}
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param length An optional limit to stop copying.
 * @returns The destination array.
 */
export declare function arrayCopyTo<T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, length?: number): TDestination;
/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param length
 * @returns {any}
 */
declare function arrayCopy<T>(source: ArrayLike<T>, sourceIndex?: number, length?: number): T[];
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
