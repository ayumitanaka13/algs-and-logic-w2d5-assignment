// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {

  const arr = [];
  for (let i = 2; i <= n; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
          if (i % j === 0) {
              count++;
          }
          if (count === 2 && i === j) {
              arr.push(i);
          }
      }
  }
  return arr;
}

console.log(primeGenerator(5));
console.log(primeGenerator(10));
console.log(primeGenerator(100));