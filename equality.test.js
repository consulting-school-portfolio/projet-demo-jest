const fn = require('./equality');

describe('testing equality functions', () =>{
    it('should add two numbers', () => {
        expect(fn.add(1, 2)).toBe(3)
    });
      it('should create an equivalent object', () => {
        expect(fn.createObject()).toEqual({value: 1})
    });
});