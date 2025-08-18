/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable } from '@tsdotnet/common-interfaces';
export declare function arrayCopyTo<T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, count?: number): TDestination;
declare function arrayCopy<T>(source: ArrayLike<T>, sourceIndex?: number, count?: number): T[];
declare namespace arrayCopy {
    function to<T, TDestination extends ArrayLikeWritable<T>>(source: ArrayLike<T>, destination: TDestination, sourceIndex?: number, destinationIndex?: number, length?: number): TDestination;
}
export default arrayCopy;
