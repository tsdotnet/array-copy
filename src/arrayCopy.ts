/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import ArgumentOutOfRangeException from '@tsdotnet/exceptions/dist/ArgumentOutOfRangeException';
import arrayInit from '@tsdotnet/array-init';

interface ArrayLikeWritable<T>
{
	length: number;

	[n: number]: T;
}

/* eslint-disable no-inner-declarations */

const
	CBN  = 'Cannot be null.',
	CBL0 = 'Cannot be less than zero.';

/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param length An optional limit to stop copying.
 * @returns The destination array.
 */
export function arrayCopyTo<T, TDestination extends ArrayLikeWritable<T>> (
	source: ArrayLike<T>,
	destination: TDestination,
	sourceIndex: number      = 0,
	destinationIndex: number = 0,
	length: number           = Infinity
): TDestination
{
	if(!source) throw new ArgumentNullException('source', CBN);
	if(!destination) throw new ArgumentNullException('destination', CBN);
	if(sourceIndex<0) throw new ArgumentOutOfRangeException('sourceIndex', sourceIndex, CBL0);

	const sourceLength = source.length;
	if(!sourceLength) return destination;
	if(sourceIndex>=sourceLength)
		throw new ArgumentOutOfRangeException(
			'sourceIndex',
			sourceIndex,
			'Must be less than the length of the source array.'
		);

	if(destination.length<0) throw new ArgumentOutOfRangeException('destinationIndex', destinationIndex, CBL0);

	const maxLength = source.length - sourceIndex;
	if(isFinite(length) && length>maxLength)
		throw new ArgumentOutOfRangeException(
			'sourceIndex',
			sourceIndex,
			'Source index + length cannot exceed the length of the source array.'
		);

	length = Math.min(length, maxLength);
	const newLength = destinationIndex + length;
	if(newLength>destination.length) destination.length = newLength;

	for(let i = 0; i<length; i++)
	{
		destination[destinationIndex + i] = source[sourceIndex + i];
	}

	return destination;
}


/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param length
 * @returns {any}
 */
function arrayCopy<T> (
	source: ArrayLike<T>,
	sourceIndex: number = 0,
	length: number      = Infinity): T[]
{
	if(!source) return source as any; // may have passed zero? undefined? or null?
	return arrayCopyTo(
		source,
		arrayInit<T>(Math.min(length, Math.max(source.length - sourceIndex, 0))),
		sourceIndex,
		0,
		length
	);
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace arrayCopy
{
	/**
	 * Copies one array to another.
	 * @param source
	 * @param destination
	 * @param sourceIndex
	 * @param destinationIndex
	 * @param length An optional limit to stop copying.
	 * @returns The destination array.
	 */
	export function to<T, TDestination extends ArrayLikeWritable<T>> (
		source: ArrayLike<T>,
		destination: TDestination,
		sourceIndex: number      = 0,
		destinationIndex: number = 0,
		length: number           = Infinity
	): TDestination
	{
		return arrayCopyTo(source, destination, sourceIndex, destinationIndex, length);
	}
}

// @ts-ignore
export default arrayCopy;
