// A palindromic number reads the same both ways. The largest palindrome made from
// the product of two 2-digit numbers is 9009 = 91 * 99. Find the largest palindrome
// made from the product of two 3-digit numbers.
// Solution 1
const largestPalindromeProd = (num) => {
  let lowerBound = 1,
      maxPalindrome = 0;

  for (let i = 1; i < num; i++) {
    lowerBound *= 10;
  }

  let upperBound = lowerBound * 10;

  for (let j = lowerBound; j < upperBound; j++) {
    for (let k = lowerBound + 1; k < upperBound; k++) {
      let product = j * k;
      let reverseProduct = Number(product.toString().split('').reverse().join(''));

      if (product === reverseProduct && reverseProduct > maxPalindrome) {
        maxPalindrome = reverseProduct
      }
    }
  }
  return maxPalindrome;
}

// Solution 2
const largestPalindromeProduct = () => {
  let maxPalindrome = 0,
      firstFactor = 100;

  while (firstFactor < 1000) {
    for (let i = firstFactor + 1; i < 1000; i++) {
      let product = firstFactor * i;
      let reverseProduct = Number(product.toString().split('').reverse().join(''));
      if (product === reverseProduct && reverseProduct > maxPalindrome) {
        maxPalindrome = reverseProduct;
      }
    }
    firstFactor++;
  }

  return maxPalindrome;
}

console.log(largestPalindromeProduct())
console.log(largestPalindromeProd(3))
