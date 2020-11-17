import { take } from '../../src/take/index'

describe('take', () => {
  for (const { input, nItems, expected } of [
    {
      input: [1],
      nItems: 1,
      expected: [1]
    },
    {
      input: [1],
      nItems: 3,
      expected: [1, 1, 1]
    },
    {
      input: [1],
      nItems: 0,
      expected: []
    },
    {
      input: [1],
      nItems: NaN,
      expected: []
    },
    {
      input: [1, 2, 3],
      nItems: 3,
      expected: [1, 2, 3]
    },
    {
      input: [1, 2],
      nItems: 5,
      expected: [1, 2, 1, 2, 1]
    },
    {
      input: [[], []],
      nItems: 3,
      expected: [[], [], []]
    },
    {
      input: [undefined],
      nItems: 2,
      expected: [undefined, undefined]
    }
  ]) {
    test(`GIVEN args ${input}, ${nItems}
    THEN take should return ${expected}`, () => {
      expect(take(input, nItems)).toEqual(expected)
    })
  }

  test('GIVEN args of any[], Infinity THEN throw an error', () => {
    expect(() => { take([], Infinity) }).toThrow(new Error('cannot populate array infinitely'))
  })
})
