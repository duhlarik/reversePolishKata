function ReversePolish() {

} 

ReversePolish.prototype.toRPN = function (infix) {

    var inputQ = infix.split('');
    var operatorStack = [];
    var singleChar;
    var outputQ = [];

    while (inputQ.length > 0) {

        singleChar = inputQ.shift();
        if (singleChar.match(/[a-z]/g) != null) {
            outputQ.push(singleChar);
        }
        else if (singleChar.match(/[\+\-\^\/*]/g) != null) {
            operatorStack.push(singleChar);
        }
    }

    singleChar = operatorStack.pop();

    while(singleChar != null) {
        outputQ.push(singleChar);
        singleChar = operatorStack.pop();
    }

    // let rpnOperands = infix.replace(/[\+\-\^\/*]/g, '');

    // let rpnOperators = infix.replace(/[a-z]/g, '');
    // rpnOperators = this.reverseString(rpnOperators);

    // return rpnOperands + rpnOperators;

    return outputQ.join('');
}



ReversePolish.prototype.reverseString = function (str) {
    return str.split('').reverse().join('');
}



module.exports = ReversePolish;