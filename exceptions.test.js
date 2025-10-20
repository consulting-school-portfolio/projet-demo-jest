const fn = require('./exceptions');

describe('Testing exceptions handling functions', () => {
    it('should trow an error when dividing by zero', () => {
        expect(() => fn.divide(1, 0)).toThrow();
        expect(() => fn.divide(1, 0)).toThrow('Cannot divide by zero');
    })
})