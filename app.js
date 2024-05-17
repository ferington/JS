function halfIncruaseAndSum(startValue, operations) {
  let currentValue = startValue;
  for (let i = 0; i < operations; i ++) {
    currentValue += Math.floor(currentValue /2);
  }
  return currentValue;
}

const initialValue =52;
const times = 40;
const result = halfIncruaseAndSum(initialValue, times);
console.log(result);


function findLargestCude(maxValue) {
  let n = 0;
  while ((n + 1) ** 3 <= maxValue) {
    n++;
  }
  return n ** 3;
}

const maxValue = 55555;
const largestCude = findLargestCude(maxValue);
console.log(largestCude);