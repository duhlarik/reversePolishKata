function ReversePolish() {

} 

ReversePolish.prototype.toRPN = function (infix) {

    var inputQ = infix.split('');
    var operatorStack = [];
    var singleChar;
    var outputQ = [];

    while (inputQ.length > 0) {
        singleChar = inputQ.shift();
        if (this.isOperand(singleChar)) {
            outputQ.push(singleChar);
        }
        else if (this.isOperator(singleChar)) {
            operatorStack.push(singleChar);
        }
    }

    singleChar = operatorStack.pop();

    while(singleChar != null) {
        outputQ.push(singleChar);
        singleChar = operatorStack.pop();
    }

    return outputQ.join('');
}

ReversePolish.prototype.reverseString = function (str) {
    return str.split('').reverse().join('');
}

ReversePolish.prototype.isOperand = function (singleChar) {
    return singleChar.match(/[a-z]/g) != null;
}

ReversePolish.prototype.isOperator = function (singleChar) {
    return singleChar.match(/[\+\-\^\/*]/g) != null;
}

module.exports = ReversePolish;