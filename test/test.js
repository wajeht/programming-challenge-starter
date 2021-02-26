const main = require('../src/index.js');

describe('main functiono', () => {
    const param = 'Hello world!';
    test('test case one', () => {
        expect(main(param)).toBe(param);
    });

    test('test case two', () => {
        const param = 'Hello world!';
        expect(main(param)).toBe(param);
    });

    test('test case three', () => {
        const param = 'Hello world!';
        expect(main(param)).toBe(param);
    });
});
