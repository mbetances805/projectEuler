def sum_square_difference(num):
    sum = 0
    sumSquares = 0
    for x in range(1, num + 1):
        sum += x
        sumSquares += (x ** 2)
    
    squareSum = sum ** 2
    return (squareSum - sumSquares)
    
print(sum_square_difference(100))