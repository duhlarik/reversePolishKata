var chai = require('chai');
var expect = require('chai').expect;
var ReversePolish = require('../src/index.js');

describe('basic two operand tests', function() {

    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });

    it('should convert a+b to ab+', function() {
        let rpn = testReversePolish.toRPN('a+b');

        expect(rpn).to.equal('ab+');
    });

    it('should convert a-b to ab-', function() {
        let rpn = testReversePolish.toRPN('a-b');

        expect(rpn).to.equal('ab-');
    });

    it('should convert a*b to ab*', function() {
        let rpn = testReversePolish.toRPN('a*b');

        expect(rpn).to.equal('ab*');
    });

    it('should convert a/b to ab/', function() {
        let rpn = testReversePolish.toRPN('a/b');

        expect(rpn).to.equal('ab/');
    });

    it('should convert a^b to ab^', function() {
        let rpn = testReversePolish.toRPN('a^b');

        expect(rpn).to.equal('ab^');
    });

    it('should convert c+b to cb+', function() {
        let rpn = testReversePolish.toRPN('c+b');

        expect(rpn).to.equal('cb+');
    });

});

describe('test multiple operands of same operator', function() {

    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });

    it('should convert a+b+c to abc++', function() {
        let rpn = testReversePolish.toRPN('a+b+c');

        expect(rpn).to.equal('abc++');
    });
});