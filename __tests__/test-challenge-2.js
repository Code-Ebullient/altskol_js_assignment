const assignment = require('../src/assignment.js');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    const numbers = [
        17,
        0,
        67,
        41,
        49,
        35,
        7,
        29,
        64
    ]
    expect(countEvenNumbers(numbers)).toBe(9);
});