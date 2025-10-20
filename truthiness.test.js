const fn = require('./truthiness');

describe('testing truthiness functions', () => {
    it('should be truthy', () => {
        expect(fn.checkValue(1)).toBeTruthy();
        expect(fn.checkValue('hello')).toBeTruthy();
    });
    it('should be falsy', () => {
       expect(fn.checkValue(0)).toBeFalsy();
       expect(fn.checkValue(null)).toBeFalsy();
       expect(fn.checkValue('')).toBeFalsy(); 
    })
})