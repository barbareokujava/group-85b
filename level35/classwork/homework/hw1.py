#1) რა არის ფუნქცია?
#ფუნქცია არის პატარა „მანქანა“, რომელსაც აძლევ რაღაცას და ის გიბრუნებს პასუხს.
#მაგალითად: აძლევ რიცხვს → გიბრუნებს მის გაორმაგებულს.

#2
def check(num):
 if num % 2 == 0:
   print("Even")
 else:
   print("Odd")
check(5)
check(10)


#3 
def sum_positive(numbers):
 total = 0
 for n in numbers:
        if n > 0:
            total += n
 return total
print(sum_positive([2,1,3,5,6]))

