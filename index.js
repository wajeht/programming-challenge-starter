const main = require('./src/index.js');

const test = {
    one: 'test one',
    two: 'test two',
    three: 'test three',
};

console.log({
    before: {
        test: {
            one: test.one,
            two: test.two,
            three: test.three,
        },
    },
    after: {
        solution: {
            one: main(test.one),
            two: main(test.two),
            three: main(test.three),
        },
    },
});
