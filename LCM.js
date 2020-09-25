// find the lowest common multiple of two given numbers

const gcd = function(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b; 
    } else {
      b -= a;
    }
  }
  return b;
}

const lcm = function(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(6, 4)) //12
console.log(lcm(16, 48)) //48
console.log(lcm(17, 194)) //3298