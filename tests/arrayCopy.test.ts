import { describe, it, expect } from 'vitest';
import arrayCopy, { arrayCopyTo } from '../src/arrayCopy.js';

function validate (source: any[]): void
{
	const copy = arrayCopy(source);
	expect(copy).not.toBe(source);
	expect(copy.length).equal(source.length);
	for(let i = 0; i<source.length; i++)
	{
		expect(copy[i]).equal(source[i]);
	}
}

describe('arrayCopy', () => {
	describe('basic copying', () => {
		it('makes copies', () => {
			validate([1, 2, 3, 4]);
			validate(['a', 'b', 'c', 'd', 'e']);
		});

		it('handles null source', () => {
			expect(arrayCopy(null as any)).toBe(null);
		});

		it('handles undefined source', () => {
			expect(arrayCopy(undefined as any)).toBe(undefined);
		});

		it('handles empty arrays', () => {
			const copy = arrayCopy([]);
			expect(copy).toEqual([]);
			expect(copy).not.toBe([]);
		});

		it('handles partial copies with sourceIndex', () => {
			const source = [1, 2, 3, 4, 5];
			const copy = arrayCopy(source, 2, 2);
			expect(copy).toEqual([3, 4]);
		});

		it('handles copies with count limit', () => {
			const source = [1, 2, 3, 4, 5];
			const copy = arrayCopy(source, 0, 3);
			expect(copy).toEqual([1, 2, 3]);
		});

		it('handles sourceIndex beyond valid range', () => {
			const source = [1, 2, 3];
			expect(() => arrayCopy(source, 3, 5)).toThrow('Must be less than the length of the source array');
		});
	});

	describe('arrayCopyTo function', () => {
		it('throws for null source', () => {
			const dest: number[] = [];
			expect(() => arrayCopyTo(null as any, dest)).toThrow('Cannot be null');
		});

		it('throws for null destination', () => {
			const src = [1, 2, 3];
			expect(() => arrayCopyTo(src, null as any)).toThrow('Cannot be null');
		});

		it('throws for negative sourceIndex', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			expect(() => arrayCopyTo(src, dest, -1)).toThrow('Cannot be less than zero');
		});

		it('throws for negative destinationIndex', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			expect(() => arrayCopyTo(src, dest, 0, -1)).toThrow('Cannot be less than zero');
		});

		it('throws for sourceIndex >= sourceLength', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			expect(() => arrayCopyTo(src, dest, 3)).toThrow('Must be less than the length of the source array');
		});

		it('throws for negative destination length', () => {
			const src = [1, 2, 3];
			const dest = { length: -1 } as any;
			expect(() => arrayCopyTo(src, dest)).toThrow('Cannot be less than zero');
		});

		it('throws when count exceeds available source elements', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			expect(() => arrayCopyTo(src, dest, 1, 0, 5)).toThrow('Source index + length cannot exceed the length of the source array');
		});

		it('handles empty source arrays', () => {
			const src: number[] = [];
			const dest: number[] = [];
			const result = arrayCopyTo(src, dest);
			expect(result).toBe(dest);
			expect(dest).toEqual([]);
		});

		it('handles count less than 1', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			const result = arrayCopyTo(src, dest, 0, 0, 0);
			expect(result).toBe(dest);
			expect(dest).toEqual([]);
		});

		it('expands destination array when needed', () => {
			const src = [1, 2, 3, 4, 5];
			const dest: number[] = [];
			arrayCopyTo(src, dest, 0, 2, 3);
			expect(dest.length).toBe(5);
			expect(dest[2]).toBe(1);
			expect(dest[3]).toBe(2);
			expect(dest[4]).toBe(3);
		});

		it('handles copying to existing elements', () => {
			const src = [10, 20, 30];
			const dest = [1, 2, 3, 4, 5];
			arrayCopyTo(src, dest, 0, 1, 2);
			expect(dest).toEqual([1, 10, 20, 4, 5]);
		});

		it('handles partial source copying', () => {
			const src = [1, 2, 3, 4, 5];
			const dest: number[] = [];
			arrayCopyTo(src, dest, 2, 0, 2);
			expect(dest).toEqual([3, 4]);
		});

		it('handles infinite count', () => {
			const src = [1, 2, 3];
			const dest: number[] = [];
			arrayCopyTo(src, dest, 1, 0, Infinity);
			expect(dest).toEqual([2, 3]);
		});
	});

	describe('.to method', () => {
		it('has a .to method that works', () => {
			const source = [1, 2, 3, 4, 5];
			const destination: number[] = [];
			
			// This tests that TypeScript understands .to exists and compiles
			const result = arrayCopy.to(source, destination);
			
			expect(result).toBe(destination); // should return the destination array
			expect(destination.length).toBe(5);
			expect(destination).toEqual([1, 2, 3, 4, 5]);
		});

		it('has a .to method with partial copy', () => {
			const source = [10, 20, 30, 40, 50];
			const destination = [1, 2, 3, 4, 5, 6, 7];
			
			// Copy 3 elements from source starting at index 1 to destination starting at index 2
			arrayCopy.to(source, destination, 1, 2, 3);
			
			// destination should be [1, 2, 20, 30, 40, 6, 7]
			expect(destination).toEqual([1, 2, 20, 30, 40, 6, 7]);
		});

		it('.to method handles all parameters', () => {
			const source = [100, 200, 300, 400, 500];
			const destination = new Array(10);
			
			arrayCopy.to(source, destination, 1, 3, 2);
			
			expect(destination[3]).toBe(200);
			expect(destination[4]).toBe(300);
			expect(destination.length).toBe(10);
		});

		it('.to method works with ArrayLike objects', () => {
			const source = 'hello'; // string is ArrayLike
			const destination: string[] = [];
			
			arrayCopy.to(source, destination);
			
			expect(destination).toEqual(['h', 'e', 'l', 'l', 'o']);
		});
	});

	describe('edge cases', () => {
		it('handles sparse arrays', () => {
			const sparse = new Array(5);
			sparse[0] = 'first';
			sparse[4] = 'last';
			
			const copy = arrayCopy(sparse);
			expect(copy.length).toBe(5);
			expect(copy[0]).toBe('first');
			expect(copy[1]).toBeUndefined();
			expect(copy[4]).toBe('last');
		});

		it('handles ArrayLike objects', () => {
			const arrayLike = {
				0: 'a',
				1: 'b', 
				2: 'c',
				length: 3
			};
			
			const copy = arrayCopy(arrayLike);
			expect(copy).toEqual(['a', 'b', 'c']);
		});

		it('handles copying with undefined values', () => {
			const source = [1, undefined, 3, undefined, 5];
			const dest: (number | undefined)[] = [];
			
			arrayCopyTo(source, dest);
			expect(dest).toEqual([1, undefined, 3, undefined, 5]);
		});
	});
});