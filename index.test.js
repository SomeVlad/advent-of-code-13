const { isOrderCorrect } = require('./is-order-correct')
const { calculate: calculatePart1 } = require('./part-1')
const { calculate: calculatePart2 } = require('./part-2')

describe('isOrderCorrect', function () {
    test('primitives check', () => {
        expect(isOrderCorrect([1], [2])).toBe(true)
        expect(isOrderCorrect([1], [1])).toBeUndefined()
        expect(isOrderCorrect([2], [1])).toBe(false)
        expect(isOrderCorrect([], [1])).toBe(true)
        expect(isOrderCorrect([2], [])).toBe(false)
    })

    /*
    - Compare 1 vs 1
    - Compare 1 vs 1
    - Compare 3 vs 5
    - Left side is smaller, so inputs are in the right order
     */
    test('== Pair 1 ==', () => {
        expect(isOrderCorrect([1, 1, 3, 1, 1], [1, 1, 5, 1, 1])).toBe(true)
    })

    /*
    - Compare [[1],[2,3,4]] vs [[1],4]
    - Compare [1] vs [1]
    - Compare 1 vs 1
    - Compare [2,3,4] vs 4
    - Mixed types; convert right to [4] and retry comparison
    - Compare [2,3,4] vs [4]
    - Compare 2 vs 4
    - Left side is smaller, so inputs are in the right order
    */
    test('== Pair 2 ==', () => {
        expect(isOrderCorrect([[1], [2, 3, 4]], [[1], 4])).toBe(true)
    })

    /*
    - Compare [9] vs [[8,7,6]]
    - Compare 9 vs [8,7,6]
    - Mixed types; convert left to [9] and retry comparison
    - Compare [9] vs [8,7,6]
    - Compare 9 vs 8
    - Right side is smaller, so inputs are not in the right order
    */
    test('== Pair 3 ==', () => {
        expect(isOrderCorrect([9], [[8, 7, 6]])).toBe(false)
    })

    /*
    - Compare [[4,4],4,4] vs [[4,4],4,4,4]
    - Compare [4,4] vs [4,4]
    - Compare 4 vs 4
    - Compare 4 vs 4
    - Compare 4 vs 4
    - Compare 4 vs 4
    - Left side ran out of items, so inputs are in the right order
    */
    test('== Pair 4 ==', () => {
        expect(isOrderCorrect([[4, 4], 4, 4], [[4, 4], 4, 4, 4])).toBe(true)
    })

    /*
    - Compare [7,7,7,7] vs [7,7,7]
    - Compare 7 vs 7
    - Compare 7 vs 7
    - Compare 7 vs 7
    - Right side ran out of items, so inputs are not in the right order
    */
    test('== Pair 5 ==', () => {
        expect(isOrderCorrect([7, 7, 7, 7], [7, 7, 7])).toBe(false)
    })

    /*
    - Compare [] vs [3]
    - Left side ran out of items, so inputs are in the right order
    */
    test('== Pair 6 ==', () => {
        expect(isOrderCorrect([], [3])).toBe(true)
    })

    /*
    == Pair 7 ==
    - Compare [[[]]] vs [[]]
    - Compare [[]] vs []
    - Right side ran out of items, so inputs are not in the right order
    */
    test('== Pair 7 ==', () => {
        expect(isOrderCorrect([[[]]], [[]])).toBe(false)
    })

    /*
    == Pair 8 ==
    - Compare [1,[2,[3,[4,[5,6,7]]]],8,9] vs [1,[2,[3,[4,[5,6,0]]]],8,9]
    - Compare 1 vs 1
    - Compare [2,[3,[4,[5,6,7]]]] vs [2,[3,[4,[5,6,0]]]]
    - Compare 2 vs 2
    - Compare [3,[4,[5,6,7]]] vs [3,[4,[5,6,0]]]
    - Compare 3 vs 3
    - Compare [4,[5,6,7]] vs [4,[5,6,0]]
    - Compare 4 vs 4
    - Compare [5,6,7] vs [5,6,0]
    - Compare 5 vs 5
    - Compare 6 vs 6
    - Compare 7 vs 0
    - Right side is smaller, so inputs are not in the right order
    */
    test('== Pair 8 ==', () => {
        expect(
            isOrderCorrect(
                [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
                [1, [2, [3, [4, [5, 6, 0]]]], 8, 9]
            )
        ).toBe(false)
    })
})

describe('calculate part 1', function () {
    test('check test data', () => {
        expect(calculatePart1('test-input.txt')).toBe(13)
    })
})

describe('calculate part 2', function () {
    test('check test data', () => {
        expect(calculatePart2('test-input.txt')).toBe(140)
    })
})
