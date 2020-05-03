# ![alt text](https://avatars1.githubusercontent.com/u/64487547?s=30&amp;v=4 "tsdotnet") tsdotnet / array-copy

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/array-copy/blob/master/LICENSE)
![npm-publish](https://github.com/tsdotnet/array-copy/workflows/npm-publish/badge.svg)
[![npm version](https://img.shields.io/npm/v/@tsdotnet/array-copy.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/array-copy)

A commonly used array copy utility.

## Usage

```typescript
import arrayCopy, {arrayCopyTo} from '@tsdotnet/array-copy'

const myCopy = arrayCopy(source);
// myCopy is really a shortcut for:
const myOtherCopy = arrayCopyTo([]);
```

or

```typescript
import arrayCopy from '@tsdotnet/array-copy'

const myOtherCopy = arrayCopy.to([]); // same as arrayCopyTo.
```

## Exported

*For flexibility, these functions can operate on objects that have a length but are not instances of Array.* (`ArrayLikeWritable<T>`)

### arrayCopyTo

```typescript
/**
 * Copies one array to another.
 * @param source
 * @param destination
 * @param sourceIndex
 * @param destinationIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The destination array.
 */
export function arrayCopyTo<T, TDestination extends ArrayLikeWritable<T>> (
  source: ArrayLike<T>,
  destination: TDestination,
  sourceIndex: number      = 0,
  destinationIndex: number = 0,
  count: number           = Infinity
): TDestination
```

### arrayCopy

```typescript
/**
 * Creates a copy of the array-like object.
 * Similar to Array.slice(index, length).
 * @param source
 * @param sourceIndex
 * @param count An optional limit to stop copying.  Finite values must be no more than the source.length minus the sourceIndex.
 * @returns The copy of the source array.
 */
export default function arrayCopy<T> (
  source: ArrayLike<T>,
  sourceIndex: number = 0,
  count: number      = Infinity
): T[]
```
