import {expect} from 'chai';
import arrayCopy from '../src/arrayCopy';

function validate (source: any[]): void
{
	const copy = arrayCopy(source);
	expect(copy).not.equal(source);
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
});
