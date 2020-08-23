var assert = require('assert'),
    ow = require('../dist');

describe('forEach', function () {
    it('should return an simple passed array', function () {
        assert.equal(JSON.stringify(ow.forEach([1,2])), JSON.stringify([1,2]));
    });

    it('should return an simple passed object literal content', function () {
        assert.equal(JSON.stringify(ow.forEach({a:1,b:2})), JSON.stringify({a:1,b:2}));
    });

    it('should use the passed function on array', function () {
        const mult = a => a * a
        assert.equal(JSON.stringify(ow.forEach([2, 4, 6], mult)), JSON.stringify([4,16,36]));
    });

    it('should behave correctly on a instance', function () {
        function Mult() {
            this.m = 'internal'
        }
        var mul = new Mult()
        Mult.prototype.parasite = ''
        assert.equal(JSON.stringify(ow.forEach(mul, a => a)), JSON.stringify({m:'internal'}));
    });

    it('should use the passed function on literal object', function () {
        const mult = a => a * a
        assert.equal(JSON.stringify(ow.forEach({a:2,b:4}, mult)), JSON.stringify({a:4,b:16}));
    });

    it('should throw an error for the bad argument', function () {
        try {
            ow.forEach(false)
        } catch (e) {
            assert.strictEqual(e instanceof Error, true);
            assert.strictEqual(e.message, "Invalid argument, object or array expected");
        }
    });
    it('∂ should be a pure function', function () {
        const mult = a => a * a,
            inp = {a:2,b:4},
            res = ow.forEach(inp, mult);
        assert.equal(
            JSON.stringify(res),
            JSON.stringify({a:4,b:16})
        );
        assert.equal(
            JSON.stringify(inp),
            JSON.stringify({a:2,b:4})
        );
    });
});
