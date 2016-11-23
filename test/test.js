var chai = require('chai');
var expect = require('chai').expect;
var ReversePolish = require('../src/index.js');

describe('testing infix to rpn conversion', function() {

    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });

    describe('basic two operand tests', function() {

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

        it('should convert a/b*c to ab/c*', function() {
            let rpn = testReversePolish.toRPN('a/b*c');

            expect(rpn).to.equal('ab/c*');
        });

        it('should convert a^b^c to ab^c^', function() {
            let rpn = testReversePolish.toRPN('a^b^c');

            expect(rpn).to.equal('ab^c^');
        });

        it('should convert a^b^c to ab^c^', function() {
            let rpn = testReversePolish.toRPN('a^b^c');

            expect(rpn).to.equal('ab^c^');
        });

        it('should convert a/b^c to abc^/', function() {
            let rpn = testReversePolish.toRPN('a/b^c');

            expect(rpn).to.equal('abc^/');
        });
    });

    describe('test two operators with parenthesis', function(){

        it('should convert (a+b) to ab+', function() {
            let rpn = testReversePolish.toRPN('(a+b)');
            expect(rpn).to.equal('ab+');
        });
    });

    describe('test many operators without parenthesis', function() {
        
        it('should convert l/m^n*o-p to lmn^/o*p-', function() {
            let rpn = testReversePolish.toRPN('l/m^n*o-p');

            expect(rpn).to.equal('lmn^/o*p-');
        });
    });

    describe('test many operators with parenthesis', function() {

        it('should convert (a+b)-c to ab+c-', function() {
            let rpn = testReversePolish.toRPN('(a+b)-c');

            expect(rpn).to.equal('ab+c-');
        });

        it('should convert ((a+b)-c) to ab+c-', function() {
            let rpn = testReversePolish.toRPN('((a+b)-c)');

            expect(rpn).to.equal('ab+c-');
        });

        it('should convert ((l/(m^n))*o)-p to lmn^/o*p-', function() {
            let rpn = testReversePolish.toRPN('((l/(m^n))*o)-p');

            expect(rpn).to.equal('lmn^/o*p-');
        });

        it('should convert ((v/w)^x)*(y-z) to vw/x^yz-*', function() {
            let rpn = testReversePolish.toRPN('((v/w)^x)*(y-z)');

            expect(rpn).to.equal('vw/x^yz-*');
        });

        it('should convert (a+g)*(((b-a)+c)^(c+(e*(d^f)))) to ag+ba-c+cedf^*+^*', function() {
            let rpn = testReversePolish.toRPN('(a+g)*(((b-a)+c)^(c+(e*(d^f))))');

            expect(rpn).to.equal('ag+ba-c+cedf^*+^*');
        });
    });

    describe('testing operator precedence', function() {
        
    
        it('should return the precedence value of the ^', function() {
            let value = testReversePolish.getOperatorPrecedence('^');
            expect(value).to.equal(5);
        });

        it('should return the precedence value of the /', function() {
            let value = testReversePolish.getOperatorPrecedence('/');
            expect(value).to.equal(4);
        });
    });

    describe('testing seekTopOfStack function', function() {

        it('should return the last character of abcde', function() {
            let singleChar = testReversePolish.seekTopOfStack('abcde');
            expect(singleChar).to.equal('e');
        });

        it('should return null if stack is empty', function() {
            let singleChar = testReversePolish.seekTopOfStack('');
            expect(singleChar).to.equal(null);
        });
    });
});

describe('testing rpn to infix conversion', function() {

    var testReversePolish;

    beforeEach(function() {
        testReversePolish = new ReversePolish(); 
    });

    describe('basic two operand tests', function() {
        it('should convert ab+ to a+b', function() {

            let infix = testReversePolish.toInfix('ab+');
            expect(infix).to.equal('a+b');
        });

        it('should convert ab- to a-b', function() {

            let infix = testReversePolish.toInfix('ab-');
            expect(infix).to.equal('a-b');
        });

        it('should convert ab* to a*b', function() {

            let infix = testReversePolish.toInfix('ab*');
            expect(infix).to.equal('a*b');
        });

        it('should convert ab/ to a/b', function() {

            let infix = testReversePolish.toInfix('ab/');
            expect(infix).to.equal('a/b');
        });

        it('should convert ab^ to a^b', function() {

            let infix = testReversePolish.toInfix('ab^');
            expect(infix).to.equal('a^b');
        });
    });
});