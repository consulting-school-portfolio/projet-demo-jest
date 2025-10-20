const { divide } = require('./exceptions');

describe('Testing exceptions handling functions', () => {
    it('should trow an error when dividing by zero', () => {
        expect(() => divide(1, 0)).toThrow();
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    })
})