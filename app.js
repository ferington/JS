function isThreeOfAKind(num) {
    const numStr = num.toString();
    for (let i = 0; i < numStr.length - 2; i++) {
        if (numStr[i] === numStr[i + 1] && numStr[i + 1] === numStr[i + 2]) {
            return true;
        }
    }
    return false;
}

function sumThreeOfAKindNumbers(max) {
    let totalSum = 0;
    for (let i = 1; i <= max; i++) {
        if (isThreeOfAKind(i)) {
            totalSum += i;
        }
    }
    return totalSum;
}

const maxNumber = 200000;
const result = sumThreeOfAKindNumbers(maxNumber);
console.log(`The sum of all 'three of a kind' numbers up to ${maxNumber} is ${result}.`);