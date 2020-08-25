var assert = require('assert'),
    ow = require('../dist');

describe('find', function () {
    it('should find the index, based on 1st level value', function () {
        assert.equal(ow.find([1,2,3,5,6], function (e, i) {
            return (e % 2 === 0) 
        }), 1);
    });
    it('should find the index, based on 2nd level value', function () {
        assert.equal(ow.find([{
            name: 'Federico'
        }, {
            name: 'John'
        },{
            name: 'Jeff'
        },{
            name: 'Coff'
        }], function (e, i) {
            return e.name.match(/ff$/i) 
        }), 2);
    });
    it('should find the index, based on 3rd level value', function () {
        assert.equal(ow.find([{
            name: 'Federico'
        }, {
            name: 'John',
            data: {
                age: 23
            }
        },{
            name: 'Jeff',
        },{
            name: 'Coff',
            data: {
                age: 33
            }
        }], function (e, i) {
            return e.data && e.data.age > 30 
        }), 3);
    });
    it('should throw an error for the bad first argument', function () {
        try {
            ow.find(false)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, array expected");
        }
    });
    it('should throw an error for the bad second argument', function () {
        try {
            ow.find([], false)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, function expected");
        }
    });
    it('∂ should be a pure function', function () {
        const mult = a => a * a > 4,
            inp = [2, 4, 6],
            res = ow.find(inp, mult);
        assert.equal(res, 1);
        assert.equal(
            JSON.stringify(inp),
            JSON.stringify([2, 4, 6])
        );
    });
});
