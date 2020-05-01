import arrayCopy from '../src/arrayCopy';

function validate (source: any[]): void
{
	const copy = arrayCopy(source);
	expect(copy).not.toBe(source);
	expect(copy.length).toBe(source.length);
	for(let i = 0; i<source.length; i++)
	{
		expect(copy[i]).toBe(source[i]);
	}
}

describe('arrayCopy', () => {
	it('makes copies', () => {
		validate([1, 2, 3, 4]);
		validate(['a', 'b', 'c', 'd', 'e']);
	});
});
