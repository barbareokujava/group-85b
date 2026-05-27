#3 
def sum_positive(numbers):
 total = 0
 for n in numbers:
        if n > 0:
            total += n
 return total
print(sum_positive([2,1,3,5,6]))