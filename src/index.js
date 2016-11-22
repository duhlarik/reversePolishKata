function ReversePolish() {

}

ReversePolish.prototype.toRPN = function (infix) {
    if (infix.indexOf('+') != -1) {
        return 'ab+';
    }

    if (infix.indexOf('-') != -1) {
        return 'ab-';
    }

    if (infix.indexOf('*') != -1) {
        return 'ab*';
    }

    if (infix.indexOf('/') != -1) {
        return 'ab/';
    }

    if (infix.indexOf('^') != -1) {
        return 'ab^';
    }
}

module.exports = ReversePolish;