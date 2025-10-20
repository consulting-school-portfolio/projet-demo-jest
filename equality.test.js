const { add, createObject } = require('./equality');

describe('testing equality functions', () =>{
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3)
    });
      it('should create an equivalent object', () => {
        expect(createObject()).toEqual({value: 1})
    });
});