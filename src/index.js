module.exports = function check(str, bracketsConfig) {
    const openBrackets = [];
    const closeBrackets = [];
    bracketsConfig.map (bracketsPair => {
        openBrackets.push (bracketsPair[0]);
        closeBrackets.push (bracketsPair[1]);
    });

    let result = [];
    for (let i of str) {
        if (result[0] === i) {
            result.shift();
        } else if ((openBrackets.indexOf(i) > -1)) {
            result.unshift(closeBrackets[openBrackets.indexOf(i)]);
        } else {
            return false;
        }
    }
    return (result.length === 0);
}
