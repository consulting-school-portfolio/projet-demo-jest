const { checkValue } = require('./truthiness');

describe('testing truthiness functions', () => {
    it('should be truthy', () => {
        expect(checkValue(1)).toBeTruthy();
        expect(checkValue('hello')).toBeTruthy();
    });
    it('should be falsy', () => {
       expect(checkValue(0)).toBeFalsy();
       expect(checkValue(null)).toBeFalsy();
       expect(checkValue('')).toBeFalsy(); 
    })
})