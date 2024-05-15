function halfIncreaseAndSum(startValue, operations) {
  let currentValue = startValue;
  for (let i = 0; i < operations; i++) {
    currentValue += Math.floor(currentValue / 2);
  }
  return currentValue;
}

const initialValue = 63;
const times = 30;
const result = halfIncreaseAndSum(initialValue, times);
console.log(result);
