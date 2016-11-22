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
});