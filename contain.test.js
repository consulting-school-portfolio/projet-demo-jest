const fn = require('./contain');

describe('Testing contain functions', () => {
    let fruits;
    beforeEach(() => {
        fruits = fn.getFruits();
    })
    it('should contain banana', () => {
        expect(fruits).toContain('banana');
    });
    it('should not contain grape', () => {
        expect(fruits).not.toContain('grape');
    })
})