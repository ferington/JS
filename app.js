function halfIncriaseaddSum(startValue, operations) {
    let currentValue = startValue;
    for (let i = 0; i < operations; i++) {
        currentValue += Math.floor(currentValue / 2);
    }
    return currentValue;
}
const initialValue = 102;
const times =60;
const result =halfIncriaseaddSum(initialValue, times);
console.log(result);