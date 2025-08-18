import { describe, it, expect } from 'vitest';
import arrayCopy from '../src/arrayCopy.ts';

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
	it('makes copies', () => {
		validate([1, 2, 3, 4]);
		validate(['a', 'b', 'c', 'd', 'e']);
	});

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
});
