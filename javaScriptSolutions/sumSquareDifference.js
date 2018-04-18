const sumSquareDifference = (num) => {
  let sum = 0;
  let sumSquares = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
    sumSquares += (i ** 2);
  }
  let squareSum = sum ** 2;
  return (squareSum - sumSquares);
}

console.log(sumSquareDifference(100));
