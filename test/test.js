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

describe('test two operators without parenthesis', function() {

    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });

    //YES. IT IS a+b+c >> ab+c+ .  TRUST ME.  
    it('should convert a+b+c to ab+c+', function() {
        let rpn = testReversePolish.toRPN('a+b+c');

        expect(rpn).to.equal('ab+c+');
    });

    it('should convert a+b-c to abc-+', function() {
        let rpn = testReversePolish.toRPN('a+b-c');

        expect(rpn).to.equal('abc-+');
    });

    //YES. IT IS a*b*c >> ab*c* .  TRUST ME. 
    it('should convert a*b*c to ab*c*', function() {
        let rpn = testReversePolish.toRPN('a*b*c');

        expect(rpn).to.equal('ab*c*');
    });

    it('should convert a/b/c to ab/c/', function() {
        let rpn = testReversePolish.toRPN('a/b/c');

        expect(rpn).to.equal('ab/c/');
    });
});

describe('testing operator precedence', function() {
    
    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });
  
    it('should return the precedence value of the ^', function() {
        let value = testReversePolish.getOperatorPrecedence('^');
        expect(value).to.equal(1);
    });

    it('should return the precedence value of the /', function() {
        let value = testReversePolish.getOperatorPrecedence('/');
        expect(value).to.equal(2);
    });
});