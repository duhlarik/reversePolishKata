function ReversePolish() {

}

ReversePolish.prototype.toRPN = function (infix) {

    let rpnOperands = infix.replace(/[\+\-\^\/*]/g, '');

    let rpnOperators = infix.replace(/[a-z]/g, '');

    return rpnOperands + rpnOperators;
}

module.exports = ReversePolish;