function halfIncreaseAndSum(startValue, operarions) {
  let currentValue = startValue;
  for (let i = 0; i < operarions; i++) {
    currentValue += Math.floor(currentValue / 2);
  }
  return currentValue;
}

const initialValue = 52;
const times = 30;
const result = halfIncreaseAndSum(initialValue, times);
console.log(result)