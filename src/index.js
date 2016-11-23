function ReversePolish() {

}

ReversePolish.prototype.toInfix = function (rpn) {

    var inputQ = rpn.split('');
    var operandQ = [];
    var outputStack = [];

    var solutionStack = [];

    while (inputQ.length > 0) {

        var singleChar = inputQ.shift();

        if (this.isOperator(singleChar)) {

            let secondOperand = solutionStack.pop();
            let firstOperand = solutionStack.pop();

            if(firstOperand.length > 1) {

                firstOperand = this.surroundWithParenthesis(firstOperand);
            }

            if(secondOperand.length > 1) {

                secondOperand = this.surroundWithParenthesis(secondOperand);
            }

            let resultOperand = this.createInfixString(firstOperand,singleChar,secondOperand);

            solutionStack.push(resultOperand);

        }
        else {

            solutionStack.push(singleChar);
        }
    }

    let solutionString = solutionStack.pop();

    return solutionString;
}

ReversePolish.prototype.surroundWithParenthesis = function (str) {
    return '(' + str + ')';
} 

ReversePolish.prototype.createInfixString = function(firstOperand, operator, secondOperand) {
    return firstOperand + operator + secondOperand;
} 

ReversePolish.prototype.toRPN = function(infix) {

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
            if (operatorStack.length > 0 && this.isOperatorLessThanOrEqualToTopOfStack(singleChar, operatorStack)) {
                this.purgeStackToOutputQ(outputQ, operatorStack);
            }
            operatorStack.push(singleChar);
        } else if (this.isOpenParanthesis(singleChar)) {
            operatorStack.push(singleChar);
        } else if (this.isCloseParanthesis(singleChar)) {
            this.purgeStackToOutputQ(outputQ, operatorStack);
        }
    }

    this.purgeStackToOutputQ(outputQ, operatorStack);

    return outputQ.join('');
}

ReversePolish.prototype.reverseString = function (str) {
    return str.split('').reverse().join('');
}

ReversePolish.prototype.isOperand = function (singleChar) {
    return singleChar.match(/[a-z]/g) != null;
}

ReversePolish.prototype.isOpenParanthesis = function (singleChar) {
    return singleChar == '(';
}

ReversePolish.prototype.isCloseParanthesis = function (singleChar) {
    return singleChar == ')';
}

ReversePolish.prototype.isOperator = function (singleChar) {
    return singleChar.match(/[\+\-\^\/*]/g) != null;
}

ReversePolish.prototype.getOperatorPrecedence = function (singleChar) {
    var operatorList = '+-*/^';
    return operatorList.indexOf(singleChar) + 1;
}

ReversePolish.prototype.purgeStackToOutputQ = function (outputQ, operatorStack) {
    let singleChar = operatorStack.pop();
    while (singleChar != null && singleChar != '(') {
        outputQ.push(singleChar);
        singleChar = operatorStack.pop();
    }
}

ReversePolish.prototype.isOperatorLessThanOrEqualToTopOfStack = function (singleChar, operatorStack) {
    return this.getOperatorPrecedence(singleChar)
        <= this.getOperatorPrecedence(this.seekTopOfStack(operatorStack));
}

ReversePolish.prototype.seekTopOfStack = function (operatorStack) {
    if (operatorStack.length == 0) {
        return null;
    }
    return operatorStack[operatorStack.length - 1];
}

module.exports = ReversePolish;