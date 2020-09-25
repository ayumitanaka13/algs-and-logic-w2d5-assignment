// find the greatest common divisor of the two numbers given

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

console.log(gcd(6, 4)) //2
console.log(gcd(16, 48)) //16
console.log(gcd(17, 194)) //1