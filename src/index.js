function ReversePolish() {

}

ReversePolish.prototype.toRPN = function (infix) {
    return infix[0] + infix[2] + infix[1];

}

module.exports = ReversePolish;