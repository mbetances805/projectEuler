# If we list all the natural numbers below 10 that are multiples 
# of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

def find_sum_of_multiples(factor_a, factor_b, num):
    total_sum = 0
    for multiple in range(0, num):
        if multiple % factor_a == 0 or multiple % factor_b == 0:
            total_sum += multiple
    print (total_sum)
    return total_sum
    
find_sum_of_multiples(3, 5, 1000)
    