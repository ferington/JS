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

function findSmallestDivisor(n) {
    if (n % 2 === 0) return 2;
    const limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return i;
    }
    return n; // n is prime
}

function sortNumbers(max) {
    const numbers = [];
    for (let i = 2; i <= max; i++) {
        numbers.push(i);
    }

    numbers.sort((a, b) => {
        const divA = findSmallestDivisor(a);
        const divB = findSmallestDivisor(b);
        if (divA === divB) {
            return b - a; // Sort by the number itself in descending order if divisors are the same
        }
        return divB - divA; // Sort by smallest divisor in descending order
    });

    return numbers[240000]; // Index 240000 for the 240001st element (0-based index)
}

console.log(sortNumbers(1000000));
