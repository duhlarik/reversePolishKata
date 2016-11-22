function ReversePolish() {

}

ReversePolish.prototype.toRPN = function (infix) {

    let rpnOperands = infix.replace(/[\+\-\^\/*]/g, '');

    let rpnOperators = infix.replace(/[a-z]/g, '');
    rpnOperators = this.reverseString(rpnOperators);

    return rpnOperands + rpnOperators;
}

ReversePolish.prototype.reverseString = function(str) {
    return str.split('').reverse().join('');
}

module.exports = ReversePolish;