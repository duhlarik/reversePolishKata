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
            if(operatorStack.length > 0 && this.isOperatorLessThanOrEqualToTopOfStack(singleChar,operatorStack)) {
                this.purgeStackToOutputQ(outputQ, operatorStack);
            }
            operatorStack.push(singleChar);
        } else if(singleChar == '('){
            operatorStack.push(singleChar);
        } else if(singleChar == ')'){
            let stackChar = operatorStack.pop();
            while(stackChar != null && stackChar != '(') {
                outputQ.push(stackChar);
                stackChar = operatorStack.pop();
            }
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

ReversePolish.prototype.isOperator = function (singleChar) {
    return singleChar.match(/[\+\-\^\/*]/g) != null;
}

ReversePolish.prototype.getOperatorPrecedence = function(singleChar) {
    var operatorList = '+-*/^';
    return operatorList.indexOf(singleChar) +1;
}

ReversePolish.prototype.purgeStackToOutputQ = function(outputQ, operatorStack) {
    let singleChar = operatorStack.pop();
    while(singleChar != null) {
        outputQ.push(singleChar);
        singleChar = operatorStack.pop();
    }
}

ReversePolish.prototype.isOperatorLessThanOrEqualToTopOfStack = function(singleChar, operatorStack) {
    return this.getOperatorPrecedence(singleChar) 
                    <= this.getOperatorPrecedence(this.seekTopOfStack(operatorStack));
}

ReversePolish.prototype.seekTopOfStack = function(operatorStack) {
    if(operatorStack.length == 0) {
        return null;
    }
    return operatorStack[operatorStack.length-1];
}

module.exports = ReversePolish;